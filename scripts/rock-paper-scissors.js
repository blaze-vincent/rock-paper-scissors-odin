function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.ceil(Math.random() * 10) % 3];
}

function playRound(playerSelection, computerSelection){
    let winnerDict = {
        "Rock": "Paper",
        "Paper": "Scissors",
        "Scissors": "Rock"
    };
    if(winnerDict[playerSelection] === computerSelection){
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if(playerSelection === computerSelection){
        console.log(`Tie! You both chose ${playerSelection}`);
    } else {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    }
}
