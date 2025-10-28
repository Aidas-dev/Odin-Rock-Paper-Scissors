// Step 1: Check if script is linked properly
console.log("Hello, World!");


// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

// Step 3: Write the logic to get the human choice
function getHumanChoice() {

    const userInput = prompt("Please enter your choice: rock, paper, or scissors");
    // We dont validate as per instructions, but add toLowerCase due to step 5
    return userInput.toLowerCase();
}

// Testing the function
//console.log("Human choice:", getHumanChoice());

// Step 4: Declare the player score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        return "You win!";
    } else {
        computerScore++;
        return "You lose!";
    }
}

//Write the logic to play a entire game

//function game() {
    for (let round = 1; round <= 5; round++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`Round ${round}: You chose ${humanChoice}, Computer chose ${computerChoice}.`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer is the overall winner, but don't feel bad, it was due to randomness!");
    } else {
        console.log("The game is a tie overall!");
    }
//}
// Start the game
//game();
// For now we are done. Like The Odin Project suggests, we will return to this project later.