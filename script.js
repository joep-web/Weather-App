const city = document.querySelector("input[type='text']");
const btn = document.querySelector("input[type='button'");

function setP(data) {
  document.querySelector("p").innerText = data 
}

async function getData() {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=12793f8ac81bc147899e9e407bbe4fb6&units=metric`)
    const l = await response.json()
    console.log(l);
    const westher = l.weather[0].description
    setP(westher)
  } catch (err) {
  }
}

btn.addEventListener("click",getData)