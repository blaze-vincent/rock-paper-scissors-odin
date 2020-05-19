let roundsPlayed = 0;
let roundsWon = 0;

function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.ceil(Math.random() * 10) % 3];
}

function updateRoundsCounter(){
    const roundsTracker = document.querySelector("#rounds-tracker");
    roundsTracker.textContent = roundsPlayed;
}
updateRoundsCounter();

function updateWinsCounter(){
    const winsTracker = document.querySelector("#wins-tracker");
    winsTracker.textContent = roundsWon;
}
updateWinsCounter();

function resetGame(){
    roundsPlayed = 0;
    roundsWon = 0;
    updateRoundsCounter();
    updateWinsCounter();
    document.querySelector("#computer-move").textContent = "???";
    document.querySelector("#results-text").textContent = "";
}

function checkGameEnd(){
    if(roundsPlayed === 5){
        let winner;
        if((roundsPlayed - roundsWon) > roundsWon){
            winner = "The computer";
        } else {
            winner = "You";
        }
        alert(`${winner} won best of 5 rounds!`);
        resetGame();
    }
    return;
}

function playRound(playerSelection, computerSelection){
    roundsPlayed += 1;
    updateRoundsCounter();
    let winnerDict = {
        "Rock": "Paper",
        "Paper": "Scissors",
        "Scissors": "Rock"
    };
    if(winnerDict[playerSelection] === computerSelection){
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if(playerSelection === computerSelection){
        return(`Tie! You both chose ${playerSelection}`);
    } else if(winnerDict[computerSelection] === playerSelection){
        roundsWon += 1;
        updateWinsCounter();
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.error("invalid input");
    }
}

function handleInput(input){
    input = input.toLowerCase();
    input = input[0].toUpperCase() + input.slice(1);
    return(input);
}

let userRockNode = document.querySelector("#rock");
let userPaperNode = document.querySelector("#paper");
let userScissorsNode = document.querySelector("#scissors");

function game(input){
    const resultsDisplay = document.querySelector("#results-text");
    const computerMove = document.querySelector("#computer-move");
    let computerDecision = computerPlay();
    computerMove.textContent = computerDecision;
    resultsDisplay.textContent = playRound(input, computerDecision);
    checkGameEnd();
}

userRockNode.addEventListener("click", () => {
    game("Rock");
});
userPaperNode.addEventListener("click", () => {
    game("Paper");
});
userScissorsNode.addEventListener("click", () => {
    game("Scissors");
});