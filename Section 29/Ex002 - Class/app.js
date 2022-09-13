class Person{
    constructor(name, age, greeting = "Hello"){
        this.name = name
        this.age = age
        this.greet = greeting
    }
    getGreeting(){
        return `${this.greet}, ${this.name}!`
    }
}

let person1 = new Person ("Carolina", 24, "Hi")
let person2 = new Person("Alexandre", 27)

console.log(person1.getGreeting())
console.log(person2.getGreeting())

// SUBCLASS
class Employee extends Person{
    constructor(name, age, greeting = "Hello", salary){
        super(name, age, greeting)
        this.salary = salary
    }
    // OVERWRITING THE METHOD GET GREETING
    getGreeting(){
        return super.getGreeting() + "Do not forget to record your time."
    }

    getSalary(){
        return `Your salary is $ ${this.salary}.`
    }
}
let employee1 = new Employee("Lisa", 47, "Hi", 4000)
console.log(employee1.getGreeting(), employee1.getSalary())