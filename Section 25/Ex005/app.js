const item = document.querySelector("input")
const list = document.getElementById("list")
const button = document.querySelector("button")
const lis = document.getElementsByTagName("li")

list.addEventListener("click", function (event) {
    event.target.nodeName === "LI" && event.target.remove()
})

// for (let li of lis) {
//     li.addEventListener("click", function (event) {
//         console.dir(event.target)
//     })}

button.addEventListener("click", function () {
    const newItem = item.value
    const newLi = document.createElement("li")
    newLi.innerText = newItem;
    list.append(newLi)
    item.value = " "
})

