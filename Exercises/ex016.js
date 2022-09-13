// Exercise 013: Write a JS program to find the number of even values up to a given number.

const givenNumber = 20
const evenNumbers = []
for (let i = 0; i <= givenNumber; i++){
    if (i % 2 === 0){
        evenNumbers.push(i)
    }
}
console.log(`The count of even numbers untill the given number of ${givenNumber} is ${evenNumbers.length}, being them: ${evenNumbers}.`)