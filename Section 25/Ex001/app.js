// SELECTING ELEMENTS
const firstButton = document.getElementById("firstButton")
const secondButton = document.getElementById("secondButton")
const thirdButton = document.getElementById("thirdButton")
const fourthButton = document.getElementById("fourthButton")
const h1 = document.querySelector("h1")
// FUNCTIONS
function twist(){
    alert("Twist!!!")
}
function shout(){
    alert("Shout!!!")
}
// EVENTS
firstButton.onclick = function(){
    alert("You clicked me :) ")
}
secondButton.onmouseenter = function(){
    alert("Thanks for clicked me!")
}
h1.onmouseenter = function(){
    h1.style.color = "purple"
}
thirdButton.addEventListener('dblclick', function(){
    alert("Ughhh, thanks you so much for click me! What a relieve!")
} )
fourthButton.addEventListener('click', twist)
fourthButton.addEventListener('click', shout)


