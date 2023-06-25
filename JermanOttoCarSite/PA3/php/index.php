<!-- Selepe Sello uXXXXXXXX -->
<!DOCTYPE html>
<html lang="en">
	<head>
        <?php include_once("head.php"); ?>
    </head>
	<body class="background-cars">
        <?php include_once("header.php"); ?>
        <?php
            if (!isset($_SESSION['user'])) {
                header("Location: login.php");
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
                        <option class="select-options-cars" value="1">Engine (Gasoline)</option>
                        <option class="select-options-cars" value="2">Transmission (Automatic)</option>
                        <option class="select-options-cars" value="3">Transmission (Manual)</option>
                        <option class="select-options-cars" value="4">2 Seater</option>
                        <option class="select-options-cars" value="5">Rear wheel drive</option>
                        <option class="select-options-cars" value="6">All Wheel Drive</option>
                        <option class="select-options-cars" value="7">Body Type (Coupe)</option>
                        <option class="select-options-cars" value="8">Body Type (Cabriolet)</option>
                    </select>
                </div>
                <div class="class-cars-listing">
                    <select name="car-select-one" title="select-car" class="sort-items-by" id="sort-items-by">
                        <option class="select-options-cars" value="0">-- Sort Items By--</option>
                        <option class="select-options-cars" value="1">Body Type (ASC)</option>
                        <option class="select-options-cars" value="2">Body Type (DESC)</option>
                        <option class="select-options-cars" value="3">Engine Type (ASC)</option>
                        <option class="select-options-cars" value="4">Engine Type (DESC)</option>
                        <option class="select-options-cars" value="5">Max Speed (ASC)</option>
                        <option class="select-options-cars" value="6">Max Speed (DESC)</option>
                        <option class="select-options-cars" value="7">Transmission (ASC)</option>
                        <option class="select-options-cars" value="8">Transmission (DESC)</option>
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