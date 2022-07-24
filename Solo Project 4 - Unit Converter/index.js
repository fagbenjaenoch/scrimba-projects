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
  const renderEl = (convVal, from, to) => {
    return toBeConverted + ' ' + from + ' = ' + Math.floor(toBeConverted * convVal) + ' ' + to + ' | ' + toBeConverted + ' ' + to + ' = ' + Math.floor(toBeConverted / convVal) + ' ' + from
  }
  lengthResult.textContent = renderEl(3.281, 'meters', 'feets')
  volumeResult.textContent = renderEl(0.264, 'liters', 'gallons')
  weightResult.textContent = renderEl(2.204, 'kgms', 'pounds')
}

convertBtn.addEventListener("click", () => {
  render(conversionInput.value)
})