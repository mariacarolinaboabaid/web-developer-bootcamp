// Exercise 09: Write a JS program to find out wich one is nearest to 100.

let findOut = (n1, n2) => {
    if (Math.abs(100 - n1) < Math.abs(100 - n2)){
        return `${n1} is nearest to 100`
    }
    else if (Math.abs(100 - n1) > Math.abs(100 - n2)){
        return `${n2} is nearest to 100`
    }
    else{
        return "The numbers are equal"
    }
}

console.log(findOut(80, 10))
console.log(findOut(200, 10))
console.log(findOut(20, 80))
console.log(findOut(50, 50))

