<!-- Selepe Sello uXXXXXXXX -->
<?php
    include_once("config.php");
    if (isset($_SESSION['user'])) {
        // User is already logged in, redirect to home page
        header("Location: index.php");
        exit;
    }
    else if (isset($_POST['submit'])) {
        $connectionObject = UserRegistration::instance();
        $Email = $_POST['email'];
        $Password = $_POST['password'];
        $response = $connectionObject->isValidLogin($Email, $Password);
        // If the login is valid
        if ($response === true) {
            // Using a helper function TO Get the user's name, surname and API key
            $user_name = $connectionObject->getUserName($Email);
            $api_key = $connectionObject->getAPI_Key($Email);
            // set email and name session variables
            $_SESSION['user'] = array('name' => $user_name, 'email' => $Email, 'API_key' => $api_key);
            // redirect to homepage - cars
            header("Location: index.php");
            exit;
        }
        else{
            echo "<!DOCTYPE html>
            <html lang='en'>
                <head>
                    <title>Jerman Otto Company Page</title>
                    <link rel='icon' href='../img/logo.jpg' type='image/icon type'>
                    <meta charset='UTF-8'>
                    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                    <meta name='author' content='Selepe Sello'>
                    <meta name='description' content='COS216 Practical Assignment 1'>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                    <meta name='keywords' content='COS216 Practical, Pretoria, Gauteng, South Africa'>
                    <link rel='icon' href='./favicon_io/favicon.ico'>
                    <link rel='stylesheet' type='text/css' href='https://use.fontawesome.com/releases/v5.1.0/css/all.css' integrity='sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt' crossorigin='anonymous'>
                    <link rel='stylesheet' type='text/css' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' integrity='sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg==' crossorigin='anonymous' referrerpolicy='no-referrer' />
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' integrity='sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==' crossorigin='anonymous'></script>
                    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
                    <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css'  type='text/css' rel='stylesheet' integrity='sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx' crossorigin='anonymous' />
                    <link rel='stylesheet' type='text/css' href='../css/jerman-otto-styles.css'>
                </head>
                <body class='login-signup'>
                    <?php include_once('header.php'); ?>
                    <section id='logo-index' class='mt-5'>
                        <div class='col-12' style='text-align:center;'>
                        <img class='logo-top-img-error' src='../img/logo.jpg' alt='Jerman Otto'/>
                        <h1 class='page-name-purpose'>Jerman Otto</h1>
                        </div>
                    </section>
                    <div class='logoContainer' id='div-with-form'>
                        <form class='main-form' action='' method='post' autocomplete='off' enctype='multipart/form-data'>
                            <h5 class='form-title-error' id='form-title-pref-error'>THE LOGIN DETAILS YOU PROVIDED ARE INVALID!!!</h5>
                            <p>Please make sure you enter valid details</p>
                        </form>
                    </div>
                    <?php include_once('footer.php'); ?>
                </body>
            </html>";
            header('Refresh: 3; url=login.php');
            exit;
        }
    }
    else{
        // Redirect the user to the login page
        header("Location: login.php");
        exit;
    }
?>