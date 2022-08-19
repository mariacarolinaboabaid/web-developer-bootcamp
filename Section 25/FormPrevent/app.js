// SELECTING ELEMENTES
const studentName = document.getElementById("name");
const form = document.querySelector("form");
const group = document.getElementById("group");

// FORM EVENT PREVENT DEFAULT
form.addEventListener("submit", function (event) {
    event.preventDefault()
    const name = studentName.value;
    const newLi = document.createElement("li");
    newLi.innerText = name;
    group.append(newLi);
    studentName.value = " ";
})
