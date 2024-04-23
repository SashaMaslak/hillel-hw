async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data")
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json() // Парсимо JSON-відповідь
    console.log("Отримані дані:", data)
    // Обробляємо дані в поточному синхронному коді
  } catch (error) {
    console.error("Виникла помилка під час виконання запиту:", error)
  }
}

// Викликаємо функцію для виконання запиту та обробки отриманих даних
fetchData()
