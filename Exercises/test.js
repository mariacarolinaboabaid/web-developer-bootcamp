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

const ranking = {}
let makeDictAge = (person, name, dateOfBirth) => {
    for (let i = 0; i < person.length; i++) {
        ranking[person[i][name]] = parseInt(person[i][dateOfBirth].slice(-7, -5) + person[i][dateOfBirth].slice(0, 2) +  person[i][dateOfBirth].slice(-4))
    }
    return ranking
}
console.log(makeDictAge(people, "firstName", "DOB"))

let values = Object.values(ranking)
let keys = Object.keys(ranking)
console.log(typeof Math.min(values))

let rankingValues = (arrayValues) => {
    const crescentValues = []
    for (let value of arrayValues){
        console.log(value)
        let minValue = Math.min(...arrayValues)
        console.log(value, minValue)
        crescentValues.push(minValue)
    }
    return crescentValues
}
console.log(rankingValues(values))