function formatDate(timestamp) {
  //calculate the date from a timestamp
  let date = new Date(timestamp);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature-current");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let precipitationElement = document.querySelector("#precipitation");
  precipitationElement.innerHTML = response.data.precipitation;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "3490c484b22f8e3e1ecd37a8cafd1986";
let apiURLWeather = `https://api.openweathermap.org/data/2.5/weather?q=Berlin
&appid=${apiKey}&units=metric`;
let apiURLGeocode = `http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={5}&appid=${apiKey}`;

axios.get(apiURLWeather).then(displayTemperature);
