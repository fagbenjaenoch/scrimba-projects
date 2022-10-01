const btn = document.querySelector('#sumbit')
const seedColorInput = document.querySelector('#seed-color')
const modeInput = document.querySelector('#mode')
const colors = document.querySelector('.colors')

btn.addEventListener('click', () => {
  const seedColor = seedColorInput.value
  const mode = modeInput.value
  //alert('Button Clicked')
  
  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.slice(2,5)}&mode=${mode}&count=5&format=json`)
    .then(res => res.json())
    .then(result => {
      //alert(result)
      const colorArray = result.colors
      colors.innerHTML = colorArray.map(color => {
        let hexCode = color.hex
        `
          <div class="color-card">
	        <div class="color-display" style="${hexCode}"></div>
	        <p class="color-code">${hexCode}</p>
	      </div>
        `
      }).join('')
    })
    .catch(err => alert(err))
})