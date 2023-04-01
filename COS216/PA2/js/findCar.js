// I used Asynchronous so that the execution of one task doesn't dependent on another. Basically tasks can run simultaneously.
// Selepe Sello - uXXXXXXXX
var jsonObject = null;
$(document).ready(function (){
    resetDiv("cars-listing-in-find");
    hide("div-with-button");
    function resetDiv(id){
        // This clearing method gives me a problem and Yoh.
        if(element(id) !== null){
            element(id).innerHTML = '';
        }
    }
    function element(id){
        return document.getElementById(id);
    }
    function hide(id){
        if(id === "div-with-form" || id === 'div-with-form'){
            element(id).style.display = "none";
            element("div-with-cars").style.display = "block";
        }
        else if(id === "div-with-cars" || id === 'div-with-cars'){
            element(id).style.display ="none";
            element("div-with-form").style.display = "block";
        }
        else if(id === "div-with-button" || id === 'div-with-button'){
            element("div-with-cars").style.display ="none";
            element("div-with-form").style.display = "block";
        }
        else{
            // Do Nothing
            console.log('The id wasn\'t found: ' + id);
        }
    }
    function show(id){
        if(id === "div-with-form" || id === 'div-with-form'){
            element(id).style.display = "block";
            element("div-with-cars").style.display = "none";
        }
        else if(id === "div-with-cars" || id === 'div-with-cars'){
            element(id).style.display = "block";
            element("div-with-form").style.display = "none";
        }
        else if(id === "div-with-button" || id === 'div-with-button'){
            element("div-with-cars").style.display ="block";
            element("div-with-form").style.display = "none";
        }
        else{
            // Do Nothing
            console.log('The id wasn\'t found: ' + id);
        }
    }
    function createCars(data, jsonData){
        var xhr = new XMLHttpRequest();
        var Model2 = jsonData.model.toLowerCase();
        xhr.onreadystatechange = function(){
            if (xhr.readyState == XMLHttpRequest.DONE){
                if (xhr.status == 200){
                    // console.log(xhr.responseText);
                    var data2 = xhr.responseText;
                    var brandName = data.toUpperCase();
                    var Model = jsonData.model.toUpperCase();
                    var TopName = brandName + " " + Model;
                    var Transmission = jsonData.transmission;
                    var Engine = jsonData.engine_type;
                    var MaxSpeed = jsonData.max_speed_km_per_h;
                    var BodyType = jsonData.body_type;
                    var numSeats = jsonData.number_of_seats;
                    try{
                        element("cars-listing-in-find").innerHTML +=`<div class="class-cars-listing">
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
                            <div class="div-car-handling">
                                <p class="car-handling"><strong>Number of Seats</strong> : ${numSeats}</p>
                            </div>
                        </div>`;
                    }
                    catch(e){
                        console.log("Some Error Occurred: " + e.message);
                    }
                }
                else {
                    console.log("An Error Occured: " + xhr.message);
                    element("cars-listing-in-find").innerHTML = "An Error Occurred, Please Try Loading The Page. Error Message: " + xhr.message;
                }
            }
        };
        xhr.open('GET', `https://wheatley.cs.up.ac.za/api/getimage?brand=${data}&model=${Model2}`, true);
        xhr.send();
    }
    $('.main-form').submit(function(event){
        event.preventDefault();
        var formDataObject = {
            make: $('#find-brand').val(),
            engineType: $('#find-engine-type').val(),
            transmission: $('#find-transmission').val(),
            bodyType: $('#find-body-type').val(),
            model: $('#find-model').val(),
            numSeats: $('#find-num-of-seats').val()
        };
        var validateInput1 = ['AC', 'Acura', 'Alfa Romeo', 'Alpina', 'Alpine', 'Aro', 'Asia', 'Aston Martin', 'Audi', 'Beijing', 'Bentley', 'BMW', 'Borgward', 'Brilliance', 'Bristol', 'Bugatti', 'Buick', 'BYD', 'Cadillac', 'Callaway', 'Carbodies', 'Caterham', 'Changan', 'ChangFeng', 'Changhe', 'Chery', 'Chevrolet', 'Chrysler', 'Citroen', 'Cizeta', 'Coggiola', 'Dacia', 'Dadi', 'Daewoo', 'Daihatsu', 'Daimler', 'Dallas', 'Datsun', 'De Tomaso', 'Derways', 'Dodge', 'DongFeng', 'DS', 'Eagle', 'FAW', 'Ferrari', 'Fiat', 'Ford', 'Foton', 'FSO', 'Fuqi', 'GAZ', 'Geely', 'Genesis', 'Geo', 'GMC', 'Great Wall', 'Hafei', 'Haima', 'Haval', 'Hawtai', 'Hindustan', 'Holden', 'Honda', 'HuangHai', 'Hummer', 'Hyundai', 'Infiniti', 'Innocenti', 'Invicta', 'Iran Khodro', 'Isdera', 'Isuzu', 'IZH', 'JAC', 'Jaguar', 'Jeep', 'Jiangnan', 'JMC', 'Kia', 'Koenigsegg', 'Lamborghini', 'Lancia', 'Land Rover', 'Lexus', 'Lifan', 'Lincoln', 'Lotus', 'LTI', 'LuAZ', 'Mahindra', 'Marcos', 'Marlin', 'Marussia', 'Maruti', 'Maserati', 'Maybach', 'Mazda', 'Mega', 'Mercedes-Benz', 'Mercury', 'Metrocab', 'MG', 'Minelli', 'Mini', 'Mitsubishi', 'Morgan', 'Moskvich', 'Nissan', 'Noble', 'Oldsmobile', 'Opel', 'Pagani', 'Panoz', 'Perodua', 'Peugeot', 'Plymouth', 'Pontiac', 'Porsche', 'Premier', 'Proton', 'Puma', 'Qvale', 'Ravon', 'Reliant', 'Renault', 'Rolls-Royce', 'Ronart', 'Rover', 'Saab', 'Saleen', 'Samsung', 'Saturn', 'Scion', 'SEAT', 'ShuangHuan', 'Skoda', 'SMA', 'Smart', 'Soueast', 'Spectre', 'Spyker', 'SsangYong', 'Subaru', 'Suzuki', 'TagAZ', 'Talbot', 'Tata', 'Tatra', 'Tofas', 'Toyota', 'Trabant', 'TVR', 'UAZ', 'VAZ (Lada)', 'Vector', 'Venturi', 'Volkswagen', 'Volvo', 'Vortex', 'Wartburg', 'Wiesmann', 'Wuling', 'Xin Kai', 'Zastava', 'ZAZ', 'ZIL', 'Zotye', 'ZX'];
        var validateInput2 = ['Gasoline', 'Diesel', 'Hybrid', 'Gasoline, Electric'];
        var validateInput3 = ['Automatic', 'Manual'];
        var validateInput4 = ['Cabriolet', 'Coupe', 'Roadster', 'Crossover', 'Sedan', 'Hatchback', 'Liftback', 'Wagon', 'Minivan', 'Fastback', 'Pickup', 'hardtop', 'Targa', 'Limousine'];
        // Validating Inputs From the formDataObject
        var checkInput1 = false;
        var checkInput2 = false;
        var checkInput3 = false;
        var checkInput4 = false;
        for(var i = 0; i < validateInput1.length; i++){
            if(validateInput1[i].toLowerCase() == formDataObject.make.toLowerCase()){
                checkInput1= true;
                // console.log("User entered valid input for Make/Brand!!");
            }
        }
        for(var i = 0; i < validateInput2.length; i++){
            if(validateInput2[i].toLowerCase() == formDataObject.engineType.toLowerCase()){
                checkInput2= true;
                // console.log("User entered valid input for Engine Type!!");
            }
        }
        for(var i = 0; i < validateInput3.length; i++){
            if(validateInput3[i].toLowerCase() == formDataObject.transmission.toLowerCase()){
                checkInput3 = true;
                // console.log("User entered valid input for Transmission!!");
            }
        }
        for(var i = 0; i < validateInput4.length; i++){
            if(validateInput4[i].toLowerCase() == formDataObject.bodyType.toLowerCase()){
                checkInput4 = true;
                // console.log("User entered valid input for Body Type!!");
            }
        }
        // DONE
        if(checkInput1 === true && checkInput2 === true && checkInput3 === true && checkInput4 === true){
            // console.log(formDataObject);
            console.log("In Here Now");
            if(formDataObject.model != '' && formDataObject.model != "" && formDataObject.numSeats != ''  && formDataObject.numSeats != "" && formDataObject.numSeats != 0){
                console.log("In Here Now IF-1");
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "model":`${formDataObject.model}`,
                        "make":`${formDataObject.make}`,
                        "transmission":`${formDataObject.transmission}`,
                        "body_type":`${formDataObject.bodyType}`,
                        "engine_type":`${formDataObject.engineType}`,
                        "number_of_seats":`${formDataObject.numSeats}`
                    },
                    "return":"*"
                }
                // console.log(jsonObject);
                // resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if((formDataObject.model == '' || formDataObject.model == "") && formDataObject.numSeats != ''  && formDataObject.numSeats != "" && formDataObject.numSeats != 0){
                console.log("In Here Now IF-2");
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":`${formDataObject.make}`,
                        "transmission":`${formDataObject.transmission}`,
                        "body_type":`${formDataObject.bodyType}`,
                        "engine_type":`${formDataObject.engineType}`,
                        "number_of_seats":`${formDataObject.numSeats}`
                    },
                    "return":"*"
                }
                // console.log(jsonObject);
                // resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else if(formDataObject.model != '' && formDataObject.model != "" && (formDataObject.numSeats == ''  && formDataObject.numSeats == "" && formDataObject.numSeats == 0)){
                console.log("In Here Now IF-3");
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "model":`${formDataObject.model}`,
                        "make":`${formDataObject.make}`,
                        "transmission":`${formDataObject.transmission}`,
                        "body_type":`${formDataObject.bodyType}`,
                        "engine_type":`${formDataObject.engineType}`
                    },
                    "return":"*"
                }
                // console.log(jsonObject);
                // resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
            else{
                console.log("In Here Now Else");
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":21,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":`${formDataObject.make}`,
                        "transmission":`${formDataObject.transmission}`,
                        "body_type":`${formDataObject.bodyType}`,
                        "engine_type":`${formDataObject.engineType}`
                    },
                    "return":"*"
                }
                // console.log(jsonObject);
                // resetDiv("cars-listing");
                CarListingAlgorithm(jsonObject);
            }
        }
        else{
            // resetDiv("cars-listing");
            CarListingAlgorithm(undefined);
        }
    });
    function CarListingAlgorithm(JsonObject1){
        if(JsonObject1 != undefined){
            show("div-with-cars");
            resetDiv("cars-listing-in-find");
            var json = JSON.stringify(JsonObject1);
            console.log(json);
            $.ajax({
                url: `https://wheatley.cs.up.ac.za/api/`,
                method: "POST",
                data: json,
                success: function(response){
                    if(response.data.length == 0){
                        element("div-with-cars").innerHTML = `<div class="class-cars-listing"><h3 class="car-name">We Couldn't Find A Car You AS OF Yey, PLEASE Try Searching For A Different One</h3></div>`;
                        show("div-with-cars");
                    }
                    else{
                        for(let k = 0; k < response.data.length; k++){
                            console.log(response);
                            var tempVar = response.data[k].make.toLowerCase();
                            createCars(tempVar, response.data[k]);
                        }
                    }
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log("Error: " + errorThrown, " Status: " + textStatus);
                    jqXHR = null;
                    console.log("Something went wrong while processing the request: CarListingAlgorithm");
                }
            });
        }
        else{
            element("div-with-cars").innerHTML = `<div class="class-cars-listing"><h3 class="car-name">Please Enter Valid Input</h3></div>`;
            show("div-with-cars");
        }
    }
    $('.btnFindCarResults').click(function (event){
        // resetDiv("div-with-cars");
        hide("div-with-button");
    });
});
