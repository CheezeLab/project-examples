const API_KEY = "8af3d2e5d9028e78d7dca7ff399df972";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  //const lat = "35.4829";
  //const lon = "129.4264";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
	  const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");      
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C / feels like ${data.main.feels_like}°C`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Geolocation error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// navigator.geolocation.getCurrentPosition(function (position) {
//   var lat = position.coords.latitude;
//   var lon = position.coords.longitude;
//   var url =
//     "http://api.openweathermap.org/data/2.5/weather?lat=" +
//     lat +
//     "&lon=" +
//     lon +
//     "&appid=8af3d2e5d9028e78d7dca7ff399df972";
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = function () {
//     if (request.status == 200) {
//       var weather = JSON.parse(request.responseText);
//       var temp = weather.main.temp;
//       var tempC = (temp - 273.15).toFixed(1);
//       var tempF = ((temp * 9) / 5 - 459.67).toFixed(1);
//       var tempUnit = "C";
//       var icon = weather.weather[0].icon;
//       var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";
//       var city = weather.name;
//       var country = weather.sys.country;
//       var description = weather.weather[0].description;
//       var wind = weather.wind.speed;
//       var humidity = weather.main.humidity;
//       var pressure = weather.main.pressure;
//       var sunrise = weather.sys.sunrise;
//       var sunset = weather.sys.sunset;
//       var sunriseTime = new Date(sunrise * 1000);
//       var sunsetTime = new Date(sunset * 1000);
//       var sunriseHour = sunriseTime.getHours();
//       var sunriseMinute = sunriseTime.getMinutes();
//       var sunsetHour = sunsetTime.getHours();
//       var sunsetMinute = sunsetTime.getMinutes();
//       var sunriseTimeString = sunriseHour + ":" + sunriseMinute;
//       var sunsetTimeString = sunsetHour + ":" + sunsetMinute;
//       var tempString = tempC + "&deg;C";
//       var windString = wind + " m/s";
//       var humidityString = humidity + "%";
//       var pressureString = pressure + " hPa";
//       var weatherString = description;
//       var weatherIcon = "<img src='" + iconUrl + "'>";
//     }
//   };
// });
