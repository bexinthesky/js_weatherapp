


// call API info
$(document).ready(function($) {
  document.getElementById('submit-button').addEventListener('click', function(e) {
  	e.preventDefault();
      var zipCode = document.getElementById('zip-code').value;
      console.log(zipCode);

      // console.log(zipCode);
  $.ajax({

    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=abbff5eb9459ab2687d318b3c2e71c9e&units=metric"
  })
  .done(function(data) {
    $("#div-id").empty();

    $('#div-id').append("<p>" + "City: " + data.name + "</p>" + "<br>" + "<p>" + "Temperature: " + data.main.temp + "</p>" + "<br>" + "<p>" + "Sky: " + data.weather[0].description + "</p>" + "<br>" + "<p>" + "Minimum Temperature: " + data.main.temp_min + "</p>" + "<br>" + "<p>" + "Maximum Temperature: " + data.main.temp_max + "</p>" + "<br>" + "<p>" + "Humidity: " + data.main.humidity + "</p>" + "<br>" + "<p>" + "Wind Speed: " + data.wind.speed + "</p>" + "<br>" + "<p>" + "Sunrise: " + data.sys.sunrise + "</p>" + "<br>" + "<p>" + "Sunset: " + data.sys.sunset + "</p>");

  })
  .fail(function () {

    console.log("error");

  });
});
});

//.submit with var thar connects to api
// create elements that are needed
