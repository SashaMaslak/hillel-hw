fetch(
  "http://api.openweathermap.org/data/2.5/weather?q=kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19"
)
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

// const city = document.querySelector("#city")
// const country = document.querySelector("#country")
// const weatherIcon = document.querySelector("#weather-icon")
// const weatherDescription = document.querySelector("#weather-description")
// const temperature = document.querySelector("#temperature")
// const windSpeed = document.querySelector("#wind-speed")
// const windDir = document.querySelector("#wind-dir")
// const humidity = document.querySelector("#humidity")
// const pressure = document.querySelector("#pressure")
