const cat = {
    name: "Fiona",
    color: "black",
    age: "8",
    meow(){
        console.log(this.name, this.color, this.age)
    },
    meow1(){
        console.log(`I love my cat ${this.name}!`)
    }
}

cat.meow()
cat.meow1()