const homeDisplay = document.querySelector('.home-display')
const guestDisplay = document.querySelector('.guest-display')
const timer = document.querySelector('.timer')
const buttons = document.querySelectorAll('button')
const winning = document.querySelector('.winning')

let homeCount = 0
let guestCount = 0

function increment(number, display) {
  if (display === 'Home') {
    homeCount += number
  } else {
    guestCount += number
  }
  homeDisplay.textContent = homeCount
  guestDisplay.textContent = guestCount
}

let count = 30
let countDown = setInterval(() => {
  timer.textContent = count
  count--
  if (homeCount > guestCount) {
    winning.textContent = "Home team is winning"
  } else {
    winning.textContent = "Guest is winning"
  }
}, 1000)

setTimeout(() => {
  clearInterval(countDown)
  timer.textContent = "0"
  buttons.forEach(b => b.setAttribute("disabled"))
}, 30000);