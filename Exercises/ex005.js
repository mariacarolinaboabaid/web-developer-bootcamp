// Exercise 05: Write a JS program to create a new string adding "New" in front of a given string. If the give string already begins with "New", then return the original string

const word = "New Office"
const word1 = "Office"
// 1º SOLUTION
let makingNewStr = (str) => {
    if (str.length < 3 || (str.slice(0,3).toUpperCase() !== "NEW")){
        return `New ${str}`
    }
    else{
        console.log("No changes")
        return str;
    }
}
// 2º SOLUTION
let makeNewStr = (str) => {
    if (str.indexOf("New") === -1){
        return `New ${str}`
    }
    else{ 
        return str;
    }
}
console.log(makingNewStr(word))
console.log(makingNewStr(word1))

console.log(makegNewStr(word))
console.log(makegNewStr(word1))

