
let randomColor = function randomColors(){
    let arrayColors = []
    for (let i = 0; i < 3; i++){
        arrayColors.push(Math.floor(Math.random() * 256 ))
    }
    return arrayColors;
}
randomColor()
function changingColor (){
    randomColor()
    const newColor = "rgb (" + randomColor ()+ ")";
    console.log(newColor)
}
changingColor()