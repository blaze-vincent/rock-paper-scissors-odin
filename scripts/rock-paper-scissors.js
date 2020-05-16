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
        return(`You Lose! ${computerSelection} beats ${playerSelection}`);
    } else if(playerSelection === computerSelection){
        return(`Tie! You both chose ${playerSelection}`);
    } else if(winnerDict[computerSelection] === playerSelection){
        return(`You Win! ${playerSelection} beats ${computerSelection}`);
    } else {
        console.error("invalid input");
    }
}
