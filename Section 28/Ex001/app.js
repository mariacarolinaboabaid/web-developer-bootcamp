const div = document.querySelector("div")

// FACTORY FUNCTION
function makeColor(r, g, b){
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function (){
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    }
    return color
}
const firstColor = makeColor(155, 233, 122).rgb()
console.log(firstColor)


div.addEventListener("click", ()=>{
    div.style.backgroundColor = firstColor
})