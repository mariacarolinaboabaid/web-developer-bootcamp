const container = document.getElementById("container");
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 155; i++) {
    const newDiv = document.createElement("div");
    const newImg = document.createElement("img");
    const newSpan = document.createElement("span")
    newImg.src = `${baseURL}${i}.png`;
    newSpan.innerText = `#${i}`;
    container.appendChild(newDiv);
    newDiv.appendChild(newImg);
    newDiv.appendChild(newSpan);
}