const searchForm = document.querySelector("form")
const inputTvShow = document.getElementById("userTvShow")
const imgContainer = document.getElementById("container")

// REQUEST FUNCTION
searchForm.addEventListener("submit", async function (event) {
    event.preventDefault()
    removeAllChild(imgContainer)
    const nameTvShow = inputTvShow.value
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${nameTvShow}`)
    displayImgShows(res)
    searchForm.reset()
})

// APPENDING IMAGES FUNCTION
const displayImgShows = (resultShows) => {
    for (let i = 0; i < resultShows.data.length; i++) {
        if (resultShows.data[i].show.image) {
            const urlImageShow = resultShows.data[i].show.image.medium
            const imgShow = document.createElement("IMG")
            imgShow.setAttribute("src", urlImageShow)
            imgContainer.append(imgShow)
        }
    }
}

// REMOVING IMAGES FOR A NEW SUBMIT FUNCTION
const removeAllChild = (parent) => {
    for (let y = 0; y < parent.childElementCount; y++) {
        parent.removeChild(parent.children[y])
    }
}
