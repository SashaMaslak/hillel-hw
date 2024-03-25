const apiKey = "28271863-d0d50fdaf1b013fa8dcdf01ae"
const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=cat&per_page=5`

async function fetchImg() {
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data = await response.json()
    return data.hits
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error)
    return []
  }
}

export default async function getImages() {
  const images = await fetchImg()
  return images
}
