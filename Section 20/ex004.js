function ageCheck (min, max){
    return function(num){
        return num >= min && num <= max;
    }
}

const age = ageCheck(1, 18);
console.log(age(15)) 
console.log(age(120)) 
const idade = ageCheck(100, 120);
console.log(idade(111)) 
console.log(idade(78)) 