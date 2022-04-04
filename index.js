function formatDate(currentDate) {
    let hours = currentDate.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = currentDate.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    let dayIndex = currentDate.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  //function showTemperature(response) {
  //console.log(response);
  //}
  
  let dateElement = document.querySelector("#currentDate");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  function displayWeatherConditions(response) {
    console.log(response.displayWeatherConditions);
    document.querySelector("#city-name").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
  }
  function searchCity(event) {
    event.preventDefault();
    let apiKey = "064c17a499cbbf0ff9ce86a8b4f9932f";
    let city = document.querySelector("#search-text-input").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherConditions);
  }
  
  let form = document.querySelector("#search-form");
  form.addEventListener("submit", searchCity);
  
  function searchLocation(position) {
    let apiKey = "064c17a499cbbf0ff9ce86a8b4f9932f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeatherConditions);
  }
  
  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
  //function convertToFahrenheit(event) {
  // event.preventDefault();
  //let temperatureElement = document.querySelector("#temperature");
  // temperatureElement.innerHTML = 55;
  //}
  
  //function convertToCelsius(event) {
  //event.preventDefault();
  // let temperatureElement = document.querySelector("#temperature");
  // temperatureElement.innerHTML = 25;
  //}
  
  //let fahrenheitLink = document.querySelector("#fahrenheit-link");
  //fahrenheitLink.addEventListener("click", convertToFahrenheit);
  
  //let celsiusLink = document.querySelector("#celsius-link");
  //celsiusLink.addEventListener("click", convertToCelsius);
  