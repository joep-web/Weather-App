const cityInput = document.querySelector("input[type='text']")
const btn = document.querySelector("button")
const description = document.querySelector(".desc-text")
const temp = document.querySelector(".temp")
const cityName = document.querySelector(".city span")

function setTexts(elem, data) {
  elem.innerText = typeof data === "number" && data % 1 >= .5
    ?Math.ceil(data)
    :typeof data === "string"
    ?data:Math.floor(data)
}

function setTemp(data) {
  setTexts(description, data.weather[0].description)
  setTexts(temp, data.main.temp)
  setTexts(cityName, data.name)
}

async function getData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=12793f8ac81bc147899e9e407bbe4fb6&units=metric`)
    const l = await response.json()
    setTemp(l)
    console.log(l);
  } catch (err) {
  }
}

btn.addEventListener("click",getData)