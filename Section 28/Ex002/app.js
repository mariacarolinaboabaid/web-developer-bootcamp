function changingColor (color, delay, doNext){
    setTimeout(()=> {
        document.body.style.backgroundColor = color
        doNext()
    }, delay
    )
}

changingColor("purple", 1000, () =>{
    changingColor("grey", 1000)})