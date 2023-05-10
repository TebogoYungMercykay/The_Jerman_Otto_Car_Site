<!DOCTYPE html>
<html lang="en">
    <!-- Selepe Sello uXXXXXXXX -->
    <head>
        <?php include_once("head.php"); ?>
        <?php echo '<script src="../js/validate-sign-up.js" type="text/javascript"></script>'; ?>
    </head>
    <body class="login-signup">
        <?php include_once("header.php"); ?>
        <section id="logo" class="mt-5">
            <div class="name-logo-top">
                <h1 class="page-name-purpose" id="page-name-brands">Register an Account with Jerman <img class="logo-top-img-2" src="../img/logo.jpg" alt="Jerman Otto"/>tto</h1>
                <hr>
            </div>
        </section>
        <div class="logoContainer" id="div-with-form">
            <div class="logo">
                <form class="main-form-login-signup" id="main-form-login-signup" method="post" onsubmit="return validateSignupForm()" action="validate-signup.php" autocomplete="off">
                    <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input id="signup-name" type="text" name="name" required><br><br>
                    <label>Surname:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input id="signup-username" type="text" name="surname" required><br><br>
                    <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input id="signup-email" type="email" name="email" required><br><br>
                    <label>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input id="signup-password" type="password" name="password" required><br><br>
                    <label>Confirm Password:</label>
                    <input id="signup-password2" type="password" name="password2" required><br><br>

                    <input id="signup-submit" type="submit" name="submit" value="Sign Up">&nbsp;&nbsp;
                    <input id="submit-find-car" type="reset" name="reset" value="Reset Form" class="btnFindCarResults">&nbsp;&nbsp;
                    <input id="login-button" type="button" name="button" value="Go To Login" onclick="location.href='login.php';">
                </form>
            </div>
        </div>
        <?php
            include_once("footer.php");
        ?>
    </body>
</html>