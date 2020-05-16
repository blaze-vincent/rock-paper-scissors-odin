function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.ceil(Math.random() * 10) % 3];
}
