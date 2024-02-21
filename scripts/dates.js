
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const dateTxt = document.querySelector(".date")
const ddTxt = document.querySelector(".dd-week")

function setDates(mm, dWeek, dd) {
  dateTxt.innerText = `${months[mm]} ${dd}`
  ddTxt.innerText = `${days[dWeek]}`
}

function getDates(dt, tmz) {
  const s = parseInt(dt, 10) + parseInt(tmz, 10)
  const ms = s * 1000
  const cMonth = new Date(ms).getUTCMonth()
  const cDay = new Date(ms).getUTCDay()
  const cDate = new Date(ms).getUTCDate()
  setDates(cMonth, cDay, cDate)
}

export default function date(data) {
  const dt = data.dt
  const tmz = data.timezone
  getDates(dt, tmz)
}