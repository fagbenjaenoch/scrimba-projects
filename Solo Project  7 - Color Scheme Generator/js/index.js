const btn = document.querySelector('#sumbit')
const seedColorInput = document.querySelector('#seed-color')
const modeInput = document.querySelector('#mode')
const colorsEl = document.querySelector('.colors')

btn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e.target.id)
  //alert('Button Clicked')
})

function getApi() {
  const seedColor = seedColorInput.value
  const mode = modeInput.value
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
}
getApi()