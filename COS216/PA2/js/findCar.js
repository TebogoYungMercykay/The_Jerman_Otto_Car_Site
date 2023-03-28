var jsonObject = null;
$(document).ready(function (){
    // show("form_div");
    // if(jsonObject != null){
    //     console.log("Cars Loaded Successfully");
    //     // show("display-cars-listing");
    //     // hide("form_div");
    // }
    // else{
    //     // hide("display-cars-listing");
    //     // show("form_div");
    //     console.log("Please Reload The Page!!");
    //     alert("Please Reload The Page, The Cars Haven't Loaded!");
    // }
    function resetDiv(id) {
        element(id).innerHTML = '';
    }
    function element(id) {
        return document.getElementById(id);
    }
    function hide(id) {
        element(id).style.display = "none";
    }
    function show(id) {
        element(id).style.display = "grid";
    }
    $(document).ready(function() {
      $('.main-form').submit(function(event) {
        event.preventDefault();
        var formDataObject = {
          make: $('#find-car-name').val(),
          engineType: $('#find-car-type-of-fuel').val(),
          transmission: $('#find-car-price').val(),
          bodyType: $('#find-car-body-type').val(),
          model: $('#find-car-handling').val()
        };
        console.log(formDataObject);
        jsonObject = {
          "studentnum":"u20748052",
          "type":"GetAllCars",
          "limit":20,
          "apikey":"a9198b68355f78830054c31a39916b7f",
          "search":{
              "model":`${formDataObject.model}`,
              "make":`${formDataObject.make}`,
              "transmission":`${formDataObject.transmission}`,
              "body_type":`${formDataObject.bodyType}`,
              "engine_type":`${formDataObject.engineType}`
          },
          "fuzzy": true,
          "sort":"make",
          "order": "ASC",
          "return":"*"
        }
        resetDiv("display-cars-listing");
        // hide("form_div");
        // show("display-cars-listing");
        CarListingAlgorithm(jsonObject);
      });
    });
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
                    element("display-cars-listing").innerHTML +=`<div class="class-cars-listing">
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
                    element("display-cars-listing").innerHTML = "An Error Occurred, Please Try Loading The Page. Error Message: " + xhr.message;
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
        var json = JSON.stringify(jsonObject);
        $.ajax({
            url: `https://wheatley.cs.up.ac.za/api/`,
            method: "POST",
            data: json,
            success: function(response) {
                // console.log(response);
                for(let k = 0; k < response.data.length; k++) {
                    var tempVar = response.data[k].make.toLowerCase();
                      console.log("Brand Name: "+ tempVar.toUpperCase());
                    createCars(tempVar, response.data[k]);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
                show("form_div");
            }
        });
    }
});