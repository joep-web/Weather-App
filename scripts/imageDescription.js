
export default function setImage(data) {
  const img = document.querySelector(".desc-img");
  img.src = imgDesc[data];
};

const imgDesc = {
  "01d": "src/weathers/clear.png",
  "01n": "src/weathers/clearN.png",
  "02d": "src/weathers/few.png",
  "02n": "src/weathers/fewN.png",
  "03d": "src/weathers/scattered.png",
  "03n": "src/weathers/scatteredN.png",
  "04d": "src/weathers/broken.png",
  "04n": "src/weathers/brokenN.png",
  "09d": "src/weathers/shower.png",
  "09n": "src/weathers/shower.png",
  "10d": "src/weathers/rain.png",
  "10n": "src/weathers/rainN.png",
  "11d": "src/weathers/thunderstorm.png",
  "11n": "src/weathers/thunderstorm.png",
  "13d": "src/weathers/snow.png",
  "13n": "src/weathers/snow.png",
  "50d": "src/weathers/mist.png",
  "50n": "src/weathers/mist.png"
};



