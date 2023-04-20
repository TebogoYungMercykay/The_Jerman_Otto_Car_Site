// Selepe Sello u20748052
// I used Asynchronous so that the execution of one task doesn't dependent on another. Basically tasks can run simultaneously.
var jsonObject = null;
$(document).ready(function (){
    // Making Sure that the Div is Always Empty
    resetDiv("cars-listing");
    // * Code Below Is For Sorting Cars
    $('#sort-items-by').on('change', function(){
        var selectedVal = $(this).val();
        if(selectedVal != "0"){
            console.log("Compare Input Selected, And You Have Selected ", selectedVal);
            if (selectedVal == "1") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"body_type",
                    "order":"ASC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "2") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"body_type",
                    "order":"DESC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "3") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"engine_type",
                    "order":"ASC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "4") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"engine_type",
                    "order":"DESC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "5") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"max_speed_km_per_h",
                    "order":"ASC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "6") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"max_speed_km_per_h",
                    "order":"DESC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "7") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"transmission",
                    "order":"ASC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "8") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"transmission",
                    "order":"DESC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
        }
        else {
            show("cars-listing");
            jsonObject = {
                "studentnum":"u20748052",
                "apikey":"a9198b68355f78830054c31a39916b7f",
                "type":"GetAllCars",
                "limit":21,
                "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                "sort":"max_speed_km_per_h",
                "order":"DESC",
                "fuzzy":false,
            }
            resetDiv("cars-listing");
            CarListingAlgorithm(jsonObject);
        }
    }).change();
    // * Code Below Is For Filtering Cars
    $('#car-preferences').on('change', function(){
        var selectedVal = $(this).val();
        if(selectedVal != "0"){
            console.log("Select value changed: And You Have Selected ", selectedVal);
            if (selectedVal == "1") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "engine_type":"Gasoline",
                    },
                    "fuzzy": true,
                    "return":"*"
                }
                // console.log(jsonObject);
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "2") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "transmission": "Automatic",
                    },
                    "fuzzy": true,
                    "return":"*"
                }
                // console.log(jsonObject);
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "3") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "transmission": "Manual",
                    },
                    "fuzzy": true,
                    "return":"*"
                }
                // console.log(jsonObject);
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "4") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "number_of_seats":2,
                    },
                    "fuzzy": true,
                    "return":"*"
                }
                // console.log(jsonObject);
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "5") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "drive_wheels": "Rear wheel drive",
                    },
                    "fuzzy": true,
                    "return":"*"
                }
                // console.log(jsonObject);
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "6") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "drive_wheels": "All wheel drive",
                    },
                    "fuzzy": true,
                    "return":"*"
                }
                // console.log(jsonObject);
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "7") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "body_type":"Coupe",
                    },
                    "fuzzy": true,
                    "return":"*"
                }
                // console.log(jsonObject);
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if (selectedVal == "8") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "body_type":"Cabriolet",
                    },
                    "fuzzy": true,
                    "return":"*"
                }
                // console.log(jsonObject);
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
        }
        else {
            jsonObject = {
                "studentnum":"u20748052",
                "apikey":"a9198b68355f78830054c31a39916b7f",
                "type":"GetAllCars",
                "limit":21,
                "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                "sort":"max_speed_km_per_h",
                "order":"DESC",
                "fuzzy":false,
            }
            resetDiv("cars-listing");
            CarListingAlgorithm(jsonObject);
        }
    }).change();
    if(jsonObject != null){
        console.log("Cars Loaded Successfully");
    }
    else{
        console.log("Please Reload The Page!!");
        alert("Please Reload The Page, The Cars Haven't Loaded!");
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
    function createCars(data, jsonData) {
        var xhr = new XMLHttpRequest();
        var Model2 = jsonData.model.toLowerCase();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    // console.log(xhr.responseText);
                    var data2 = xhr.responseText;
                    var brandName = data.toUpperCase();
                    var Model = jsonData.model.toUpperCase();
                    var TopName = brandName + " " + Model;
                    var Transmission = jsonData.transmission;
                    var Engine = jsonData.engine_type;
                    var MaxSpeed = jsonData.max_speed_km_per_h;
                    var BodyType = jsonData.body_type;
                    element("cars-listing").innerHTML +=`<div class="class-cars-listing">
                        <h3 class="car-name">${TopName}</h3>
                        <img class="car-image" src="${data2}" alt="Car Picture" />
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
                    </div>`;
                }
                else {
                    console.log("An Error Occured: " + xhr.message);
                    element("cars-listing").innerHTML = "An Error Occurred, Please Try Loading The Page. Error Message: " + xhr.message;
                }
            }
        };
        xhr.open('GET', `https://wheatley.cs.up.ac.za/api/getimage?brand=${data}&model=${Model2}`, true);
        xhr.send();
    }
    function CarListingAlgorithm(JsonObject1){
        var jsonObject;
        if(JsonObject1 == undefined){
            jsonObject = {
                "studentnum":"u20748052",
                "apikey":"a9198b68355f78830054c31a39916b7f",
                "type":"GetAllCars",
                "limit":21,
                "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                "sort":"max_speed_km_per_h",
                "order":"DESC",
                "fuzzy": false
            }
            console.log("Please enter a valid request with at least one parameter");
            alert('Please enter a valid request with at least one parameter');
        }
        else{
            jsonObject = JsonObject1;
        }
        resetDiv("cars-listing");
        var json = JSON.stringify(jsonObject);
        $.ajax({
            url: `https://wheatley.cs.up.ac.za/api/`,
            method: "POST",
            data: json,
            success: function(response) {
                for(let k = 0; k < response.data.length; k++) {
                var tempVar = response.data[k].make.toLowerCase();
                    createCars(tempVar, response.data[k]);
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
            var jsonObject = "The User Enterer Invalid Input";
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
                        "studentnum":"u20748052",
                        "type":"GetAllCars",
                        "limit":21,
                        "apikey":"a9198b68355f78830054c31a39916b7f",
                        "search":{
                            "make":`${searchData}`,
                        },
                        "fuzzy": true,
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
                            "studentnum":"u20748052",
                            "type":"GetAllCars",
                            "limit":21,
                            "apikey":"a9198b68355f78830054c31a39916b7f",
                            "search":{
                                "engine_type":`${searchData}`,
                            },
                            "fuzzy": true,
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
                            "studentnum":"u20748052",
                            "type":"GetAllCars",
                            "limit":21,
                            "apikey":"a9198b68355f78830054c31a39916b7f",
                            "search":{
                                "transmission":`${searchData}`,
                            },
                            "fuzzy": true,
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
                            "studentnum":"u20748052",
                            "type":"GetAllCars",
                            "limit":21,
                            "apikey":"a9198b68355f78830054c31a39916b7f",
                            "search":{
                                "body_type":`${searchData}`,
                            },
                            "fuzzy": true,
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
                if(jsonObject !== "The User Enterer Invalid Input"){
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
                var jsonObject = {
                    "studentnum":"u20748052",
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "type":"GetAllCars",
                    "limit":21,
                    "return":["make","model","body_type","engine_type","transmission","max_speed_km_per_h"],
                    "sort":"max_speed_km_per_h",
                    "order":"DESC",
                    "fuzzy":false,
                }
                resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
        }
    });
});