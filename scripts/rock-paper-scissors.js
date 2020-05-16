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

function handleInput(input){
    input = input.toLowerCase();
    input = input[0].toUpperCase() + input.slice(1);
    return(input);
}

function game(){
    let roundCount = 0;
    while(roundCount < 5){
        roundCount++;
        let playerSelection = handleInput(prompt("Make your move!"));
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();