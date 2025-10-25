function getComputerChoice() {
    let guess = Math.floor(3 * Math.random())

    if (guess === 0) {
        return "rock";
    }
    else if (guess === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanGuess = prompt("Make your choice!");

    return humanGuess;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice)
    {
        console.log("Draw!");
    }

    else if (humanChoice === "paper" && computerChoice === "rock") 
    {
        console.log("You win! Paper beats rock.");
        humanScore++;
    }

    else if (humanChoice === "paper" && computerChoice === "scissors")
    {
        console.log("You lose! Scissors beats paper.");
        computerScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "paper")
    {
        console.log("You lose! Paper beats rock.");
        computerScore++;
    }

    else if (humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You win! Rock beats scissors.");
        humanScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "rock")
    {
        console.log("You lose! Rock beats scissors.");
        computerScore++;
    }

    else if (humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You win! Scissors beats paper.");
        humanScore++;
    }
}



function playGame() {
    for (let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore === computerScore)
    {
        console.log("Draw!");
    }

    else if (humanScore > computerScore)
    {
        console.log("You win!");
    }

    else {
        console.log("You lose!");
    }

}

playGame();

