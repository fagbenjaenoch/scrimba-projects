/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.querySelector('#convert-btn')
const lengthResult = document.querySelector('#length-result')
const volumeResult = document.querySelector('#volume-result')
const weightResult = document.querySelector('#weight-result')
const conversionInput = document.querySelector('#conversion-input')

function render(toBeConverted) {
  lengthResult.textContent = toBeConverted + ' meters =  ' + Math.floor(toBeConverted * 3.281) + ' feets | ' + toBeConverted + ' feets = ' + Math.floor(toBeConverted / 3.281) + ' meters'
  volumeResult.textContent = toBeConverted + ' liters =  ' + Math.floor(toBeConverted * 0.264) + ' gallons | ' + toBeConverted + ' gallons = ' + Math.floor(toBeConverted / 0.264) + ' liters'
  weightResult.textContent = toBeConverted + ' kgms =  ' + Math.floor(toBeConverted * 2.204) + ' pounds | ' + toBeConverted + ' pounds = ' + Math.floor(toBeConverted / 2.204) + ' kgms'
  toBeConverted = ''
}

convertBtn.addEventListener("click", () => {
  render(conversionInput.value)
})