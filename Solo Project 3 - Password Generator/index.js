const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

const button = document.querySelector('button')
const result = document.querySelectorAll('.result')

function generatePassword(length = 15) {
  let password = ""
  for (let i = 0; i <= length; i++) {
    let randomChar = characters[Math.floor(Math.random() * characters.length)]
    password += randomChar
  }
  return password
}

button.addEventListener("click", () => {
  result.forEach(result => {
    result.textContent = generatePassword()
  })
})

result.forEach(result => {
  result.onclick = () => {
    document.execCommand("copy");
  }
  result.addEventListener("copy", (event) => {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", result.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
})