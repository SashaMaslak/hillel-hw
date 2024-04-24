function getCityInfo(city) {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`

  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=5d066958a60d315387d9492393935c19`

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      const weather = {
        city: document.querySelector("#city"),
        country: document.querySelector("#country"),
        weatherIcon: document.querySelector("#weather-icon"),
        weatherDescription: document.querySelector("#weather-description"),
        temperature: document.querySelector("#temperature"),
        windSpeed: document.querySelector("#wind-speed"),
        windDeg: document.querySelector("#wind-deg"),
        humidity: document.querySelector("#humidity"),
        pressure: document.querySelector("#pressure"),
      }

      weather.city.textContent = data.name
      weather.country.textContent = data.sys.country

      weather.weatherDescription.textContent = data.weather[0].description
      weather.temperature.textContent = data.main.temp
      weather.windSpeed.textContent = `${data.wind.speed} m/sec`
      weather.windDeg.textContent = `${data.wind.deg}°`
      weather.humidity.textContent = `${data.main.humidity}%`
      weather.pressure.textContent = `${data.main.pressure} mm`
      weather.weatherIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      )
    })
    .catch(error =>
      console.error(
        "An error occurred while retrieving city information:",
        error
      )
    )
}

function selectCity() {
  const selectedCity = document.querySelector(
    'input[name="city"]:checked'
  ).value
  getCityInfo(selectedCity)
}

const radioInputs = document.querySelectorAll('input[name="city"]')
radioInputs.forEach(input => {
  input.addEventListener("change", selectCity)
})

getCityInfo(document.querySelector('input[name="city"]:checked').value)
