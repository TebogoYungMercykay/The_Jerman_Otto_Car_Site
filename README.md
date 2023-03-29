____________________________________________________________________________________
# Polishing: Full Stack Development From Scratch, Prep for Upcoming Portfolio Webside!!
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
### My Repo Directory Looks Like This So Far
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
      - THIS IS CURRENTLY WHERE I AM AT
    - **index.html**
    - **...**

____________________________________________________________________________________
## Name of Company: Jerman Otto
LogoImg
____________________________________________________________________________________
## Topics In Brief Per PA Sub-Folder From 1 To 5 For The Cars Site
- #### PA1
    - Created a web page which complies to the HTML5 standards and CSS styling.
          - http://validator.w3.org/, https://jigsaw.w3.org/css-validator/
    - **Functionality:**
        - A navbar from where navigation to each component/part is showcased.
        - A client must be able to navigate through all the PAs from the Launch Page.
        - An "under construction" page which is the page displayed if the tab has not as yet been completed.
        - Making sure that the web works in as many browsers as possible.
        - Layout, Backrounds, Fonts, Text, Boxes, Colours, Sizes and etc.
        - #### Workflow: Only HTML and CSS with Mock Data
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
    ```css
        .class-brands-listings
        {
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


- #### PA2
    - ###### I will develop this using XAMP
    - Loading Screen.
    - JavaScript Animations.
    - JQuery for DOM manipulation.
    - Retrieving data from APIs.
    - Populating your templates with the retrieved API data.
    - Implementing the Find me a car page.
    - Implementing the Compare page.
    - #### API Functionality
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
                ```javascript
                    function CarListingAlgorithm(JsonObject1){
                    var jsonObject;
                    if(JsonObject1 == undefined){
                        jsonObject = {
                            "studentnum":"uXXXXXXXX",
                            "apikey":"a9198b68355f78830054c31a39916b7f",
                            "type":"GetAllCars",
                            "limit":21,
                            "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                            "sort":"max_speed_km_per_h",
                            "order":"DESC",
                            "fuzzy": false
                        }
                        console.log("Please enter a valid request with at least one parameter");
                        alert('Please enter a valid request with at least one parameter');
                    }
                    else{
                        jsonObject = JsonObject1;
                    }
                    resetDiv("cars-listing");
                    var json = JSON.stringify(jsonObject);
                    $.ajax({
                        url: `https://wheatley.cs.up.ac.za/api/`,
                        method: "POST",
                        data: json,
                        success: function(response) {
                            for(let k = 0; k < response.data.length; k++) {
                            var tempVar = response.data[k].make.toLowerCase();
                                createCars(tempVar, response.data[k]);
                            }
                        },
                        error: function(jqXHR, textStatus, errorThrown) {
                            console.log(errorThrown);
                        }
                    });
                }
        
- #### PA3
  - Using a MySQL DB with PHP.
  - Create PHP API.
  - User Registration with an API.
  - API key Generation and Authorization.
  - I will use the PHP cURL library for the API  development.
  - Default login details (username and password) for a user I have on the API.
  - I will be using phpMyAdmin.
  - #### Workflow Setup:
        - ##### READMe Specifying:
              - How to use the website
              - Explanations for the password requirements, choice of hashing algorithm and generation of API keys
        - ##### Basic setup and page constructio
              - Making use of the include function to stitch pages together.
              - config.php, header.php, footer.php, api.php
              - login.php, validate-login.php, logout.php
              - signup.php, validate-signup.php
              - Database (MySQL DB Dump)
              - User information includes the following fields:  "id", "name", "surname", ""email", "password", "API key".
        - ##### User Registration
              - The goal is for the user to be able to enter in various details on a form on the signup page and register an account on the car website.
              - A signup-validation function which checks (using JavaScript and PHP)[i.e. Both client and server-side validation] whether the information is correct or not. If it is valid, the user is added to the relevant table in the database.
              - Making sure the user can easily register/login to the site.
              - Signup form on the signup page (signup.php) with the following fields:  "name", "surname", "email", "password".
              - Using JavaScript to check that all the fields are filled out correctly.
              - Email address should have an '@' symbol and the Password should be longer than 8 Characters.
              - The Password must also , contain Upper and Lower case Letters, at least One Digit and One Symbol (JS Regex will help).
              - Making use of POST to submit the form information to signup-validation.
              - Add user to DB if it doesn't exist, hash password, Add salt, If user already exist an error must be dispayed!!.
        - ##### Creating a PHP API
              - I will make use OOP to create the API classes. File name "api.php".
              - API should only produce/consume structured JSON data.
              - I will be recreating a modified version the "Get All Cars" section of the API used for PA2 (API Documentation.html).
              - I should be able to use SQL Queries to extract data from the database dynamically.
              - In order to make server side external requests in PHP I will use the PHP cURL library.
              - ###### Additional Resources:
                    - http://php.net/manual/en/curl.examples.php
                    - https://stackoverflow.com/questions/3062324/what-is-curl-in-php
                    - https://www.startutorial.com/articles/view/php-curl
              - The API should should be able to cater for invalid input by returning an error back that will be handled client side.
  - ##### EXAMPLES
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
                status": "success",
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
