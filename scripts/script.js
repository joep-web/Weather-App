import getData from "./getData.js"

export const cityInput = document.querySelector("input[type='text']")
const btn = document.querySelector("button")
const description = document.querySelector(".desc-text")
const temp = document.querySelector(".temp")
const cityName = document.querySelector(".city span")
const feelsLike = document.querySelector(".f-like")
const tempCont = document.querySelector(".temperature");

let Celcius = true

function convertTemp(data) {
  const unit = Celcius
    ?data
    :(data * 9) / 5 + 32
  const rounded = Math.round(unit)
  return `${rounded}${Celcius?"°C":"°F"}`
}

function setTexts(elem, data) { 
  elem.innerText = typeof data === "number"
    ?convertTemp(data)
    :data
}

export function setTemp(data) {
  setTexts(description, data.weather[0].description)
  setTexts(cityName, data.name)
  setTexts(feelsLike, data.main.feels_like)
  setTexts(temp, data.main.temp)
}

function changeUnit() {
  Celcius = !Celcius
  getData()
}

btn.addEventListener("click",getData)
tempCont.addEventListener("click", changeUnit)