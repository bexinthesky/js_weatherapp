$(document).ready(function($) {

  $.ajax({
    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?zip=93704,us&appid=abbff5eb9459ab2687d318b3c2e71c9e"
  })
  .done(function(data) {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].description);
    console.log(data.wind.speed);
  })
  .fail(function () {

    console.log("error");

  });

});
