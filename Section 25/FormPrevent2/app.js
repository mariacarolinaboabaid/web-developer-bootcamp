// SELECTING THE ELEMENTS
const form = document.querySelector("form");
const commentsDiv = document.getElementById("comments");
const commentInput = document.getElementById("comment");

// PREVENT DEFAULT BEHAVIOR
form.addEventListener("submit", function(event){
    event.preventDefault();
    const newComment = commentInput.value;
    const newP = document.createElement("p");
    newP.innerText = newComment;
    commentsDiv.append(newP);
   commentInput.value = " ";
})