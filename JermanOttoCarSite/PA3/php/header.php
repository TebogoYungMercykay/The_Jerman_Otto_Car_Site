<!-- Selepe Sello uXXXXXXXX -->
<?php include_once("config.php"); ?>
<header>
    <div class="topnav">
        <a href="../../../index.html"><i class="fa fa-home" aria-hidden="true"></i> Home</a>
        <div class="topnav-right">
            <?php
                if (isset($_SESSION['user'])) {
                    echo '<a href="index.php">Cars</a>';
                    echo '<a href="Brands.php">Car Brands</a>';
                    echo '<a href="FindCar.php">Find Me A Car</a>';
                    echo '<a href="Compare.php">Compare</a>';
                    echo '<a id="username_text" href="#">' . $_SESSION['user']['name'] . '</a>';
                    echo '<a href="logout.php" id="btnLogout">Log out</a>';
                }
                else{
                    echo '<a href="signup.php" id="btnSignup">Sign up</a>';
                    echo '<a href="login.php" id="btnLogin">Log in</a>';
                }
            ?>
        </div>
    </div>
</header>