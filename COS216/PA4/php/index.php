<!-- Selepe Sello uXXXXXXXX -->
<!DOCTYPE html>
<html lang="en" data-theme="light">
	<head>
        <?php include_once("head.php"); ?>
    </head>
	<body class="background-cars">
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
                <h1 class="page-name-purpose" id="page-name-cars">Cars at Jerman <img class="logo-top-img-2" src="../img/logo.jpg" alt="Jerman Otto"/>tto</h1>
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
        <div class="about">
            <div id="cars-listing-sorts" class="class-cars-listings">
                <div class="class-cars-listing">
                    <input type="text" placeholder="Search Here.." class="search-bar-top" name="search" id="search_json_object">
                    <button type="submit" title="Submit" class="search-bar-top"><i class="fa fa-search"></i></button>
                </div>
                <div class="class-cars-listing">
                    <select name="car-select-two" title="select-car" class="car-preferences" id="car-preferences">
                        <option class="select-options-cars" value="0">-- Filter Items By --</option>
                        <option class="select-options-cars" value="engine_type,Gasoline">Engine (Gasoline)</option>
                        <option class="select-options-cars" value="engine_type,Diesel">Engine (Diesel)</option>
                        <option class="select-options-cars" value="transmission,Automatic">Transmission (Automatic)</option>
                        <option class="select-options-cars" value="transmission,Manual">Transmission (Manual)</option>
                        <option class="select-options-cars" value="body_type,Coupe">Body Type (Coupe)</option>
                        <option class="select-options-cars" value="body_type,Cabriolet">Body Type (Cabriolet)</option>
                    </select>
                </div>
                <div class="class-cars-listing">
                    <select name="car-select-one" title="select-car" class="sort-items-by" id="sort-items-by">
                        <option class="select-options-cars" value="0">-- Sort Items By --</option>
                        <option class="select-options-cars" value="body_type,ASC">Body Type (ASC)</option>
                        <option class="select-options-cars" value="body_type,DESC">Body Type (DESC)</option>
                        <option class="select-options-cars" value="engine_type,ASC">Engine Type (ASC)</option>
                        <option class="select-options-cars" value="engine_type,DESC">Engine Type (DESC)</option>
                        <option class="select-options-cars" value="max_speed_km_per_h,ASC">Max Speed (ASC)</option>
                        <option class="select-options-cars" value="max_speed_km_per_h,DESC">Max Speed (DESC)</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="about">
            <div id="cars-listing" class="class-cars-listings">
            </div>
        </div>
        <br>
        <script src="../js/carListing.js" type="text/javascript"></script>
        <?php include_once("footer.php"); ?>
	</body>
</html>