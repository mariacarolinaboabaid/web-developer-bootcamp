// SELECTING THE BUTTON ELEMENTS
const p1Button = document.getElementById("btnP1")
const p2Button = document.getElementById("btnP2")
const resetButton = document.getElementById("btnReset")
// SELECTING THE SCORE KEEPER
const countScoreP1 = document.getElementById("displayP1")
const countScoreP2 = document.getElementById("displayP2")
let winningScore = document.getElementById("playTo")
const whoWin = document.getElementById("winner")
// DECLARING VARIABLES
let p1Score = 0
let p2Score = 0
let isGameOver = false
// FUNCTIONS DISABLE AND UNDISABLE
function disable() {
    p1Button.disabled = true
    p2Button.disabled = true
}
function disableAll() {
    p1Button.disabled = true
    p2Button.disabled = true
    resetButton.disabled = true
}
function undisable() {
    p1Button.disabled = false
    p2Button.disabled = false
    resetButton.disabled = false
}
// FUNCTION RESET 
function reset() {
    p1Score = 0
    p2Score = 0
    countScoreP1.innerText = p1Score
    countScoreP2.innerText = p2Score
    countScoreP1.style.color = "black"
    countScoreP2.style.color = "black"
    whoWin.innerHTML = "<i>Use the buttons below to keep score</i>"
    whoWin.style.color = "black"
    isGameOver = false
}
// SELECT EVENT
disableAll()
winningScore.addEventListener("change", function () {
    disable()
    winningScore = parseInt(winningScore.value)
    reset()
    undisable()
    console.log(winningScore)
})
// BUTTONS EVENTS
p1Button.addEventListener("click", function () {
    if (!isGameOver) {
        p1Score += 1
        countScoreP1.innerText = p1Score
        if (p1Score === winningScore) {
            disable()
            countScoreP1.style.color = "green";
            countScoreP2.style.color = "red";
            whoWin.innerHTML = "<b>Player One is the winner!<b>"
            whoWin.style.color = "green"
            isGameOver = true
        }
    }
})
p2Button.addEventListener("click", function () {
    if (!isGameOver) {
        p2Score += 1
        countScoreP2.innerText = p2Score
        if (p2Score === winningScore) {
            disable()
            countScoreP2.style.color = "green";
            countScoreP1.style.color = "red";
            whoWin.innerHTML = "<b>Player Two is the winner!<b>"
            whoWin.style.color = "green"
            isGameOver = true
        }
    }
})
resetButton.addEventListener("click", reset)

