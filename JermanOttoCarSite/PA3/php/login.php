<!-- Selepe Sello uXXXXXXXX -->
<!DOCTYPE html>
<html lang="en">
    <head>
        <?php include_once("head.php"); ?>
    </head>
    <body class="login-signup">
        <?php include_once("header.php"); ?>
        <section id="logo" class="mt-5">
            <div class="name-logo-top">
                <h1 class="page-name-purpose" id="page-name-brands">Login to your Jerman <img class="logo-top-img-2" src="../img/logo.jpg" alt="Jerman Otto"/>tto Account</h1>
                <hr>
            </div>
        </section>
        <div class="logoContainer" id="div-with-form">
            <div class="logo">
                <form class="main-form-login-signup" method="post" action="validate-login.php">
                    <label>Email:&nbsp;&nbsp;&nbsp;</label>
                    <input id="login-email" type="email" name="email" required autocomplete="off"><br><br>
                    <label>Password:</label>
                    <input id="login-password" type="password" name="password" required><br><br>
                    <!-- Buttons -->
                    <input id="login-submit" type="submit" name="submit" value="Login">&nbsp;&nbsp;
                    <input id="submit-find-car" type="reset" name="reset" value="Reset Form" class="btnFindCarResults">&nbsp;&nbsp;
                    <input id="signup-button" type="button" name="button" value="Go To Sign Up" onclick="location.href='signup.php';">
                </form>
            </div>
        </div>
        <?php include_once("footer.php"); ?>
    </body>
</html>