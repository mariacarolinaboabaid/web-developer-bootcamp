// SELECTING THE ELEMENTS
const form = document.querySelector("form");
const commentsDiv = document.getElementById("comments");
const commentInput = document.getElementById("comment");
const username = document.getElementById("username")

// PREVENT DEFAULT BEHAVIOR
form.addEventListener("submit", function(event){
    event.preventDefault();
    const newComment = commentInput.value;
    const whoComment = username.value;
    const newP = document.createElement("p");
    newP.innerHTML= "<b>"+ whoComment + "</b><br>" +  "<i>" + newComment + "</i>";
    commentsDiv.append(newP);
    commentInput.value = " ";
    username.value = " ";
})