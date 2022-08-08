const password = prompt("Please, enter a password: ");
if (password.length < 6){
    console.log("Your password need to have at least 6 characters!");
}
else{
    if (password.indexOf(' ') === -1){
        console.log("Valid password!");
    }
    else{
        console.log("Your password cannot contain blank spaces.");
    }
}
