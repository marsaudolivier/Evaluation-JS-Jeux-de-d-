//définition de mes variables
let player1 = 1;
let player2 = 2;
let scoreGlobal1 = 0;
let scoreGlobal2 = 0;
let scoreToWin = 100;
let playerGamer = 0;
let canHold = false;

//définition des boutons
let buttonRoll = document.getElementById("rollDice");
let buttonHold = document.getElementById("hold");
let buttonNewGame = document.getElementById("newGame");

//définition des scores
let score1 = document.getElementById("scorePlayer1");
let score2 = document.getElementById("scorePlayer2");
let current1 = document.getElementById("currentPlayer1");
let current2 = document.getElementById("currentPlayer2");

//définition des joueurs
let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");

//définition du dé
let dice = document.getElementById("dice");

//écoute des bouton
buttonRoll.addEventListener("click", rollDice);
buttonHold.addEventListener("click", hold);
buttonNewGame.addEventListener("click", newGame);

//fonction du bouton new game
function newGame() {
    scoreGlobal1 = 0;
    scoreGlobal2 = 0;
    scorecurrent1 = 0;
    scorecurrent2 = 0;
    score1.innerHTML = scoreGlobal1;
    score2.innerHTML = scoreGlobal2;
    current1.innerHTML = scorecurrent1;
    current2.innerHTML = scorecurrent2;
    playerOne.classList.add("active");
    playerTwo.classList.remove("active");
    playerGamer = 1;
    canHold = false;
    buttonHold.disabled = true;
    dice.innerHTML = `<img class="dice" src="atset/Two_red_dice_01.svg.png">`;
}

//fonction du bouton roll
function rollDice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = `<img class="dice" src="./atset/de${randomNumber}.png">`;
    if (playerGamer === player1) {
        if (randomNumber !== 1) {
            scorecurrent1 += randomNumber;
            current1.innerHTML = scorecurrent1;
            canHold = true;
            buttonHold.disabled = false;
        } else {
            switchPlayer();
        }
    } else {
        if (randomNumber !== 1) {
            scorecurrent2 += randomNumber;
            current2.innerHTML = scorecurrent2;
            canHold = true;
            buttonHold.disabled = false;
        } else {
            switchPlayer();
        }
    }
}

//fonction pour changer de joueur avec class active pour le joueur actif
function switchPlayer() {
    if (playerGamer === player1) {
        playerOne.classList.remove("active");
        playerTwo.classList.add("active");
        scorecurrent1 = 0;
        current1.innerHTML = scorecurrent1;
        playerGamer = player2;
        canHold = false; 
    }
    else {
        playerTwo.classList.remove("active");
        playerOne.classList.add("active");
        scorecurrent2 = 0;
        current2.innerHTML = scorecurrent2;
        playerGamer = player1;
        canHold = false; 
    }
    // activer le bouton "hold" uniquement après le premier lancer de dé
    if (lancer === 0) {
        canHold = false;
    } else {
        canHold = true;
    }
    buttonHold.disabled = !canHold;
}

//fonction du bouton hold
function hold() {
    if (playerGamer === player1) {
        scoreGlobal1 += scorecurrent1;
        score1.innerHTML = scoreGlobal1;
        scorecurrent1 = 0;
        current1.innerHTML = scorecurrent1;
        randomNumber = 0;
        lancer = 0;
        switchPlayer();
        // Message Win player 1
        if (scoreGlobal1 >= scoreToWin) {
            alert("Player 1 win !");
            newGame();
        }
    }
    else {
        scoreGlobal2 += scorecurrent2;
        score2.innerHTML = scoreGlobal2;
        scorecurrent2 = 0;
        current2.innerHTML = scorecurrent2;
        randomNumber = 0;
        lancer = 0;
        switchPlayer();
        // Message Win player 2
        if (scoreGlobal2 >= scoreToWin) {
            alert("Player 2 win !");
            newGame();
        }
    }
}
