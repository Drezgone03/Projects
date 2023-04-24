function getInputValue() {
  return document.getElementById("add-item-text").value
}

function createnewListItem(text) {
  var newListItem = document.createElement("li")
  newListItem.className = "list-group-item"

  var newListItemSpan = document.createElement("span")
  newListItemSpan.className = "list-group-item-text"
  newListItemSpan.textContent = text

  var newListItemLink = document.createElement("a")
  newListItemLink.href = "#"
  newListItemLink.className = "list-group-item-button"
  newListItemLink.title = "Remove item"
  newListItemLink.textContent = "x"

  newListItem.appendChild(newListItemSpan)
  newListItem.appendChild(newListItemLink)

  addDeleteFuncionality(newListItem)

  return newListItem
}

document.getElementById("add-button").addEventListener("click", function () {
  var inputValueText = getInputValue()
  if (inputValueText === "") {
    alert("unesite namirnicu u input polje")
  } else {
    var newListItem = createnewListItem(inputValueText)
    var list = document.getElementById("list-items")
    list.appendChild(newListItem)
  }
})
// Ovo iznad je kako dodati novu stavku na nasu listu.
// Ispod ce biti kod za brisanje stavki sa liste.

function addDeleteFuncionality(listItem) {
  listItem.lastElementChild.addEventListener("click", function () {
    var list = document.getElementById("list-items")
    list.removeChild(listItem)
  })
}
