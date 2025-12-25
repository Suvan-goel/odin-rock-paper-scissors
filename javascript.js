function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3)
    return options[index]
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("You both chose the same thing. Go again");
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(`Computer's choice: ${computerChoice}`);
        playRound(humanChoice,computerChoice);
        return;
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || 
             (humanChoice === "paper" && computerChoice === "scissors") ||
             (humanChoice === "scissors" && computerChoice === "rock")){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            return (computerScore++);
        }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")){
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            return (humanScore++);
        }
    }

    for (let i = 0; i < 5; i++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log(`Computer's choice: ${computerChoice}`);
        playRound(humanChoice,computerChoice);
    }
    console.log(`Your score: ${humanScore}`);
    console.log(`Computers score: ${computerScore}`);
    if (computerScore > humanScore) {
        console.log("The computer wins overall!");
    }
    else {
        console.log("You win overall!");
    }
}

playGame()


