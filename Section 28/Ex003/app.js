const lastName = "Boabaid"

function first(name, lastName){
    console.log(`Hello, ${name} ${lastName}!`)
}

function second(){
    first("Carol", lastName)
    console.log("Bye")
}

second()