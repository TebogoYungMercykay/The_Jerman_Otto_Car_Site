// Selepe Sello u20748052
$(document).ready(function (){
  function element(id) {
    return document.getElementById(id);
  }
  function hide(id) {
    element(id).style.display = "none";
  }
  function show(id) {
    element(id).style.display = "block";
  }
  function createCars(data) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            // console.log(xhr.responseText);
            var data2 = xhr.responseText;
            var brandName = data.toUpperCase();
              element("brands-listing").innerHTML += `<div class="class-brands-listing">
                <h3 class="brand-name">${brandName}</h3>
                <img class="brand-image" src=${data2} alt="Brand Picture" />
              </div>`;
          }
          else {
            console.log("An Error Occured: " + xhr.message);
          }
        }
      };
      xhr.open('GET', `https://wheatley.cs.up.ac.za/api/getimage?brand=${data}`, true);
      xhr.send();
  }
  jsonObject = {
    "studentnum":"u20748052",
    "type":"GetAllMakes",
    "apikey":"a9198b68355f78830054c31a39916b7f",
    "limit":24
  }
  var json = JSON.stringify(jsonObject);
  $.ajax({
    url: `https://wheatley.cs.up.ac.za/api/`,
    method: "POST",
    data: json,
    success: function(response) {
      console.log(response);
      for(let k = 0; k < response.data.length; k++) {
        var tempVar = response.data[k].toLowerCase();
        // console.log("Brand Name: "+ tempVar.toUpperCase());
        createCars(tempVar);
      }
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log(errorThrown);
    }
  });
});