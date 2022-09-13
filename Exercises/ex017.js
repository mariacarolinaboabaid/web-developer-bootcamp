// Exercise 014: Write a JS program to check whether a given array of integers is sorted in ascending order.

const arr = [50, 34, 21, 33, 57, 90, 200, 7, 122, 4, 69]
const ascendingArray = []
const times = arr.length
for (let i = 0; i < times; i++) {
    ascendingArray.push(Math.min(...arr))
    arr.splice(arr.indexOf(Math.min(...arr)), 1)
}
console.log(ascendingArray)

//  2 OPTION
const isAscending = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i + 1] < array[i]) {
            return false;
        }
    return true
    }
}
console.log(isAscending(arr))