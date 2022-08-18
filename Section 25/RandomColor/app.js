// // SELECTING ELEMENTS
const btn = document.querySelector("button")
const txt = document.querySelector("h1")
// FUNCTION
let randomColor = function randomColors(){
    let arrayColors = []
    for (let i = 0; i < 3; i++){
        arrayColors.push(Math.floor(Math.random() * 256 ))
    }
    return arrayColors;
}
randomColor()
// EVENTS
btn.addEventListener('click', function changingColor (){
    const newColor = "rgb("+ randomColor() + ")"
    document.body.style.backgroundColor = newColor;
    txt.innerHTML = newColor;
})
