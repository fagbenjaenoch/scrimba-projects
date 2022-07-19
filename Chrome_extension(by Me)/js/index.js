let myLeads = ["github.com"]
const inputEl = document.querySelector('#input-el')
const addBtn = document.querySelector('.add-btn')
const saveBtn = document.querySelector('.save-btn')
const delBtn = document.querySelector('.delete-btn')
const leadList = document.querySelector('.lead-list')
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadFromLocalStorage) {
  myLeads = leadFromLocalStorage
  render(myLeads)
}

function render(leads) {
  let listItem = ""
  leads.forEach(lead => {
    listItem += "<li class='lead-item'>"
    + "<a target='_blank'>" + lead + "</a>" +
    "</li>"
  })
  leadList.innerHTML = listItem
}

addBtn.addEventListener("click", () => {
  if (inputEl.value !== "") myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})

delBtn.addEventListener("click", () => {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})