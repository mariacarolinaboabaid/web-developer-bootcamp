fetch("https://swapi.dev/api/people/1/")
    .then(resp => {
        console.log("The fetch is resolved!", resp)
        return resp.json()
    })
    .then(data => {
        console.log("The JSON Method is resolved!", data)
        return fetch("https://swapi.dev/api/people/2/")
    })
    .then(resp => {
        console.log("The second fetch is resolved!", resp)
        return resp.json()
    })
    .then(data => {
        console.log("The second JSON Method is resolved!", data)
    })
    .catch(err => {
        console.log(err)
    })