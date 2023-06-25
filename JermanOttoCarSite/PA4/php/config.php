<?php
// <!-- Selepe Sello uXXXXXXXX -->
    if (!(session_status() === PHP_SESSION_ACTIVE)){
        session_start();
    }

    class UserRegistration
    {
        // Member variables for User Registration class
        private $Host = 'localhost';
        private $DatabaseName = 'uXXXXXXXX';
        private $Username = 'uXXXXXXXX';
        private $Password = 'P@ssw0rd';
        private $Users_table = 'users';
        private $Cars_table = 'cars';
        private $initConnection = null;

        // Creating an instance of the UserRegistration class
        public static function instance()
        {
            static $instance = null;
            if ($instance === null){
                $instance = new UserRegistration();
            }
            return $instance;
        }

        // Method for Closing the database connection
        private function close($connection) {
            $connection->close();
        }

        // The Constructor for the UserRegistration class
        private function __construct() // connecting to the db using environment variables in .env file
        {
            if ($this->initConnection !== null)
            {
                if (mysqli_ping($this->initConnection))
                {
                    $this->initConnection->close();
                }
            }
            // Initializing the Connection object
            $this->initConnection = new mysqli($this->Host, $this->Username, $this->Password);
            // Checking if Connection was successful
            if ($this->initConnection->connect_error){
                die("Connection to the Database failed: " . $this->initConnection->connect_error);
            }
            else{
                $this->initConnection->select_db($this->DatabaseName);
            }
        }

        // The Destructor for the UserRegistration class
        public function __destruct() // destructor closes connection
        {
            // Check if the connection is still open and close it
            if (mysqli_ping($this->initConnection))
            {
                $this->initConnection->close();
            }
        }

        // The Add User method for the UserRegistration class
        public function addUser($Name, $Surname, $Email, $Password)
        {
            // Check if the User already exists in the database with same email
            if (UserRegistration::userExists($Email)){
                return "User already exists";
            }
            else{
                // Generate a RANDOM SALT value between [2000000000, 2147483646].
                $min = 2000000000;
                $max = 2147483646;
                $salt = rand($min, $max);
                // Hash PASSWORD using the random number as the salt with "sha256" and hash_pbkdf2 method
                $hashedPassword = $this->encrypt_password($Password, $salt);
                // Generating an API key for the User
                $APIkey = $this->generateRandomAPIKey();
                // Connecting to the database to store User information
                $UserQueryExecution = $this->initConnection->prepare("INSERT INTO users (name, surname, email, password, API_key, salt) VALUES (?,?,?,?,?,?)");
                $UserQueryExecution->bind_param("sssssi", $Name, $Surname, $Email, $hashedPassword, $APIkey, $salt);
                $UserQueryExecution->execute();
                // If no row was added
                if ($UserQueryExecution->affected_rows <= 0){
                    return "Internal server error";
                }
                return true;
            }
        }

        // Encrypt Password and return a HASH of length 128, VARCHAR(128).
        function encrypt_password($Password, $salt){
            // Using 1000 iterations for the hash_pbkdf2 method, and a HASH length of 32 BYTES
            $hash = hash_pbkdf2("sha256", $Password, $salt, 1000, 32);
            // Finally i Concatenate and encode the SALT and HASH
            return base64_encode($salt . $hash);
        }

        // Verify Password, Encrypt the Password using the encrypt_password($Password, $salt) method and compare it with the stored one.
        function verify_password($Password, $stored_hash, $salt){
            // $decoded = base64_decode($stored_hash);
            $hash = $this->encrypt_password($Password, $salt);
            return $hash == $stored_hash;
        }

        // Generating random API Keys, default length is 20
        function generateRandomAPIKey($length = 32){
            $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $charactersLength = strlen($characters);
            $randomString = '';
            if($length > 32){
                $length = 32;
            }
            // This generates a random string of length $length, which is 20 for now.
            for ($i = 0; $i < $length; $i++){
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            return $randomString;
        }

        // Method to check whether a User already Exists by their email; returns true if successful else return false
        public function userExists($Email)
        {
            $UserQueryExecution = $this->initConnection->prepare("SELECT * FROM users WHERE email = ?");
            $UserQueryExecution->bind_param("s", $Email);
            $UserQueryExecution->execute();
            $result = $UserQueryExecution->get_result();
            if ($result->num_rows == 0){
                return false;
            }
            return true;
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

        // Getting the User's Name and Surname
        public function getUserName($Email){
            $UserQueryExecution = $this->initConnection->prepare("SELECT name, surname FROM users WHERE email = ?");
            $UserQueryExecution->bind_param("s", $Email);
            $UserQueryExecution->execute();
            $result = $UserQueryExecution->get_result();
            if ($result->num_rows > 0){
                $row = $result->fetch_assoc();
                return $row["name"] . " " . $row["surname"];
            }
            else {
                return "No Name";
            }
        }

        // Getting the User's Name and Surname
        public function getAPI_Key($Email){
            $UserQueryExecution = $this->initConnection->prepare("SELECT API_key FROM users WHERE email = ?");
            $UserQueryExecution->bind_param("s", $Email);
            $UserQueryExecution->execute();
            $result = $UserQueryExecution->get_result();
            if ($result->num_rows > 0){
                $row = $result->fetch_assoc();
                return $row["API_key"];
            }
            else {
                return "No Key";
            }
        }

        // Method to check whether the provided Login details are Correct; returns true if successful else return string error message
        public function isValidLogin($Email, $Password)
        {
            if (!UserRegistration::userExists($Email)){
                return "User does not exist";
            }
            else{
                $UserQueryExecution = $this->initConnection->prepare("SELECT password, salt FROM users WHERE email = ?");
                $UserQueryExecution->bind_param("s", $Email);
                $UserQueryExecution->execute();
                $result = $UserQueryExecution->get_result();
                // If there are some rows returned
                if ($result->num_rows > 0){
                    foreach ($result as $row){
                        $pass = $row['password'];
                        $salt = $row['salt'];
                        break;
                    }
                    // Now verifying the password against the $pass from the database
                    if ($this->verify_password($Password, $pass, $salt)){
                        return true;
                    }
                    return "Incorrect password";
                }
                else{
                    return "Internal Server Error/Incorrect password";
                }
            }
        }

        public function validateSignupInputs($Name, $Surname, $Email, $Password, $PassConfirmation){
            // All fields are not empty
            if (empty($Name) || empty($Surname) || empty($Email) || empty($Password) || empty($PassConfirmation)){
                return "All Fields SHOULD Not Be Empty";
            }
            // The NAME and SURNAME fields contain only Characters
            if (!preg_match('/^[a-zA-Z ]+$/', $Name) || !preg_match('/^[a-zA-Z ]+$/', $Surname)){
                return "The NAME and SURNAME fields SHOULD contain only Characters";
            }
            // The EMAIL contains '@gmail.com' or '@tuks.co.za', and also that it has a letter on the LEFT.
            if (!preg_match('/^[a-zA-Z].*@gmail\.com$|^[a-zA-Z].*@tuks\.co\.za$/', $Email)){
                return "The EMAIL SHOULD contain '@gmail.com' or '@tuks.co.za', and AT LEAST a letter on the LEFT.";
            }
            // Making sure the EMAIL doesn't contain Illegal Characters
            if (preg_match('/[\/\\\|<>\'\"]/', $Email)){
                return "Make sure the EMAIL doesn't contain Illegal Characters";
            }
            // The PASSWORD is at least 8 Characters long and contains a Number, Contains a special Character, Uppercase and Lowercase letters.
            if (!preg_match('/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/', $Password)){
                return "Make sure the PASSWORD is at least 8 Characters long and contains a Number, Contains a special Character, Uppercase and Lowercase letters.";
            }
            // Making sure the PASSWORD doesn't contain Illegal Characters
            if (preg_match('/[\/\\\|<>\'\"]/', $Password)){
                return "Make sure the PASSWORD doesn't contain Illegal Characters";
            }
            // The PASSWORD and CONFIRM PASSWORD match
            if ($Password !== $PassConfirmation){
                return "The PASSWORD and CONFIRM PASSWORD SHOULD match";
            }
            // All Checks are SUCCESSFUL
            return "SUCCESSFUL";
        }

        // * PREFERENCES TABLE
        public function Add_Update_Preference($API_key, $theme, $brand, $engine_type, $transmission, $body_type){
            // Check if the User already exists in the database
            if (UserRegistration::keyExists($API_key)){
                // Check if there's an existing preference with the same API key
                $UserQueryExecution = $this->initConnection->prepare("SELECT * FROM  preferences WHERE API_key= ?");
                $UserQueryExecution->bind_param("s", $API_key);
                $UserQueryExecution->execute();
                $result = $UserQueryExecution->get_result();
                if ($result->num_rows > 0){
                    // Connecting to the database to store User information
                    $UserQueryExecution2 = $this->initConnection->prepare("UPDATE preferences SET theme=?, make=?, engine_type=?, transmission=?, body_type=? WHERE API_key=?");
                    $UserQueryExecution2->bind_param("ssssss", $theme, $brand, $engine_type, $transmission, $body_type, $API_key);
                    $UserQueryExecution2->execute();
                    // If no row was added
                    if ($UserQueryExecution2->affected_rows <= 0){
                        return false;
                    }
                    return true;
                }
                else{
                    // Connecting to the database to store User information
                    $UserQueryExecution2 = $this->initConnection->prepare("INSERT INTO preferences (API_key, theme, make, engine_type, transmission, body_type) VALUES (?,?,?,?,?,?)");
                    $UserQueryExecution2->bind_param("ssssss", $API_key, $theme, $brand, $engine_type, $transmission, $body_type);
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
        public function Set_Preferences($API_key){
            $UserQueryExecution = $this->initConnection->prepare("SELECT theme, make, engine_type, transmission, body_type FROM preferences  WHERE API_key=?");
            $UserQueryExecution->bind_param("s", $API_key);
            $UserQueryExecution->execute();
            $result = $UserQueryExecution->get_result();
            if ($result->num_rows > 0){
                $row = $result->fetch_assoc();
                // Checking if theme col is null
                if(is_null($row["theme"]) || $row["theme"] == null){
                    echo '<script>localStorage.setItem("theme", "N/A");</script>';
                }
                else{
                    echo '<script>localStorage.setItem("default_theme", "' . $row["theme"] . '");</script>';
                }
                // Checking if make col is null
                if(is_null($row["make"]) || $row["make"] == null){
                    echo '<script>localStorage.setItem("make", "N/A");</script>';
                }
                else{
                    echo '<script>localStorage.setItem("make", "' . $row["make"] . '");</script>';
                }
                // Checking if engine_type col is null
                if(is_null($row["engine_type"]) || $row["engine_type"] == null){
                    echo '<script>localStorage.setItem("engine_type", "N/A");</script>';
                }
                else{
                    echo '<script>localStorage.setItem("engine_type", "' . $row["engine_type"] . '");</script>';
                }
                // Checking if transmission col is null
                if(is_null($row["transmission"]) || $row["transmission"] == null){
                    echo '<script>localStorage.setItem("transmission", "N/A");</script>';
                }
                else{
                    echo '<script>localStorage.setItem("transmission", "' . $row["transmission"] . '");</script>';
                }
                // Checking if body_type col is null
                if(is_null($row["body_type"]) || $row["body_type"] == null){
                    echo '<script>localStorage.setItem("body_type", "N/A");</script>';
                }
                else{
                    echo '<script>localStorage.setItem("body_type", "' . $row["body_type"] . '");</script>';
                }
                // return $row["API_key"];
                return true;
            }
            else {
                echo '<script>localStorage.setItem("theme", "N/A");</script>';
                echo '<script>localStorage.setItem("make", "N/A");</script>';
                echo '<script>localStorage.setItem("engine_type", "N/A");</script>';
                echo '<script>localStorage.setItem("transmission", "N/A");</script>';
                echo '<script>localStorage.setItem("body_type", "N/A");</script>';
                return false;
            }
        }
    }
?>