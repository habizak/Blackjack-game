let cards = []
let sum = 0

let cardOne = document.querySelector("#card-1")
let cardTwo = document.querySelector("#card-2")
let sumVal = document.querySelector("#sum-val")

let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#messageEl")

function randomCard() {
        let randomNum = Math.floor( Math.random()*10)+1
        if (randomNum >10) {
            return 10
        } else if (randomNum ===1) {
            return 11
        } else {
            return randomNum
        }
    }

function newGame() {
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    hasBlackJack = false;
    isAlive = true;
    let message = "";

    renderGame();
}

function renderGame() {
    let cardsContainer = document.querySelector("#cards-container");
    cardsContainer.innerHTML = ""; // Clear previous cards

    // Loop through all cards and create new elements
    for (let i = 0; i < cards.length; i++) {
        let cardDiv = document.createElement("div"); // Create card container
        cardDiv.classList.add("card"); // Add card styling

        let cardNum = document.createElement("p"); // Create card number
        cardNum.classList.add("card-num");
        cardNum.textContent = cards[i]; // Set card value

        cardDiv.appendChild(cardNum); // Add number to card
        cardsContainer.appendChild(cardDiv); // Add card to container
    }

    if (sum <= 20) {
        message = "Do you want to draw a card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;

        // ✅ Add this: Vibrate <main> when Blackjack happens
        let mainElement = document.querySelector("main");
        mainElement.classList.add("vibrate");

        // Stop vibration after 1 second
        setTimeout(() => {
            mainElement.classList.remove("vibrate");
        }, 1000);

    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    document.getElementById("sum-val").textContent = sum;
    document.getElementById("messageEl").textContent = message;
}

function drawCard() {
    if (isAlive && !hasBlackJack) {
        let newCard = randomCard();
        cards.push(newCard); // Add the new card to the cards array
        sum += newCard; // Update the sum
        renderGame(); // Re-render the UI
    }
}
