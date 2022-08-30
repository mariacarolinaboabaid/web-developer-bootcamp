const fakeRequest = (url) =>{
    return new Promise((resolve, reject)=>{
            if (url === "a"){
                resolve(("Resolved - Ihul"))
            }
            else{
                reject("Fail")
            }
        }, 1000)
}
console.log(fakeRequest("B"))

fakeRequest("a")
.then(()=>{
    console.log("R e s o l v e d")
    return fakeRequest("b")
})
.then(()=>{
    console.log("R e s o l v e d  2")
})
.catch(()=>{
    console.log("R e j e c t e d")
})
