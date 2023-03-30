____________________________________________________________________________________
# Polishing Full Stack Development Skills: Preparing for an Impressive Portfolio Website!
- The ultimate objective is to construct exceptional web applications and mobile apps. By the end of this journey, I aspire to possess the ability to develop both client and server software proficiently. Moreover, I aim to master HTML and CSS, and to be able to program a browser using popular frameworks such as JavaScript, jQuery, Angular and many more, as well as a server using renowned technologies such as PHP, ASP, Python, or Node.
- Some of The Topics to be Covered Include:
    - **LAMP Stack**
        - HTML
        - JavaScript
        - CSS
        - PHP
        - MySQL
    - **MEAN Stack**
        - MongoDB
        - ExpressJS
        - Angular
        - NodeJS
    - Android and Hybrid Mobile Development.
    - **Extra Topics**
        - XML
        - AJAX
        - JSON
        - JQuery
        - Bootstrap
        - TypeScript
        - Logs
        - Network protocols and sockets.
        - Distributed internet and blockchain.
        - Security (SQL database attacks, security, encryption, and hashing).
        - Other topics of current interest (Advanced Security, Cloud Computing, TailwindCSS).
  
____________________________________________________________________________________
# My Repo Directory Looks Like This So Far
- **README.md**
- **COS216**
    - PA1
      - css
      - HTML
      - img
    - PA2
      - css
      - HTML
      - img
      - js
    - PA3
      - logo.jpg
      - 36-black-and-grey-loading-icons-on-white-background-rgb-eps-10-vector-et17b4
      - THIS IS WHERE I AM CURRENTLY
- **index.html**
- **...**

____________________________________________________________________________________
# Name of imaginary Company: Jerman Otto
<img alt="Profile Picture (*_*)" src="COS216/PA2/logo.jpg" width="300" height="300">

