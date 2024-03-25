import getImages from "./pixabayApi.js"
const images = await getImages()
const imagesArr = images.map(el => el.largeImageURL)
console.log(`imagesArr:`, imagesArr)
