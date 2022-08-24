let makeNewString = (strOne, strTwo) => {
    if (strOne.length < 3 && strTwo.length < 3){
        let arrayValues = [strOne, strTwo]
        return arrayValues;
    }
    else{
        return strOne.slice(0,3)+strTwo.slice(-3)
    }
}
console.log(makeNewString("1234", "5678"))
console.log(makeNewString("12", "78"))