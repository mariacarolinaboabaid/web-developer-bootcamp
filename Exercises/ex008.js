// Exercise 08: Write a JS program to concatenate 02 strings except their first character.

let addTwoStrings = (str1, str2) => {
    return str1.slice(1) + str2.slice(1)
}
console.log(addTwoStrings("maria", "carolina"))