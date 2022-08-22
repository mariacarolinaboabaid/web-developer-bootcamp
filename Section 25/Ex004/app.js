const button = document.querySelector("button")
const section = document.getElementById("sectionOne")
const prg = document.getElementById("pOne")
const div = document.querySelector("div")

button.addEventListener("click", function (event) {
    const newP = document.createElement("p")
    newP.innerText = "You clicked the button!"
    div.append(newP)
    event.stopPropagation()
})
section.addEventListener("click", function () {
    const newP = document.createElement("p")
    newP.innerText = "You clicked the section!"
    div.append(newP)
}) 
prg.addEventListener("click", function (event) {
    const newP = document.createElement("p")
    newP.innerText = "You clicked the paragraph!"
    div.append(newP)
    event.stopPropagation()
})