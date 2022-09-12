const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject("Connection failed!")
            }
            else {
                resolve("The connection is a sucess!")
            }
        }, delay)
    })
}

async function waitRequest() {
    try {
        let dataOne = await fakeRequest("abc")
        let dataTwo = await fakeRequest("def")
        console.log(dataOne)
        console.log(dataTwo)
    } catch (err) {
        console.log("Catch an error!")
        console.log(err)
    }
}
waitRequest()