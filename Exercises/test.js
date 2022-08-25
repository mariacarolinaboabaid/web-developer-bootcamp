const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1992', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '08/25/1992', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '08/09/1992', department: 'Development', salary: '39000' }
]

let dateNow = new Date()
let yearNow = dateNow.getFullYear()
let monthNow = dateNow.getMonth() + 1
let dayNow = dateNow.getDate()

const rankingArray = []
const ranking = {}
let makeArrayAge = (person, name, dateOfBirth) => {
    for (let i = 0; i < person.length; i++) {
        let yearBirth = parseInt(person[i][dateOfBirth].slice(-4))
        let monthBirth = parseInt(person[i][dateOfBirth].slice(0, 2))
        let dayBirth = parseInt(person[i][dateOfBirth].slice(-7, -5))
        rankingArray.push([])
        rankingArray[i][0] = person[i][name]
        rankingArray[i][1] = yearBirth
        rankingArray[i][2] = monthBirth
        rankingArray[i][3] = dayBirth
    }
    return rankingArray
}
console.log(makeArrayAge(people, "firstName", "DOB"))
console.log(rankingArray.length)
const crescentArrayAge = []
let rankingArrayAge = (array) => {
    for (let i = 0; i < array.length; i++){
        for (x = 1; x < array.length - 1; x++){
            console.log(array[i][1], array[x][1])
            // if (array[i][1] < array[x][1])
            }
        }
}
rankingArrayAge(rankingArrayAge(rankingArray))

