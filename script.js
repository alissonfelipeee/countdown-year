const daysContainer = document.querySelector('#days')
const hoursContainer = document.querySelector('#hours')
const minutesContainer = document.querySelector('#minutes')
const secondsContainer = document.querySelector('#seconds')
const countdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountdownValues = ({days,hours,minutes,seconds}) => {
    if(days == 0 && hours == 0 && minutes == 0 && seconds == 0) {
        countdownContainer.innerHTML = `<h3 class="feliz">FELIZ ${nextYear}!!!</h3>`
        document.body.style.backgroundImage = 'url(https://images.alphacoders.com/960/thumb-1920-96083.jpg)'
        clearInterval(myInterval)
    } else {
        daysContainer.textContent = getTimeUnit(days)
        hoursContainer.textContent = getTimeUnit(hours)
        minutesContainer.textContent = getTimeUnit(minutes)
        secondsContainer.textContent = getTimeUnit(seconds)
    }
}

const updateCountdown = () => {
    const currentTime = new Date()
    const differenceTime = (newYearTime - currentTime)
    const days = Math.floor(differenceTime / 1000 / 60 / 60 / 24)
    const hours = Math.floor(differenceTime / 1000 / 60 / 60) %24
    const minutes = Math.floor(differenceTime / 1000 / 60) %60
    const seconds = Math.floor(differenceTime / 1000) %60

    insertCountdownValues({days,hours,minutes,seconds})
}

setTimeout(() => {
    countdownContainer.style.display = 'flex'
}, 1000)

const myInterval = setInterval(updateCountdown, 1000)