import {setTemp, cityInput} from "./script.js"
import setImage from "./imageDescription.js"

export default async function getData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=12793f8ac81bc147899e9e407bbe4fb6&units=metric`)
    const l = await response.json()
    setTemp(l)
    setImage(l.weather[0].icon)
    console.log(l);
  } catch (err) {
  }
}