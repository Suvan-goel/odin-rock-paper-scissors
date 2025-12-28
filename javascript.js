const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const humanScoreDiv = document.querySelector(".humanScore");
const computerScoreDiv = document.querySelector(".computerScore");
const humanChoiceDiv = document.querySelector(".humanChoice");
const computerChoiceDiv = document.querySelector(".computerChoice");
const message = document.querySelector(".message");

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random()*3)
    return options[index]
}

function displayScore(){
    humanScoreDiv.textContent = `Your score: ${humanScore}`;
    computerScoreDiv.textContent = `Computer's score: ${computerScore}`;
}

function checkGameEnded (humanScore, computerScore){
    if (humanScore >= 5){
        message.textContent = "You WIN!!"
    }
    else if (computerScore >= 5) {
        message.textContent = "You LOSE. The computer wins."
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice){
    computerChoice = getComputerChoice();
    humanChoiceDiv.textContent = `Your Choice: ${humanChoice}`;
    computerChoiceDiv.textContent = `Computer's Choice: ${computerChoice}`;
    if (humanChoice === computerChoice) {
        message.textContent = "You both chose the same thing. Go again";
        displayScore();
        checkGameEnded(humanScore, computerScore);
    }
    else if ((humanChoice === "rock" && computerChoice === "paper") || 
                (humanChoice === "paper" && computerChoice === "scissors") ||
                (humanChoice === "scissors" && computerChoice === "rock")){
            message.textContent = `You lose the round! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            displayScore();
            checkGameEnded(humanScore, computerScore);
        }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
                (humanChoice === "paper" && computerChoice === "rock") ||
                (humanChoice === "scissors" && computerChoice === "paper")){
            message.textContent = `You win the round! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            displayScore();
            checkGameEnded(humanScore, computerScore);
        }
    }

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", (choice) => playRound("paper"));
scissorsButton.addEventListener("click", (choice) => playRound("scissors"));


