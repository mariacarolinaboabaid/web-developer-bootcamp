// Raffling a random
const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber)
// Asking the User his guess
let guess = parseInt(prompt("Guess the number that I chose between 0 - 10!"));
// If the guess is not a number
while (!guess){
    guess = parseInt(prompt("Please, enter a valid number!"))
}
// Attempts
let attempts = 1;
while (guess !== randomNumber){
    attempts++;
    if (guess > randomNumber){
        guess = parseInt(prompt("Try a smaller number!"))
    }
    else if (randomNumber > guess){
        guess = parseInt(prompt("Try a bigger number!"))
    }
}
// Result
alert(`Congratulations! You got it! It took you ${attempts} guess(es).`);

