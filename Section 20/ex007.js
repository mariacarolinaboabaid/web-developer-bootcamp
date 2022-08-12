const hen = {
    name: "Helen",
    eggCount: 0,
    layAngEgg(){
        this.eggCount = this.eggCount + 1;
        return "EGG";
    }
}
console.log(hen.layAngEgg())
console.log(hen.layAngEgg())
console.log(hen.eggCount)