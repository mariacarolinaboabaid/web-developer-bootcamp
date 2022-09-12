const div = document.getElementsByTagName("div")

const changeColors = (color) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color;
            resolve()
        }, 1000)
    })
}
changeColors("pink")
.then(()=>{
    return changeColors("lightblue")
})
.then(()=>{
    return changeColors("lightgreen")
})
