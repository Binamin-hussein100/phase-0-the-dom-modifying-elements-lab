// Write your code here!
const theMain = document.getElementById("main")

theMain.remove()

// adding an element
const newHeader=document.createElement("h1")
newHeader.setAttribute("id","victory")
document.body.append(newHeader)

// updating elements
const myHeader = document.getElementById("victory")
const myName = 'Binamin'
myHeader.textContent = myName + " is the champion"

