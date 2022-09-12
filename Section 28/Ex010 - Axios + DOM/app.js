const jokesList = document.getElementById("jokes")
const btn = document.querySelector("button")

const addDadJoke = async () =>{
    const newJoke = await dadJoke()
    const newLi = document.createElement("LI")
    newLi.append(newJoke)
    jokesList.append(newLi)
}
const dadJoke = async () =>{
    try{
    const configHeader = { headers: {Accept: "application/json"}}
    const joke = await axios.get("https://icanhazdadjoke.com", configHeader)
    return joke.data.joke
    }  catch {
        return "No jokes available...Sorry :/"
    }
    
}
btn.addEventListener("click", addDadJoke)