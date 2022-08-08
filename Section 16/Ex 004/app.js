let age = parseInt(prompt("ENTER YOUR AGE: "));

if ((age >= 0 && age <= 5) || age >= 65){
    console.log("Your entrance is for free!")
}
else if (age > 5 && age < 10){
    console.log("Your price ticket is $10!")
}
else if (age >= 10 && age < 65){
    console.log("Your price ticket is $20!")
}
else{
    console.log("Your age is not valid!")
}