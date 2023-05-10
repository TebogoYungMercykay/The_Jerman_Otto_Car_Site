<!-- Selepe Sello uXXXXXXXX -->
<!DOCTYPE html>
<html lang="en">
	<head>
		<?php include_once("head.php"); ?>
    </head>
	<body class="background-brands">
        <?php include_once("header.php"); ?>
        <?php
            if (!isset($_SESSION['user'])) {
                header("Location: login.php");
            }
        ?>
        <section id="logo" class="mt-5">
            <div class="name-logo-top">
                <h1 class="page-name-purpose" id="page-name-brands">Brands at Jerman <img class="logo-top-img-2" src="../img/logo.jpg" alt="Jerman Otto"/>tto</h1>
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
            <div id="brands-listing" class="class-brands-listings">
            </div>
        </div>
        <br>
        <script src="../js/brands.js" type="text/javascript"></script>
        <?php include_once("footer.php"); ?>
	</body>
</html>