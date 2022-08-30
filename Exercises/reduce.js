const people = [
    { firstName: 'Sam', lastName: 'Hughes', age: 30},
    { firstName: 'Terri', lastName: 'Bishop', age: 40},
    { firstName: 'Jar', lastName: 'Burke', age: 50},
    { firstName: 'Julio', lastName: 'Mille', age: 33},
    { firstName: 'Chester', lastName: 'Flores', age: 34},
    { firstName: 'Madison', lastName: 'Marshal', age: 42},
    { firstName: 'Ava', lastName: 'Pena', age: 44},
    { firstName: 'Gabriella', lastName: 'Steward', age: 28},
    { firstName: 'Charles', lastName: 'Campbel', age: 88},
    { firstName: 'Tiffany', lastName: 'Lambert', age: 18},
    { firstName: 'Antonio', lastName: 'Gonzalez', age: 70},
    { firstName: 'Aaron', lastName: 'Garrett', age:  67}
]
// SUM OF ALL AGES
const totalAge = people.reduce((sum, item) =>{
    return sum + item["age"]
}, 0)
console.log(totalAge)

// MIN AND MAX VALUE WITH MAP, SPREAD AND MATH MIN
const values = people.map((item) =>{
    return item['age']
})
const minValue = Math.min(...values)
const maxValue = Math.max(...values)
console.log(minValue, maxValue)

// MIN AND MAX VALUE WITH REDUCE 
const nums = [19, 29, 23, 34, 45, 3, 2]
let min = nums.reduce((min, element) =>{
    if (element < min){
        return element
    }
    else{
        return min
    }
})

let max = nums.reduce((max, element) =>{
    if (element > max){
        return element
    }
    else{
        return max
    }
})
console.log(min, max)


// OTHER ARGUMENTS
const numbers = nums.reduce((total, number, index, array)=>{
    // console.log(total, number, index, array)
    return total + number
},0)

