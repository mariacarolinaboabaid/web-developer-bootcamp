// Exercise 03: Write a JS program to replace every character in a given string with the character following it in the alphabet

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const str= "z"
let newWord = " "

for (let char of str){
    const newLetter = alphabet[alphabet.indexOf(char) + 1]
    newWord = newWord + newLetter
}

console.log(newWord)