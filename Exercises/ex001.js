// Exercise 01: Write a JS program to check 2 numbers and return true if one of the numbers is 100 or if their sum is equal to 100

// 1º SOLUTION
const check = function (num1, num2){
    if ((num1 === 100 || num2 === 100) || (num1 + num2 === 100)){
        return true;
    }
    else{
        return false;
    }
}

const option1 = check (50, 50)
console.log(option1)

const option2 = check (100, 1)
console.log(option2)

const option3 = check (1, 100)
console.log(option3)

const option4 = check (0, 0)
console.log(option4)

console.log(check (50, 50))

// 2º SOLUTION
const isEqual = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqual(10, 10))
console.log(isEqual(50, 50))
console.log(isEqual(100, 10))
console.log(isEqual(10, 100))