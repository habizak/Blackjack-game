let firstCard = 5
let cardOne = document.querySelector("#card-1")
let secondCard = 3
let cardTwo = document.querySelector("#card-2")
let sumVal = document.querySelector("#sum-val")
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.querySelector("#messageEl")

function newGame() {
    
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    cardOne.textContent = `${firstCard}`;
    cardTwo.textContent = `${secondCard}`;
    sumVal.textContent = `${sum}`;
    messageEl.textContent = `"${message}"`;
}

function drawCard() {
    let newCard = 5
    sum += newCard
    renderGame()
}
