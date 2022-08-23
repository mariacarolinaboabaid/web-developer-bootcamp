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
let gameNotStarted = false

winningScore.addEventListener("change", function () {

    winningScore = parseInt(winningScore.value)
    console.log(typeof winningScore)
})