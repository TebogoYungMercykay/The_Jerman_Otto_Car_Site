// Selepe Sello uXXXXXXXX
// I used Asynchronous so that the execution of one task doesn't dependent on another. Basically tasks can run simultaneously.
var jsonObject = null;
$(document).ready(function (){
    var apikey = localStorage.getItem('API_key');
    console.log("API_key: " + apikey);
    // Making Sure that the Div is Always Empty
    resetDiv("cars-listing");
    // * Code Below Is For Sorting Cars
    $('#sort-items-by').on('change', function(){
        var selectedVal = $(this).val();
        if(selectedVal != "0"){
            console.log("Compare Input Selected, And You Have Selected ", selectedVal);
            var splitString = selectedVal.split(",");
            var sort1 = splitString[0];
            var order1 = splitString[1];
            jsonObject = {
                "apikey":apikey,
                "type":"GetAllCars",
                "limit":21,
                "return":"*",
                "sort":`${sort1}`,
                "order":`${order1}`
            }
            resetDiv("cars-listing");
            CarListingAlgorithm(jsonObject);
        }
        else {
            jsonObject = null;
        }
    }).change();

    // * Code Below Is For Filtering Cars
    $('#car-preferences').on('change', function(){
        var selectedVal = $(this).val();
        if(selectedVal != "0"){
            console.log("Select value changed: And You Have Selected ", selectedVal);
            var [searchKey, searchValue] = selectedVal.split(',');
            var searchObject = {};
            searchObject[searchKey] = searchValue;
            jsonObject = {
                "type":"GetAllCars",
                "limit":21,
                "apikey":apikey,
                "search": searchObject,
                "return":"*"
            };
            resetDiv("cars-listing");
            CarListingAlgorithm(jsonObject);
        }
        else {
            jsonObject = null;
        }
    }).change();

    // add an onchange event listener to the parent element using jQuery
    $('#cars-listing').on('change', '.rate_car-input', function(event) {
        // extract the selected value and the id from the option value attribute
        if($(this).val() != "0" && $(this).val() != '0'){
            const [selectedValue, id] = $(this).val().split(',');
            jsonObject = {
                "API_key":apikey,
                "id_trim":id,
                "rating":selectedValue
            };
            // console.log(jsonObject);
            localStorage.setItem(`${id}`, selectedValue);
            id_para = `para_rating_${id}`;
            var para = document.getElementById(`para_rating_${id}`);
            para.innerHTML = `<strong>Rating : </strong>${selectedValue}`;
            var json = JSON.stringify(jsonObject);
            console.log(json);
            $.ajax({
                url: "http://localhost/COS216_Assignment_1_2023_Semester_1/api.php",
                method: "POST",
                data: json,
                success: function(data) {
                    if(data === false){
                        console.log("Some Error Occurred");
                    }
                    else{
                        console.log("Rating Updated Successfully: " + data);
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(`Error: ${textStatus} - ${errorThrown}`);
                }
            });
        }
    });

    if(jsonObject != null){
        console.log("Cars Loaded Successfully!!");
    }
    else{
        get_Default_CarListing();
    }
    function get_Default_CarListing(){
        var defaultMake = localStorage.getItem('make');
        var defaultEngine = localStorage.getItem('engine_type');
        var defaultTransmission = localStorage.getItem('transmission');
        var defaultBody = localStorage.getItem('body_type');
        var searchObject = {};
        if(defaultMake != "N/A" || defaultEngine != "N/A" || defaultTransmission != "N/A" || defaultBody != "N/A"){
            if(defaultMake != "N/A"){
                searchObject["make"] = defaultMake;
            }
            if(defaultEngine != "N/A"){
                searchObject["engine_type"] = defaultEngine;
            }
            if(defaultTransmission != "N/A"){
                searchObject["transmission"] = defaultTransmission;
            }
            if(defaultBody != "N/A"){
                searchObject["body_type"] = defaultBody;
            }
            jsonObject = {
                "apikey": apikey,
                "search": searchObject,
                "type":"GetAllCars",
                "fuzzy": false,
                "limit":24,
                "return":"*"
            }
            console.log(jsonObject);
            console.log("DEFAULT: Initial Load Successful!!");
            resetDiv("cars-listing");
            CarListingAlgorithm(jsonObject);
        }
        else{
            jsonObject = {
                "apikey":apikey,
                "type":"GetAllCars",
                "limit":21,
                "return":"*"
            };
            console.log("Initial Load Successful!!");
            resetDiv("cars-listing");
            CarListingAlgorithm(jsonObject);
        }
    }
    function resetDiv(id) {
        element(id).innerHTML = '';
    }
    function element(id) {
        return document.getElementById(id);
    }
    function show(id) {
        element(id).style.display = "grid";
    }
    function CarListingAlgorithm(JsonObject1){
        var jsonObject;
        if(JsonObject1 == undefined){
            jsonObject = {
                "apikey":apikey,
                "type":"GetAllCars",
                "limit":21,
                "return":"*"
            }
            console.log("Please enter a valid request with at least one parameter");
            alert('Please enter a valid request with at least one parameter');
        }
        else{
            jsonObject = JsonObject1;
        }
        var json = JSON.stringify(jsonObject);
        // console.log(json);
        $.ajax({
            url: "http://localhost/COS216_Assignment_1_2023_Semester_1/api.php",
            method: "POST",
            data: json,
            success: function(response) {
                resetDiv("cars-listing");
                console.log(response);
                var dataArray = response.data;
                for(let k = 0; k < dataArray.length; k++) {
                    var brandName = dataArray[k].make.toUpperCase();
                    var Model = dataArray[k].model.toUpperCase();
                    var TopName = brandName + " " + Model;
                    var Transmission = dataArray[k].transmission;
                    var Engine = dataArray[k].engine_type;
                    var MaxSpeed = dataArray[k].max_speed_km_per_h;
                    var BodyType = dataArray[k].body_type;
                    var carImage = dataArray[k].image;
                    var id_trim = dataArray[k].id_trim;
                    var car_rating = "No Rating";
                    // Checking if the Rating exists in Local Storage using the id_trim.
                    if (localStorage.getItem(`${id_trim}`) !== null){
                        car_rating = localStorage.getItem(`${id_trim}`);
                    }
                    // DOM Manipulation
                    element("cars-listing").innerHTML +=`<div class="class-cars-listing">
                        <h3 class="car-name">${TopName}</h3>
                        <img class="car-image" src="${carImage}" alt="Car Picture" />
                        <br>
                        <div class="div-car-body-type">
                            <p class="car-body-type"><strong>Body Type</strong> : ${BodyType}</p>
                        </div>
                        <div class="div-car-engine">
                            <p class="car-engine"><strong>Engine</strong> : ${Engine}</p>
                        </div>
                        <div class="div-car-technology">
                            <p class="car-technology"><strong>Max Speed</strong> : ${MaxSpeed}</p>
                        </div>
                        <div class="div-car-handling">
                            <p class="car-handling"><strong>Transmission</strong> : ${Transmission}</p>
                        </div>
                        <hr>
                        <div class="div-car-rating" id="display_rating">
                            <p class="car-handling" id="para_rating_${id_trim}"><strong>Rating : </strong>${car_rating}</p>
                        </div>
                        <div class="div-rate-car" id="rate_car">
                            <select name="rate_car" title="rate_car" class="rate_car-input" id="${id_trim}">
                                <option class="select-options" value="0">-- Rate Car --</option>
                                <option class="select-options" value="1,${id_trim}">1 Star</option>
                                <option class="select-options" value="2,${id_trim}">2 Stars</option>
                                <option class="select-options" value="3,${id_trim}">3 Stars</option>
                                <option class="select-options" value="4,${id_trim}">4 Stars</option>
                                <option class="select-options" value="5,${id_trim}">5 Stars</option>
                            </select><br>
                        </div>
                    </div>`;
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
    $('.search-bar-top').click(function (event) {
        event.preventDefault();
        var searchData = $('.search-bar-top').val(); // Make Val();
        if(searchData != "" && searchData != '' && searchData != undefined){
            var jsonObject = "The User Entered Invalid Input";
            var checkInput1 = false;
            var checkInput2 = false;
            var checkInput3 = false;
            var checkInput4 = false;
            var validateInput1 = ['AC', 'Acura', 'Alfa Romeo', 'Alpina', 'Alpine', 'Aro', 'Asia', 'Aston Martin', 'Audi', 'Beijing', 'Bentley', 'BMW', 'Borgward', 'Brilliance', 'Bristol', 'Bugatti', 'Buick', 'BYD', 'Cadillac', 'Callaway', 'Carbodies', 'Caterham', 'Changan', 'ChangFeng', 'Changhe', 'Chery', 'Chevrolet', 'Chrysler', 'Citroen', 'Cizeta', 'Coggiola', 'Dacia', 'Dadi', 'Daewoo', 'Daihatsu', 'Daimler', 'Dallas', 'Datsun', 'De Tomaso', 'Derways', 'Dodge', 'DongFeng', 'DS', 'Eagle', 'FAW', 'Ferrari', 'Fiat', 'Ford', 'Foton', 'FSO', 'Fuqi', 'GAZ', 'Geely', 'Genesis', 'Geo', 'GMC', 'Great Wall', 'Hafei', 'Haima', 'Haval', 'Hawtai', 'Hindustan', 'Holden', 'Honda', 'HuangHai', 'Hummer', 'Hyundai', 'Infiniti', 'Innocenti', 'Invicta', 'Iran Khodro', 'Isdera', 'Isuzu', 'IZH', 'JAC', 'Jaguar', 'Jeep', 'Jiangnan', 'JMC', 'Kia', 'Koenigsegg', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lifan', 'Lincoln', 'Lotus', 'LTI', 'LuAZ', 'Mahindra', 'Marcos', 'Marlin', 'Marussia', 'Maruti', 'Maserati', 'Maybach', 'Mazda', 'Mega', 'Mercedes-Benz', 'Mercury', 'Metrocab', 'MG', 'Minelli', 'Mini', 'Mitsubishi', 'Morgan', 'Moskvich', 'Nissan', 'Noble', 'Oldsmobile', 'Opel', 'Pagani', 'Panoz', 'Perodua', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Premier', 'Proton', 'Puma', 'Qvale', 'Ravon', 'Reliant', 'Renault', 'Rolls-Royce', 'Ronart', 'Rover', 'Saab', 'Saleen', 'Samsung', 'Saturn', 'Scion', 'SEAT', 'ShuangHuan', 'Skoda', 'SMA', 'Smart', 'Soueast', 'Spectre', 'Spyker', 'SsangYong', 'Subaru', 'Suzuki', 'TagAZ', 'Talbot', 'Tata', 'Tatra', 'Tofas', 'Toyota', 'Trabant', 'TVR', 'UAZ', 'VAZ (Lada)', 'Vector', 'Venturi', 'Volkswagen', 'Volvo', 'Vortex', 'Wartburg', 'Wiesmann', 'Wuling', 'Xin Kai', 'Zastava', 'ZAZ', 'ZIL', 'Zotye', 'ZX'];
            for(var i = 0; i < validateInput1.length; i++){
                if(validateInput1[i].toLowerCase() == searchData.toLowerCase()){
                    checkInput1 = true;
                    console.log("User is Searching for a Brand/Make");
                    jsonObject = {
                        "apikey":apikey,
                        "type":"GetAllCars",
                        "limit":21,
                        "search":{
                            "make":`${searchData}`,
                        },
                        "fuzzy": false,
                        "sort":"max_speed_km_per_h",
                        "order":"DESC",
                        "return":"*"
                    }
                    break;
                }
            }
            if(checkInput1 != true){
                var validateInput2 = ['Gasoline', 'Diesel', 'Hybrid', 'Gasoline, Electric'];
                for(var i = 0; i < validateInput2.length; i++){
                    if(validateInput2[i].toLowerCase() == searchData.toLowerCase()){
                        searchData = searchData.charAt(0).toUpperCase() + searchData.substr(1, searchData.length);
                        checkInput2= true;
                        console.log("User is Searching for Engine Type");
                        jsonObject = {
                            "apikey":apikey,
                            "type":"GetAllCars",
                            "limit":21,
                            "search":{
                                "engine_type":`${searchData}`,
                            },
                            "fuzzy": false,
                            "sort":"max_speed_km_per_h",
                            "order":"DESC",
                            "return":"*"
                        }
                        break;
                    }
                }
            }
            if(checkInput1 != true && checkInput2 != true){
                var validateInput3 = ['Automatic', 'Manual'];
                for(var i = 0; i < validateInput3.length; i++){
                    if(validateInput3[i].toLowerCase() == searchData.toLowerCase()){
                        searchData = searchData.charAt(0).toUpperCase() + searchData.substr(1, searchData.length);
                        checkInput3 = true;
                        console.log("User is Searching for Transmission!!");
                        jsonObject = {
                            "apikey":apikey,
                            "type":"GetAllCars",
                            "limit":21,
                            "search":{
                                "transmission":`${searchData}`,
                            },
                            "fuzzy": false,
                            "sort":"max_speed_km_per_h",
                            "order":"DESC",
                            "return":"*"
                        }
                        break;
                    }
                }
            }
            if(checkInput1 != true && checkInput2 != true && checkInput3 != true){
                var validateInput4 = ['Cabriolet', 'Coupe', 'Roadster', 'Crossover', 'Sedan', 'Hatchback', 'Liftback', 'Wagon', 'Minivan', 'Fastback', 'Pickup', 'hardtop', 'Targa', 'Limousine'];
                for(var i = 0; i < validateInput4.length; i++){
                    if(validateInput4[i].toLowerCase() == searchData.toLowerCase()){
                        searchData = searchData.charAt(0).toUpperCase() + searchData.substr(1, searchData.length);
                        checkInput4 = true;
                        console.log("User is Searching for Body Type!!");
                        jsonObject = {
                            "apikey":apikey,
                            "type":"GetAllCars",
                            "limit":21,
                            "search":{
                                "body_type":`${searchData}`,
                            },
                            "fuzzy": false,
                            "sort":"max_speed_km_per_h",
                            "order":"DESC",
                            "return":"*"
                        }
                        break;
                    }
                }
            }
            // DONE SETTING UP THE REQUEST
            if(checkInput1 === true || checkInput2 === true || checkInput3 === true || checkInput4 === true){
                if(jsonObject !== "The User Entered Invalid Input"){
                    console.log(searchData);
                    try{
                        console.log(jsonObject);
                        resetDiv("cars-listing");
                        CarListingAlgorithm(jsonObject);
                    }
                    catch(err){
                        alert("Please Enter Valid Input Data, Eg. Audi/BMW/Aston Martin/Alfa Romeo");
                        console.log("An Error Occurred: " + err);
                    }
                }
            }
            else{
                alert("Please Enter Valid Input Data, Eg. Audi/BMW/Manual/Alfa Romeo/Coupe/Gasoline");
                alert("Click 'OK' to continue");
                console.log("Please Enter Valid Input Data, Eg. Audi/BMW/Manual/Alfa Romeo/Coupe/Gasoline");
                get_Default_CarListing();
            }
        }
    });
});