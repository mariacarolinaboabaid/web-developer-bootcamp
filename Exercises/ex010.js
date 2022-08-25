// Exercise 10: Write a JS program to check a given string how many occurences of a given character.

let occurChar = (char, word) => {
    let occurrence = 0
    for (let letter of word) {
        if (letter === char) {
            occurrence += 1
        }
    }
    return occurrence
}

console.log(occurChar("a", "abc"))
console.log(occurChar("a", "owl"))
console.log(occurChar("a", "aaa"))
