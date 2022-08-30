const fakeRequest = (delay) => {
    return new Promise((resolve, reject) => {
        if (delay > 500) {
            reject("Error")
        }
        else {
            resolve("Ihul it worked!")
        }
    })
}

// fakeRequest(200)
//     // RESOLVED 1 PROMISE
//     .then(() => {
//         console.log("Resolved - Try 1")
//         // RESOLVED 2 PROMISE
//         fakeRequest(100)
//             .then(() => {
//                 console.log("Resolved - Try 2")
//                 fakeRequest(600)
//                     // RESOLVED 3 PROMISE
//                     .then(() => {
//                         console.log("Resolved - Try 3")
//                         fakeRequest(600)
//                         // REJECTED 3 PROMISE
//                     }).catch(() => {
//                         console.log("Rejected - Try 3")
//                     })
//             })
//             // REJECTED 2 PROMISE
//             .catch(() => {
//                 console.log("Rejected - Try 2")
//             })
//         // REJECTED 1 PROMISE
//     }).catch(() => {
//         console.log("Rejected - Try 1")
//     })


fakeRequest(300)
// RESOLVED - 1 PROMISE
.then((data)=>{
    console.log("Working... - Try 1")
    console.log(data)
    return fakeRequest(200)
})
// RESOLVED - 2 PROMISE
.then((data)=>{
    console.log("Working... - Try 2")
    console.log(data)
    return fakeRequest(600)
})
// RESOLVED - 3 PROMISE
.then((data)=>{
    console.log("Working... - Try 3")
    console.log(data)
})
// REJECT - 1, 2,3 PROMISE
.catch((data)=>{
    console.log("Sorry, not working...")
    console.log(data)
})