____________________________________________________________________________________
# Topics In Brief Per PA Sub-Folder From 1 To 5 For The Cars Site
- ## PA1
    - Created a web page which complies to the HTML5 standards and CSS styling.
        - http://validator.w3.org/, https://jigsaw.w3.org/css-validator/
    - **Functionality:**
        - A navbar from where navigation to each component/part is showcased.
        - A client must be able to navigate through all the PAs from the Launch Page.
        - An "under construction" page which is the page displayed if the tab has not as yet been completed.
        - Making sure that the web works in as many browsers as possible.
        - Layout, Backrounds, Fonts, Text, Boxes, Colours, Sizes and etc.
        - ### Workflow: Only HTML and CSS with Mock Data
            - Launch Page with Logo.
            - Navigation Bar on all created Pages.
            - Cars Page
                - Searchbar.
                - Filters.
                - Sort.
            - Branch Page
                  - Brand Logo.
                  - Name.
            - Find Me a Car Page
                    - At least 6 Questions.
                    - 4 Required.
                    - 2 Optional.
            - Comapre Cars Page.
            - Under Construction.
      - Example Code HTML & CSS (Check jerman-otto-styles.css and Brands.html, Path: COS216/PA2)
        ```html
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Title</title>
                <meta name="author" content="Selepe Sello">
                <meta name="description" content="Example HTML & CSS Code For My ReadMe.md">
                <meta name="keywords" content="South Africa">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="icon" href="../logo.jpg" type="image/icon type">
                <link rel="stylesheet" type="text/css" href="#" integrity="#" crossorigin="anonymous" referrerpolicy="no-referrer"/>
                <style>
                    /* CSS for listing cars */
                    .Example-CSS-For-Listing-Cars {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(210px, auto));
                        grid-gap: 50px;
                        margin: 50px auto;
                        color: rgb(203, 242, 255);
                        max-width: 1240px;
                        padding: 20px;
                        border-radius: 15px;
                        background-color: rgba(0, 0, 0, 0.75);
                    }
                </style>
            </head>
            <body class="background-brands">
                <header>
                    <!-- Navigation -->
                    <div class="topnav">
                        <a href="#"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
                    </div>
                </header>
                <section id="logo" class="mt-5">
                    <!-- Logo placeholder -->
                    <img src="COS216/PA3/Logo.jpg" alt="Logo">
                </section>
                <div class="Example-CSS-For-Listing-Cars">
                    <!-- Sample text for brands listing: Mock Data -->
                    <p>Brand 1</p>
                    <p>Brand 2</p>
                    <p>Brand 3</p>
                    <p>Brand 4</p>
                    <p>Brand 5</p>
                    <p>Brand 6</p>
                </div>
                <footer class="footer-bottom">
                    <!-- Footer text and email link -->
                    <p>Jerman Auto &copy; 2023 All Rights Reserved! <i class="fab fa-linkedin"></i> <a href="mailto:sbkskhalo.kq@gmail.com">Email</a></p>
                </footer>
            </body>
            </html>



- ## PA2
    - ### I will develop this using XAMP
    - Loading Screen.
    - JavaScript Animations.
    - JQuery for DOM manipulation.
    - Retrieving data from APIs.
    - Populating your templates with the retrieved API data.
    - Implementing the Find me a car page.
    - Implementing the Compare page.
    - ### API Functionality
        - AJAX.
        - JSON Manipulation.
        - Cars/Brands have the correct image pulled from the API.
        - DOM Manipulation.
        - All API calls are done through JavaScript AJAX XMLHttpRequest and jQuery.
        - The data from the API loads dynamically when the user views the page.
        - I used asynchronous so that the execution of one task doesn't dependent on another. Basically multiple tasks can run simultaneously.
        - #### Workflow: No Mock Data!!
          - CARS PAGE
            - Data Population -> Replace Mock Data from prev Cars Page.
            - Search, Filters and Sorting works.
            - Loading Screen.
          - BRANDS PAGE
            - Data Population -> Replace Mock Data from prev Brands Page.
            - Loading Screen
          - FIND ME A CAR
            - Correct results are Displayed.
            - Correct use of API parameters.
          - COMPARE PAGE
            - Car Selection works.
            - Compare Stats Show.
    - API Request Example Code (Check carListing.js, path: Path: COS216/PA2/js)
    ```javascript
        function carListingAlgorithm(jsonObject1) {
            var jsonObject;
            if (jsonObject1 === undefined) {
                jsonObject = {
                    "studentnum": "uXXXXXXXX",
                    "apikey": "a9198b68355f78830054c31a39916b7f",
                    "type": "GetAllCars",
                    "limit": 21,
                    "return": ["make", "model", "body_type", "engine_type", "transmission", "max_speed_km_per_h"],
                    "sort": "max_speed_km_per_h",
                    "order": "DESC",
                    "fuzzy": false
                };
                console.log("Please enter a valid request with at least one parameter");
                alert('Please enter a valid request with at least one parameter');
            }
            else {
                jsonObject = jsonObject1;
            }
            resetDiv("cars-listing");
            var json = JSON.stringify(jsonObject);
            $.ajax({
                url: `https://wheatley.cs.up.ac.za/api/`,
                method: "POST",
                data: json,
                success: function(response) {
                    for (let k = 0; k < response.data.length; k++) {
                        var tempVar = response.data[k].make.toLowerCase();
                        createCars(tempVar, response.data[k]);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log("Status code: " + jqXHR.status + " Status text: " + textStatus);
                    console.log("Error thrown: " + errorThrown);
                }
            });
        }

- ## PA3
  - Using a MySQL DB with PHP.
  - Create PHP API.
  - User Registration with an API.
  - API key Generation and Authorization.
  - I will use the PHP cURL library for the API  development.
  - Default login details (username and password) for a user I have on the API.
  - I will be using phpMyAdmin.
  - ### Workflow Setup:
    - #### READMe Specifying:
      - How to use the website
      - Explanations for the password requirements, choice of hashing algorithm and generation of API keys
    - #### Basic setup and page constructio
      - Making use of the include function to stitch pages together.
         ```php
            <?php
                // file.php
                echo "This is the main file.";
                include "calculate.php";
                // Calling a function from the included PHP(calculate.php) file
                echo "The sum of 2 and 3 is " . GetSum(2, 3);
            ?>
            <!-- calculate.php -->
            <?php
                function GetSum($num1, $num2) {
                    $sum = $num1 + $num2;
                    return $sum;
                }
                function GetDifference($num1, $num2) {
                    $diff = abs($num1 - $num2);
                    return $diff;
                }
            ?>
      - config.php, header.php, footer.php, api.php
      - login.php, validate-login.php, logout.php
      - signup.php, validate-signup.php
      - Database (MySQL DB Dump)
      - Example of a database Dumb:
         ```sql
            CREATE DATABASE  IF NOT EXISTS `example_db`
            USE `example_db`;
            -- MariaDB dump 10.19  Distrib 10.7.3-MariaDB, for Win64 (AMD64)
            -- Remember to add your student number as the database name!
            -- Host: path/to/host    Database: example_db
            -- Server version	10.3.31-MariaDB-0+deb10u1
            -- Table structure for table `users`
            DROP TABLE IF EXISTS `users`;
            CREATE TABLE `users` (
              `id` int(11) NOT NULL AUTO_INCREMENT,
              `name` varchar(50) NOT NULL,
              `surname` varchar(50) NOT NULL,
              `email` varchar(100) NOT NULL,
              `password` char(30) NOT NULL,
              `time_created` int(11) NOT NULL,
              PRIMARY KEY (`id`),
              UNIQUE KEY `email` (`email`)
            ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
            -- Dumping data for table `users`
            LOCK TABLES `users` WRITE;
            -- Inserting values into the DB
            INSERT INTO `users` VALUES
            (1,'Default','User','default@u.c','d9d8c68a295f34ad3ef590a4b683f3',1652881570);
            -- DONE
            UNLOCK TABLES;
            -- Dump completed on 2022-05-19 12:15:54
                                                             
      - User information includes the following fields:  "id", "name", "surname", ""email", "password", "API key".
    - #### User Registration
      - The goal is for the user to be able to enter in various details on a form on the signup page and register an account on the car website.
      - A signup-validation function which checks (using JavaScript and PHP)[i.e. Both client and server-side validation] whether the information is correct or not. If it is valid, the user is added to the relevant table in the database.
      - Making sure the user can easily register/login to the site.
      - Signup form on the signup page (signup.php) with the following fields:  "name", "surname", "email", "password".
      - Using JavaScript to check that all the fields are filled out correctly.
      - Email address should have an '@' symbol and the Password should be longer than 8 Characters.
      - The Password must also , contain Upper and Lower case Letters, at least One Digit and One Symbol (JS Regex will help).
      - Making use of POST to submit the form information to signup-validation.
      - Add user to DB if it doesn't exist, hash password, Add salt, If user already exist an error must be dispayed!!.
    - #### Creating a PHP API
      - I will make use OOP to create the API classes. File name "api.php".
      - API should only produce/consume structured JSON data.
      - I will be recreating a modified version the "Get All Cars" section of the API used for PA2 (API Documentation.html).
      - I should be able to use SQL Queries to extract data from the database dynamically.
      - In order to make server side external requests in PHP I will use the PHP cURL library.
      - ##### Additional Resources:
           - http://php.net/manual/en/curl.examples.php
           - https://stackoverflow.com/questions/3062324/what-is-curl-in-php
           - https://www.startutorial.com/articles/view/php-curl
      - The API should should be able to cater for invalid input by returning an error back that will be handled client side.
    - #### EXAMPLES
        - Request:
            ```json
            {
                "type":"GetAllCars",
                "apikey":"a9198b68355f78830054c31a39916b7f",
                "return":["id_trim", "make", "model", "max_speed_km_per_h","image"],
                "search":{
                "make":"audi",
                "model":"q3"
                },
                "fuzzy":true
            }
        - Response
            ```json
            {
                "status": "success",
                "timestamp":"1679507636541"
                "data": [
                    {
                        "id_trim": 3567,
                        "make": "Audi",
                        "model": "RS Q3",
                        "max_speed_km_per_h": 250,
                        "image":"https://wheatley.cs.up.ac.za/api/images/models/audi_rsq3.jpg"
                    },
                    {
                        "id_trim": 3389,
                        "make": "Audi",
                        "model": "Q3",
                        "max_speed_km_per_h": 233,
                        "image":"https://wheatley.cs.up.ac.za/api/images/models/audi_q3.jpg"
                    }
                ]
            }
        - Error
            ```json
            {
                "status": "error",
                "timestamp": 1679391940921,
                "data": "Error. Post parameters are missing"
            }

____________________________________________________________________________________
## REQUIREMENTS BEFORE RUNNING THE CODES:
- **A text editor**: A text editor is required to create, write and edit code. There are many free and paid text editors available online such as Visual Studio Code, Sublime Text, Notepad++, and Atom.
- **Web server**: A web server is required to serve web pages to users. You can use an existing web server like Apache or Nginx, or you can use a package like XAMPP or WAMP which comes with an integrated web server.
- **HTML**: Hypertext Markup Language is used to create the structure and content of web pages. You need a text editor to create HTML files with an ".html" extension.
- **CSS**: Cascading Style Sheets are used to style the HTML content. You need a text editor to create CSS files with a ".css" extension.
- **JavaScript**: JavaScript is used to add interactivity and functionality to web pages. You need a text editor to create JavaScript files with a ".js" extension.
- **PHP**: PHP is a server-side scripting language used for dynamic web content. You need a web server that supports PHP to run PHP scripts.
- **AJAX**: Asynchronous JavaScript and XML are used to update web content without refreshing the page. You need JavaScript and a web server that supports AJAX.
- **jQuery**: jQuery is a JavaScript library that simplifies HTML document manipulation, event handling, and animation. You need to include jQuery in your HTML file by linking to it in your code.
- **Web browser**: A web browser is necessary to render and display web pages. Popular web browsers include Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and Opera.
____________________________________________________________________________________
                                  ### THE END LOADING
____________________________________________________________________________________
