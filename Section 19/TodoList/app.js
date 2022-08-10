// Empty array of To Do:
const toDo = [];

// Getting the decision from the user:
let userDecision = prompt("What you would like to do?").toLowerCase();

// User Decisions
while (userDecision !== "quit") {
// Adding a New To Do:
    if (userDecision === "new") {
        let newToDo = prompt("What is the new To Do?")
        toDo.push(newToDo)
        console.log(`${newToDo.toUpperCase()} added to the list`)
    }
// Showing the To Do:
    else if (userDecision === "list") {
        for (let i = 0; i < toDo.length; i++) {
            console.log(`${i + 1}: ${toDo[i]}`)
        }
    }
// Removing a To Do:
    else if (userDecision === "delete") {
        let removeToDo = prompt("What To Do you would like to delete?")
        let item = toDo.indexOf(removeToDo);
        while (item === -1){
            removeToDo = prompt("Unknow To Do. Insert again the To Do that you would like to delete?")
            item = toDo.indexOf(removeToDo);
        }
        toDo.splice(item, 1)
        console.log(`${removeToDo.toLocaleUpperCase()} deleted.`)
    }
// If the User insert an invalid optin:
    else {
        userDecision = prompt("Sorry, not an available option. Choose again.").toLowerCase()
    }
    userDecision = prompt("What you would like to do?").toLowerCase()
}
console.log("Quit the app.")