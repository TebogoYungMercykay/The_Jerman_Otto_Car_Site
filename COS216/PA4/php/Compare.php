<!-- Selepe Sello uXXXXXXXX -->
<!DOCTYPE html>
<html lang="en" data-theme="light">
	<head>
        <?php include_once("head.php"); ?>
    </head>
	<body class="background-compare">
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
                <h1 class="page-name-purpose" id="page-name-compare" >C<img class="logo-top-img-2" src="../img/logo.jpg" alt="Jerman Otto"/>mpare Cars Here</h1>
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
        <div class="car-compare-container" id="car-list-container">
            <table class="table" id="compare-table">
                <thead>
                    <tr>
                        <td>
                            <div class="table-header-one" id="table-header-1">
                                <div>
                                    CHOOSE A CAR
                                </div>
                                <div>
                                    <select name="car-one" title="select-car" class="form-control" id="top-select-car-1">
                                        <option class="select-options" value="0">Audi</option>
                                        <option class="select-options" value="1">Mini</option>
                                        <option class="select-options" value="2">Bugatti</option>
                                        <option class="select-options" value="3">BMW</option>
                                        <option class="select-options" value="4">Lamborghini</option>
                                    </select>
                                </div>
                                <div>
                                    <select name="car-two" title="select-car" class="form-control" id="top-select-car-2">
                                        <option class="select-options" value="0">Audi</option>
                                        <option class="select-options" value="1">Mini</option>
                                        <option class="select-options" value="2">Bugatti</option>
                                        <option class="select-options" value="3">BMW</option>
                                        <option class="select-options" value="4">Lamborghini</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="table-header-one" id="table-header-2">
                                <div>
                                    Car Image
                                </div>
                                <div id="car-image-1">
                                </div>
                                <div id="car-image-2">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="table-header-one" id="table-header-1">
                                <div>
                                    Max Speed
                                </div>
                                <div id="max-speed-1">
                                </div>
                                <div id="max-speed-2">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="table-header-one" id="table-header-3">
                                <div>
                                    Body Type
                                </div>
                                <div id="car-type-1">
                                </div>
                                <div id="car-type-2">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="table-header-one" id="table-header-4">
                                <div>
                                    Engine
                                </div>
                                <div id="car-engine-1">
                                </div>
                                <div id="car-engine-2">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="table-header-one" id="table-header-6">
                                <div>
                                    Transmission
                                </div>
                                <div id="car-tech-1">
                                </div>
                                <div id="car-tech-2">
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="table-header-one" id="table-header-7">
                                <div>
                                    Year From
                                </div>
                                <div id="year-from-1">
                                </div>
                                <div id="year-from-2">
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 id="sucess-compare">There You Goooo!!!</h3>
        </div>
        <br>
        <script src="../js/compare.js" type="text/javascript"></script>
        <?php include_once("footer.php"); ?>
	</body>
</html>