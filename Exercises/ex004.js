// Exercise 04: Write a JS program to get the current date.

// DEFAULT VALUE --> now = new Date()
let currentDate = (now = new Date()) => {
    let dateNow = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`
    console.log(dateNow)
}
currentDate()