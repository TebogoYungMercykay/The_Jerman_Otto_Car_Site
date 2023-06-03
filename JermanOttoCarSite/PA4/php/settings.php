<!-- Selepe Sello uXXXXXXXX -->
<!DOCTYPE html>
<html lang="en" data-theme="light">
	<head>
		<?php include_once("head.php"); ?>
        <?php echo '<script src="../js/validate-sign-up.js" type="text/javascript"></script>'; ?>
    </head>
	<body class="background-brands">
        <?php include_once("header.php"); ?>
        <?php
            if (!isset($_SESSION['user'])) {
                header("Location: login.php");
            }
            else{
                $connectionObject = UserRegistration::instance();
                $api_key = $_SESSION['user']['API_key'];
                $connectionObject->Set_Preferences($api_key);
            }
        ?>
        <section id="logo" class="mt-5">
            <div class="name-logo-top">
                <h1 class="page-name-purpose" id="page-name-brands">Customize Your Jerman <img class="logo-top-img-2" src="../img/logo.jpg" alt="Jerman Otto"/>tto Account</h1>
                <?php
                    if (isset($_SESSION['user'])) {
                        $api_key = $_SESSION['user']['API_key'];
                        echo "<p>Your API Key is: $api_key</p>";
                    }
                    else{
                        echo "<p>Your API Key is: No API Key </p>";
                    }
                ?>
                <hr>
            </div>
        </section>
        <?php
            // Process the form data
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $connectionObject = UserRegistration::instance();
                // Sanitize the form data
                $api_key = $_POST["api_key"];
                $theme = $_POST["select-theme"];
                $brand = $_POST["find-brand"];
                $engine_type = $_POST["find-engine-type"];
                $transmission = $_POST["find-transmission"];
                $body_type = $_POST["body_type"];
                if(strlen($api_key) == 32 && (strlen($theme) !== 0 || strlen($brand) !== 0 || strlen($engine_type) !== 0 || strlen($body_type) !== 0 || strlen($transmission) !== 0)) {
                    if(strlen($theme) === 0){
                        $theme = null;
                    }
                    if(strlen($brand) === 0){
                        $brand = null;
                    }
                    if(strlen($engine_type) === 0){
                        $engine_type = null;
                    }
                    if(strlen($body_type) === 0){
                        $body_type = null;
                    }
                    if(strlen($transmission) === 0){
                        $transmission = null;
                    }
                    $response = $connectionObject->Add_Update_Preference($api_key, $theme, $brand, $engine_type, $transmission, $body_type);
                    if($response === true){
                        $connectionObject->Set_Preferences($api_key);
                        header('Location: index.php');
                        exit;
                    }
                    else{
                        header('Location: settings.php');
                        exit;
                    }
                }
                else{
                    header('Location: settings.php');
                    exit;
                }
            }
        ?>
        <div class="logoContainer" id="div-with-form">
            <div class="logo">
                <form  class="main-form" id="main-form-settings" method="post" onsubmit="return validateSettingsForm()" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>" autocomplete="off">
                    <h2>SET YOUR PREFERENCES ALL AT ONCE</h2>
                    <label class="form-label"><h5>Enter APIKey:</h5></label>
                        <input required type="text" class="form-input" id="api_key" name="api_key" placeholder="abcdefghijklmnopqrstuvwxyz1234567890"/>
                    <br>
                    <label class="form-label"><h5>Choose Theme:</h5></label>
                        <select name="select-theme" class="form-input" id="select-theme">
                            <option class="select-options" value="0">-- Continue With Defaults --</option>
                            <option class="select-options" value="dark">Dark Mode</option>
                            <option class="select-options" value="light">Light Mode</option>
                        </select><br>
                    <label class="form-label"><h5>Brand Name:&nbsp;&nbsp;</h5></label>
                        <input type="text" class="form-input" id="find-brand" name="find-brand" placeholder="-- Continue With Defaults --"/><br>
                    <label class="form-label"><h5>Engine Type:&nbsp;</h5></label>
                        <select name="find-engine-type" class="form-input" id="find-engine-type">
                            <option class="select-options" value="0">-- Continue With Defaults --</option>
                            <option class="select-options" value="Gasoline">Gasoline</option>
                            <option class="select-options" value="Diesel">Diesel</option>
                            <option class="select-options" value="Hybrid">Hybrid</option>
                            <option class="select-options" value="Gasoline, Electric">Gasoline || Electric</option>
                        </select><br>
                    <label class="form-label"><h5>Transmission:</h5></label>
                        <input type="text" class="form-input" id="find-transmission" name="find-transmission" placeholder="-- Continue With Defaults --"><br><br>
                    <label id="display_radio">
                        <h5>Body Types:
                            Cabriolet <input type="radio" name="body_type" value="Cabriolet"> -
                            Coupe <input type="radio" name="body_type" value="Coupe"> -
                            Sedan <input type="radio" name="body_type" value="Sedan"> -
                            Hatchback <input type="radio" name="body_type" value="Hatchback"> -
                            Wagon <input type="radio" name="body_type" value="Wagon">
                        </h5>
                    </label>
                    <br><br>
                    <input id="submit-find-car" type="reset" name="reset" value="Reset Form" class="btnFindCarResults">
                    <button title="Submit" type="submit" id="find-submit" class="btnFindCarResults">Submit Preferences</button>
                </form>
            </div>
        </div>
        <br>
        <?php include_once("footer.php"); ?>
	</body>
</html>