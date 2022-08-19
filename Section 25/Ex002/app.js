const keyboardEvent = document.querySelector("input")

keyboardEvent.addEventListener("keydown", function(){
    alert("Keydown!")
})
keyboardEvent.addEventListener("keyup", function(){
    alert("Keyup!")
})