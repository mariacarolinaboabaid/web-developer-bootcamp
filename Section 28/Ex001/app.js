const colors = ["purple", "blue", "green", "grey", "yellow", "pink", "black", "teal", "olive", "magenta"]
const div = document.querySelector("div")

function changingColor(){
    for (let i = 0; i < colors.length; i++){
        setTimeout(()=>{
            document.body.style.backgroundColor = colors[i];
        }, i * 400)
    }
}

div.addEventListener("click", changingColor)
