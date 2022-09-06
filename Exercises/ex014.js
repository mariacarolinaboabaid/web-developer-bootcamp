// Exercise 11: Given a year, report if it is a leap year.

const leapYear = (year) => {
    if (year % 4 === 0){
        console.log(`The ${year} is leap.`)
    }
    else{
        console.log(`The ${year} is not leap.`)
    }
}
leapYear(2020)