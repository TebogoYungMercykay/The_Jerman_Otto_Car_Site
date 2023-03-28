var jsonObject = null;
$(document).ready(function (){
    $('#top-select-car-1').on('change', function(){
        var selectedVal = $(this).val();
        if(selectedVal != "0"){
            console.log("Compare Input Selected, And You Have Selected ", selectedVal);
            if (selectedVal == "1") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":1,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":"Mini"
                    },
                    "return":"*"
                }
                CompareDomManip(jsonObject, "Select 1");
            }
            else if (selectedVal == "2") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":1,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":"Bugatti"
                    },
                    "return":"*"
                }
                CompareDomManip(jsonObject, "Select 1");
            }
            else if (selectedVal == "3") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":1,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":"BMW"
                    },
                    "return":"*"
                }
                CompareDomManip(jsonObject, "Select 1");
            }
            else if (selectedVal == "4") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":1,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":"Lamborghini"
                    },
                    "return":"*"
                }
                CompareDomManip(jsonObject, "Select 1");
            }
        }
        else{
            jsonObject = {
                "studentnum":"u20748052",
                "type":"GetAllCars",
                "limit":1,
                "apikey":"a9198b68355f78830054c31a39916b7f",
                "search":{
                    "make":"Audi",
                    "model":"R8"
                },
                "return":"*"
            }
            CompareDomManip(jsonObject, "Select 1");
        }
    }).change();
    $('#top-select-car-2').on('change', function(){
        var selectedVal = $(this).val();
        if(selectedVal != "0"){
            console.log("Compare Input Selected, And You Have Selected ", selectedVal);
            if (selectedVal == "1") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":1,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":"Mini"
                    },
                    "return":"*"
                }
                CompareDomManip(jsonObject, "Select 2");
            }
            else if (selectedVal == "2") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":1,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":"Bugatti"
                    },
                    "return":"*"
                }
                CompareDomManip(jsonObject, "Select 2");
            }
            else if (selectedVal == "3") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":1,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":"BMW"
                    },
                    "return":"*"
                }
                CompareDomManip(jsonObject, "Select 2");
            }
            else if (selectedVal == "4") {
                jsonObject = {
                    "studentnum":"u20748052",
                    "type":"GetAllCars",
                    "limit":1,
                    "apikey":"a9198b68355f78830054c31a39916b7f",
                    "search":{
                        "make":"Lamborghini"
                    },
                    "return":"*"
                }
                CompareDomManip(jsonObject, "Select 2");
            }
        }
        else{
            jsonObject = {
                "studentnum":"u20748052",
                "type":"GetAllCars",
                "limit":1,
                "apikey":"a9198b68355f78830054c31a39916b7f",
                "search":{
                    "make":"Audi",
                    "model":"R8"
                },
                "return":"*"
            }
            CompareDomManip(jsonObject, "Select 2");
        }
    }).change();
    if(jsonObject != null){
        console.log("Cars Loaded Successfully");
    }
    else{
        console.log("Please Reload The Page!!");
        alert("Please Reload The Page, The Cars Haven't Loaded!");
    }
    function element(id) {
        return document.getElementById(id);
    }
    function show(id) {
        element(id).style.display = "grid";
    }
    function ComparePopulate(data, jsonData, selectNumber) {
        var xhr = new XMLHttpRequest();
        var Model2 = jsonData.model.toLowerCase();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    var ImageURL = xhr.responseText;
                    var Transmission = jsonData.transmission;
                    var Engine = jsonData.engine_type;
                    var MaxSpeed = jsonData.max_speed_km_per_h;
                    var BodyType = jsonData.body_type;
                    var Year_From = jsonData.year_from;
                    element(`car-image-${selectNumber}`).innerHTML = `<img src="${ImageURL}" alt="Compare Car Image" class="compare-images"></img>`
                    element(`max-speed-${selectNumber}`).innerHTML = MaxSpeed;
                    element(`car-type-${selectNumber}`).innerHTML = BodyType;
                    element(`car-engine-${selectNumber}`).innerHTML = Engine;
                    element(`car-tech-${selectNumber}`).innerHTML = Transmission;
                    element(`year-from-${selectNumber}`).innerHTML = Year_From;
                }
                else {
                    console.log("An Error Occured: " + xhr.message);
                    alert("An Error Occurred, Please Try Loading The Page. Error Message: " + xhr.message);
                }
            }
        };
        xhr.open('GET', `https://wheatley.cs.up.ac.za/api/getimage?brand=${data}&model=${Model2}`, true);
        xhr.send();
    }
    function CompareDomManip(JsonObject1, selectNumber){
        var jsonObject;
        if(JsonObject1 == undefined){
            jsonObject = {
                "studentnum":"u20748052",
                "type":"GetAllCars",
                "limit":1,
                "apikey":"a9198b68355f78830054c31a39916b7f",
                "search":{
                    "make":"Audi",
                    "model":"R8"
                },
                "fuzzy":true,
                "return":"*"
            }
            console.log("Please enter a valid request with at least one parameter");
            alert('Please enter a valid request with at least one parameter value');
        }
        else{
            jsonObject = JsonObject1;
        }
        var json = JSON.stringify(jsonObject);
        $.ajax({
            url: `https://wheatley.cs.up.ac.za/api/`,
            method: "POST",
            data: json,
            success: function(response) {
                for(let k = 0; k < response.data.length; k++) {
                var tempVar = response.data[k].make.toLowerCase();
                    if(selectNumber === "Select 1"){
                        ComparePopulate(tempVar, response.data[k], 1);
                    }
                    else{
                        ComparePopulate(tempVar, response.data[k], 2);
                    }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    }
});