const inputOne = document.querySelectorAll("input")[0]
const inputTwo = document.querySelectorAll("input")[1]
const text = document.querySelector("p")

inputOne.addEventListener("input", function(event){
    const newText = inputOne.value;
    if (newText.length > 0)
      text.innerText = newText;
    else if (newText.length === 0){
        text.innerText = "Enter Something"
    }
})

inputTwo.addEventListener("change", function(event){
    alert("Change Event")
})