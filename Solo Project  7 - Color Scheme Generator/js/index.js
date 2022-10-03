const btn = document.querySelector('#sumbit')
const seedColorInput = document.querySelector('#seed-color')
const modeInput = document.querySelector('#mode')
const colorsEl = document.querySelector('.colors')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const seedColor = seedColorInput.value
  const mode = modeInput.value
  //alert('Button Clicked')
  
  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=5&format=json`)
    .then(res => res.json())
    .then(result => {
      //alert(result)
      const { colors } = result
      colorsEl.innerHTML = colors.map(({ hex }) => {
        `
          <div class="color-card">
	          <div class="color-display" style="${hex}"></div>
	          <p class="color-code">${hex}</p>
	      </div>
        `
      }).join('')
    })
    .catch(err => alert(err))
})