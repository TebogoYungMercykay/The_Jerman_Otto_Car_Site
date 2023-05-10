<?php
// <!-- Selepe Sello uXXXXXXXX -->
    if (!(session_status() === PHP_SESSION_ACTIVE)){
        session_start();
    }

    class REST_API_CARS
    {
        // Member variables for User Registration class
        private $Host = 'localhost';
        private $DatabaseName = 'uXXXXXXXX';
        private $Username = 'uXXXXXXXX';
        private $Password = 'P@ssw0rd';
        private $Users_table = 'users';
        private $Cars_table = 'cars';
        public $initConnection = null;

        // Creating an instance of the REST_API_CARS class
        public static function instance()
        {
            static $instance = null;
            if ($instance === null){
                $instance = new REST_API_CARS();
            }
            return $instance;
        }

        // Method for Closing the database connection
        private function close($connection) {
            $connection->close();
        }

        // The Constructor for the REST_API_CARS class
        private function __construct() {
            if ($this->initConnection !== null) {
                if (mysqli_ping($this->initConnection)) {
                    $this->initConnection->close();
                }
            }
            // Initializing the Connection object
            $this->initConnection = new mysqli($this->Host, $this->Username, $this->Password);
            // Checking if Connection was successful
            if ($this->initConnection->connect_error) {
                die("Connection to the Database failed: " . $this->initConnection->connect_error);
            }
            else {
                $this->initConnection->select_db($this->DatabaseName);
            }
        }
        // Method for Checking if a certain API key is in the database
        public function keyExists($key) {
            $UserQueryExecution = $this->initConnection->prepare("SELECT * FROM users WHERE API_key = ?");
            $UserQueryExecution->bind_param("s", $key);
            $UserQueryExecution->execute();
            $result = $UserQueryExecution->get_result();
            if ($result->num_rows == 0){
                return false;
            }
            return true;
        }

        // The Destructor for the REST_API_CARS class
        public function __destruct() // destructor closes connection
        {
            // Check if the connection is still open and close it
            if (mysqli_ping($this->initConnection))
            {
                $this->initConnection->close();
            }
        }

        // * RATINGS TABLE
        public function Rate_A_Car($id_trim, $API_key, $rating){
            // Check if the User already exists in the database
            if ($this->keyExists($API_key)){
                // Check if there's an existing rating with the same id_trim.
                $UserQueryExecution = $this->initConnection->prepare("SELECT * FROM rating WHERE id_trim=?");
                $UserQueryExecution->bind_param("i", $id_trim);
                $UserQueryExecution->execute();
                $result = $UserQueryExecution->get_result();
                if ($result->num_rows > 0){
                    // Connecting to the database to store User information
                    $UserQueryExecution2 = $this->initConnection->prepare("UPDATE rating SET car_rating=? WHERE id_trim=?");
                    $UserQueryExecution2->bind_param("ii", $rating, $id_trim);
                    $UserQueryExecution2->execute();
                    // If no row was added
                    if ($UserQueryExecution2->affected_rows <= 0){
                        return false;
                    }
                    return true;
                }
                else{
                    // Connecting to the database to store User information
                    $UserQueryExecution2 = $this->initConnection->prepare("INSERT INTO rating (id_trim, API_key, car_rating) VALUES (?,?,?)");
                    $UserQueryExecution2->bind_param("isi", $id_trim, $API_key, $rating);
                    $UserQueryExecution2->execute();
                    // If no row was added
                    if ($UserQueryExecution2->affected_rows <= 0){
                        return false;
                    }
                    return true;
                }
            }
            return false;
        }
    }
?>