const apikey = "33dd090453de9b0bc7b6b61b79555ebf";
const city = "rudrapur";
let data;
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
async function checkWeather(city) {
  try {
    const response = await fetch(apiurl + `&q=${city}` + `&appid=${apikey}`);
    data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/ h";
    let icon = document.querySelector(".weather-icon");
    if (data.weather[0].main == "Cloud") {
      console.log("Cloud");
      icon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Snow") {
      console.log("Snow");
      icon.src = "images/snow.png";
    } else if (data.weather[0].main == "Haze") {
      console.log("Snow");
      icon.src = "images/haze.png";
    } else if (data.weather[0].main == "Clear") {
      icon.src = "images/clear.png";
      console.log("Clear");
    } else if (data.weather[0].main == "Drizzle") {
      console.log("Drizzle");
      icon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "images/mist.png";
      console.log("Mist");
    } else if (data.weather[0].main == "Rain") {
      icon.src = "images/rain.png";
      console.log("Rain");
    }
     document.querySelector(".error-display").style.display = "none"
    document.querySelector(".weather").style.display = "block";
  } catch (error) {
    console.log(error);
    document.querySelector(".error-display").style.display = "block"
  }
}
let btn = document.querySelector(".search-btn");
let inputcity = document.querySelector(".inputcity");
inputcity.addEventListener("click", () => {
  document.querySelector(".weather").style.display = "none";
});
btn.addEventListener("click", () => {
  let city = inputcity.value;
  checkWeather(city);
});
