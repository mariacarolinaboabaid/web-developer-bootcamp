// Exercise 07: Write a JS program to extract the first half of a string of even length

let breakEvenString = (str) => {
    if (str.length % 2 === 0){
        return str.slice(0, str.length/2)
    }
}
console.log(breakEvenString("carolina"))