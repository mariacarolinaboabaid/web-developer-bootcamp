// // METHOD GET
// axios.get("https://swapi.dev/api/people/1/")
//     .then((data) => {
//         console.log("Resolved!")
//         console.log(data)
//     }).catch((err) => {
//         console.log(err)
//     })
// // METHOD GET WITH ASYNCHRONOUS FUNCTION
// const getStarWar = async (id) => {
//     try {
//         const people = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log(people.data)
//     } catch (err) {
//         console.log(err)
//     }
// }
// getStarWar(5)
// getStarWar(a)
// // METHOD GET WITH HTTPS HEADERS
const dadJoke = async () => {
    try {
        const configuration = { headers: { Accept: "application/json" } }
        const joke = await axios.get("https://icanhazdadjoke.com", configuration)
        console.log(joke.data)
    } catch (err) {
        console.log(err)
    }
}
dadJoke()