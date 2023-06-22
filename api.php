<?php
// <!-- Selepe Sello uXXXXXXXX -->
    include_once("JermanOttoCarSite/PA4/php/api_config.php");
    // Storing the Input data in the $json_data variable
    $json_data = file_get_contents('php://input');
    // Now Executing things!!
    $data1 = json_decode($json_data, true);
    if(isset($data1['rating'])){
        $connectionObject = REST_API_CARS::instance();
        $API_key = $data1['API_key'];
        $id_trim = $data1['id_trim'];
        $rating = $data1['rating'];
        $connectionObject = $connectionObject->Rate_A_Car($id_trim, $API_key, $rating);
        if($connectionObject === true){
            return true;
        }
        else {
            return false;
        }
    } else {
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $cars_object = new REST_API($json_data);
        } else {
            header("HTTP/1.1 400");
            header("Content-Type: application/json; charset=UTF-8");
            header('Access-Control-Allow-Origin: *');
            $data = [
                "status" => "error",
                "timestamp" => time(),
                "data" => "Error. Bad Request"
            ];
            echo json_encode(
                $data
            );
        }
    }
    // *-------------- DONE, API CLASS STARTS HERE --------------
    class REST_API {
        public $connectionObject = null;
        // Required parameters
        private $type = null;
        private $apikey = null; private $limit = null; private $fuzzy = true;
        // Sort by variables setup
        private $sort_array = array();
        private $order = null;
        // Search JSON search object variables setup
        private $search_object = array();
        // Return array Variables setup
        private $return_array = array();
        public $finalResponse = '';
        public $sql_query_builder = null;
        // *-------------- CLASS METHODS, DESTRUCTOR AND CONSTRUCTOR --------------
        public function __construct($json_data){
            $this->connectionObject = REST_API_CARS::instance();
            // Now Setting the Values from the Post Request
            $data = json_decode($json_data, true);
            // * Checking if Required parameters are SET/PRESENT:
            if (!(isset($data['apikey']) && isset($data['type']) && isset($data['return']))){
                $this->finalResponse = [
                    "status" => "error",
                    "timestamp" => time(),
                    "data" => "Error. Post parameters are Missing"
                ];
            } else {
                $this->apikey = $data['apikey'];
                $this->type = $data['type'];
                if ($this->connectionObject->KeyExists($this->apikey) === false || strlen($this->apikey) > 32  || strlen($this->apikey) === 0){
                    // The provided API_key is not present in the database:
                    $this->finalResponse = [
                        "status" => "error",
                        "timestamp" => time(),
                        "data" => "Error. Invalid apikey used"
                    ];
                } else if ($this->type != "GetAllCars"){
                    $this->finalResponse = [
                        "status" => "error",
                        "timestamp" => time(),
                        "data" => "Error. Invalid type used"
                    ];
                } else {
                    if (isset($data['limit'])){
                        $this->limit = $data['limit'];
                    } else {
                        $this->limit = null;
                    }
                    if (isset($data['order'])){
                        $this->order = $data['order'];
                    } else {
                        $this->order = null;
                    }
                    if (isset($data['fuzzy'])){
                        $this->fuzzy = $data['fuzzy'];
                    }
                    if (isset($data['search'])){
                        // The 'search' property is present in the JSON object
                        $this->search_object = '';
                        $search_object = json_encode($data['search']);
                        $search_associative_array = json_decode($search_object, true);
                        $valid_search_parameters = ['make', 'model', 'body_type', 'engine_type', 'transmission'];
                        foreach($search_associative_array as $key_param => $value_param){
                            if (in_array($key_param, $valid_search_parameters)){
                                if ($this->search_object != ''){
                                    $this->search_object .= ' AND ';
                                }
                                if ($this->fuzzy == true){
                                    // * Fuzzy Search
                                    if($this->fuzzySearch($key_param, $value_param) === false){
                                        $this->search_object .= "$key_param = '$value_param'";
                                    } else {
                                        $this->search_object .= "(" . $this->fuzzySearch($key_param, $value_param) . ")";
                                    }
                                } else {
                                    $this->search_object .= "$key_param = '$value_param'";
                                }
                            }
                        }
                    } else {
                        $this->search_object = null;
                    }
                    if (isset($data['return'])){
                        // The 'return' property is present in the JSON object
                        if ($data['return'] === "*" || $data['return'] === '*'){
                            $this->return_array = "*";
                        } else {
                            $this->return_array = $data['return'];
                            $this->removeImageField();
                            $valid_return = ['id_trim', 'make', 'model', 'generation', 'year_from', 'year_to', 'series', 'trim', 'body_type', 'number_of_seats', 'length_mm', 'width_mm', 'height_mm', 'number_of_cylinders', 'engine_type', 'drive_wheels', 'transmission', 'max_speed_km_per_h'];
                            $this->finalResponse = '';
                            foreach ($this->return_array as $element){
                                if (!(in_array($element, $valid_return))){
                                    $this->finalResponse = [
                                        "status" => "error",
                                        "timestamp" => time(),
                                        "data" => "Error. Invalid return parameters"
                                    ];
                                    break;
                                }
                            }
                            if ($this->finalResponse === ''){
                                $this->return_array = $data['return'];
                                $this->removeImageField();
                            }
                        }
                    } else {
                        $this->return_array = null;
                    }
                    if (isset($data['sort'])){
                        $this->sort_array = $data['sort'];
                    } else {
                        $this->sort_array = null;
                    }
                }
            }
            $this->build_request();
        }

        // * This method Creates the sql request variable
        public function build_request(){
            if ($this->sql_query_builder === null && $this->finalResponse === ''){
                if ($this->return_array !== null){
                    if ($this->return_array === "*" || $this->return_array === '*'){
                        $this->return_array = ['id_trim', 'make', 'model', 'generation', 'year_from', 'year_to', 'series', 'trim', 'body_type', 'number_of_seats', 'length_mm', 'width_mm', 'height_mm', 'number_of_cylinders', 'engine_type', 'drive_wheels', 'transmission', 'max_speed_km_per_h'];
                        $temp_for_images_sake = implode(',', $this->return_array);
                    } else {
                        $temp_for_images_sake = implode(',', $this->return_array) . ',make,model';
                    }
                    $this->sql_query_builder = "SELECT $temp_for_images_sake FROM cars";
                    if ($this->search_object !== null){
                        $this->sql_query_builder .= " WHERE $this->search_object";
                    }
                    if ($this->sort_array !== null){
                        $this->sql_query_builder .= " ORDER BY $this->sort_array";
                    }
                    if ($this->order !== null){
                        $this->sql_query_builder .= " $this->order";
                    }
                    if ($this->limit !== null){
                        $this->sql_query_builder .= " LIMIT $this->limit;";
                    }
                }
            }
            $this->send_request();
        }

        // * This method Executes the sql request variable from the above Method
        public function send_request(){
            if ($this->sql_query_builder !== null){
                $result = mysqli_query($this->connectionObject->initConnection, $this->sql_query_builder);
                if (!$result){
                    $this->finalResponse = [
                        "status" => "error",
                        "timestamp" => time(),
                        "data" => "Error. Some error occurred while executing query"
                    ];
                    $this->response($this->finalResponse);
                    die('Error executing query: ' . mysqli_error($this->connectionObject->initConnection));
                } else {
                    $data = $this->filterResult($result, $this->return_array);
                    $this->finalResponse = array(
                        "status" => "success",
                        "timestamp" => time(),
                        "data" => $data
                    );
                    $this->response($this->finalResponse, 200);
                    mysqli_free_result($result);
                    return;
                }
            }
            $this->response($this->finalResponse);
        }

        // * This method Creates the JSON object from request result
        public function filterResult($result, $valid){
            $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
            // Creating an empty associative array.
            $dataFiltered = array();
            foreach ($data as $row){
                $rowFiltered = array();
                foreach ($valid as $key){
                    if (array_key_exists($key, $row)){
                        $rowFiltered[$key] = $row[$key];
                    }
                }
                $rowFiltered['image'] = $this->getCarImage($row['make'], $row['model']);
                $rowFiltered['image_brand'] = $this->getBrandImage($row['make']);
                $dataFiltered[] = $rowFiltered;
            }
            return $dataFiltered;
        }

        // * This method removes the 'image' field from the return:[] array since it doesn't form part of the database tables
        public function removeImageField(){
            if ($this->return_array != null){
                $found = array_search('image', $this->return_array);
                if ($found !== false){
                    unset($this->return_array[$found]);
                }
            }
        }

        // *-------------- RESPONSE Method With Some Headers --------------
        public function response($data, $code = 400){
            header("HTTP/1.1 $code");
            header("Content-Type: application/json; charset=UTF-8");
            header('Access-Control-Allow-Origin: *');
            echo json_encode(
                $data
            );
        }

        // * Helper method for extracting CARS images using cULR
        public function getCarImage($make, $model){
            $url = "https://wheatley.cs.up.ac.za/api/getimage?brand=" . urlencode($make) . "&model=" . urlencode($model);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($ch);
            curl_close($ch);
            // Now We Returning the URL from the wheatley server
            return $response;
        }

        // * Helper method for extracting BRANDS images using cURL
        public function getBrandImage($make){
            $url = "https://wheatley.cs.up.ac.za/api/getimage?brand=" . urlencode($make);
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            $response = curl_exec($ch);
            curl_close($ch);
            // Now We Returning the URL from the wheatley server
            return $response;
        }

        // * Helper Method for Implementing the Fuzzy Search
        public function fuzzySearch($key_param, $value_param){
            $search_string = trim($value_param);
            if (empty($search_string) === false){
                if(strlen($search_string) >= 3){
                    $len = strlen($search_string)/3;
                    $param1 = '%' . $search_string . '%';
                    $param2 = '%' . substr($search_string, 0, 2*$len) . '%';
                    $param3 = '%' . substr($search_string, $len, strlen($search_string) - 1) . '%';
                    $fuzzySearch = "$key_param LIKE '$param1' OR $key_param LIKE '$param2' OR $key_param LIKE '$param3'";
                    return $fuzzySearch;
                } else {
                    $param1 = '%' . $search_string . '%';
                    $param2 = '%' . substr($search_string, 0, strlen($search_string)/2) . '%';
                    $fuzzySearch = "$key_param LIKE '$param1' OR $key_param LIKE '$param2'";
                    return $fuzzySearch;
                }
            }
            return false;
        }
    }
?>