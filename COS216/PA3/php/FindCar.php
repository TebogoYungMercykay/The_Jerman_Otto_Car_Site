<!-- Selepe Sello uXXXXXXXX -->
<!DOCTYPE html>
<html lang="en">
	<head>
    <?php include_once("head.php"); ?>
    </head>
	<body class="background-find-car">
        <?php include_once("header.php"); ?>
        <?php
            if (!isset($_SESSION['user'])) {
                header("Location: login.php");
            }
        ?>
        <section id="logo" class="mt-5">
            <div class="name-logo-top">
                <h1 class="page-name-purpose" id="page-name-find">Find A Perfect Car With Jerman <img class="logo-top-img-2" src="../img/logo.jpg" alt="Jerman Otto"/>tto</h1>
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
        <div class="logoContainer" id="div-with-form">
            <div class="logo">
                <form class="main-form" action="" method="post" autocomplete="off" enctype="multipart/form-data">
                    <label class="form-label"><h5>Make/Brand:<label class="required">&nbsp;*</label>&nbsp;&nbsp;&nbsp;</h5></label>
                        <input type="text" class="form-input" id="find-brand" name="find-brand" placeholder="AC" required/><br>
                    <label class="form-label"><h5>Engine Type:<label class="required">&nbsp;*</label>&nbsp;&nbsp;</h5></label>
                        <select required name="find-engine-type" title="select-car" class="form-input" id="find-engine-type">
                            <option class="select-options" value="0">-- Engine Type --</option>
                            <option class="select-options" value="Gasoline">Gasoline</option>
                            <option class="select-options" value="Diesel">Diesel</option>
                            <option class="select-options" value="Hybrid">Hybrid</option>
                            <option class="select-options" value="Gasoline, Electric">Gasoline || Electric</option>
                        </select><br>
                    <label class="form-label"><h5>Transmission:<label class="required">&nbsp;*</label>&nbsp;</h5></label>
                        <input type="text" class="form-input" id="find-transmission" name="find-transmission" placeholder="Automatic" required><br>
                    <label class="form-label"><h5>Body Type:<label class="required">&nbsp;*</label>&nbsp;&nbsp;&nbsp;&nbsp;</h5></label>
                        <input type="text" class="form-input" id="find-body-type" name="find-body-type" placeholder="Cabriolet" required><br>
                    <label class="form-label"><h5>Model:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5></label>
                        <input type="text" class="form-input" id="find-model" name="find-model" placeholder="ACE"><br>
                    <label class="form-label"><h5>Number of Seats:</h5></label>
                        <input type="number" class="form-input" id="find-num-of-seats" name="find-num-of-seats" placeholder="2" min="2" max="15"><br>
                    <br>
                    <input id="submit-find-car" type="reset" name="reset" value="Reset Form" class="btnFindCarResults">
                    <button title="Submit" type="submit" id="find-submit" class="btnFindCarResults">Find Car</button>
                </form>
            </div>
        </div>
        <div class="about" id="div-with-cars">
            <div id="cars-listing-in-find" class="class-cars-listings">
            </div>
            <div class="div-with-button" id="div-with-button">
                <input id="sucess-display-results" type="button" name="submit" value="Search Again" class="btnFindCarResults">
            </div>
        </div>
        <br>
        <script src="../js/findCar.js" type="text/javascript"></script>
        <?php include_once("footer.php"); ?>
	</body>
</html>