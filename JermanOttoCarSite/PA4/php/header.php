<!-- Selepe Sello uXXXXXXXX-->
<?php include_once("config.php"); ?>
<header>
    <?php
        if (isset($_SESSION['user'])) {
            $api_key = $_SESSION['user']['API_key'];
            echo '<script>localStorage.setItem("API_key", "' . $api_key. '");</script>';
        }
    ?>
    <div class="topnav">
        <?php
            if(isset($_SESSION['user'])){
                echo '<a href="#" id="theme-toggle" class="toggle-btn">Light Mode</a>';
                echo '<a href="settings.php"><i class="fa fa-gear"></i> Settings</a>';
                echo '<div class="topnav-right">';
                    echo '<a href="index.php">Cars</a>';
                    echo '<a href="Brands.php">Car Brands</a>';
                    echo '<a href="FindCar.php">Find Me A Car</a>';
                    echo '<a href="Compare.php">Compare</a>';
                    echo '<a id="username_text" href="#">' . $_SESSION['user']['name'] . '</a>';
                    echo '<a href="logout.php" id="btnLogout">Log out</a>';
                echo '</div>';
            }
            else{
                echo '<a href="../../../index.html"><i class="fa fa-home" aria-hidden="true"></i> Home</a>';
                echo '<a href="#" id="theme-toggle" class="toggle-btn">Light Mode</a>';
                echo '<div class="topnav-right">';
                    echo '<a href="login.php" id="btnLogin">Log in</a>';
                    echo '<a href="signup.php" id="btnSignup">Sign up</a>';
                echo '</div>';
            }
        ?>
    </div>
</header>