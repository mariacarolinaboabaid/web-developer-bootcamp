// Exercise 012: Write a JS program to find the number of even digits in an array of integers.

const numbers = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const evenNumbers = numbers.filter((num)=>{
    return num % 2 === 0
})
console.log(`${evenNumbers.length} numbers of the array are even. Being them: ${evenNumbers}`)
