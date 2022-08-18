// // SELECTING ELEMENTS
const buttons = document.querySelectorAll("button");
const spans = document.querySelectorAll("span");
// FUNCTION
let randomColor = function randomColors() {
    let arrayColors = []
    for (let i = 0; i < 3; i++) {
        arrayColors.push(Math.floor(Math.random() * 256))
    }
    return arrayColors;
}
randomColor()
// FUNCTION WITH THE KEYWORD THIS
function colorize(){
    const newColor = "rgb(" + randomColor() + ")"
    this.style.backgroundColor = newColor;
}
// EVENTS
for (let button of buttons) {
    button.addEventListener('click', colorize)
}
for (let span of spans) {
    span.addEventListener('click', colorize)
}