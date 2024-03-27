function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      var geocoder = new google.maps.Geocoder()
      geocoder.geocode({ location: latlng }, function (results, status) {
        if (status === "OK") {
          if (results[0]) {
            console.log(results[0].formatted_address) // Виведе адресу користувача
          } else {
            console.log("Результатів не знайдено")
          }
        } else {
          console.log("Помилка: " + status)
        }
      })
    })
  } else {
    console.log("Геолокація не підтримується цим браузером.")
  }
}
