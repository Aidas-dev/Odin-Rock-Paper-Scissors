console.log("Hello, World!");

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

function getHumanChoice() {

    const userInput = prompt("Please enter your choice: rock, paper, or scissors");
    
    return userInput.toLowerCase();
}

// Testing the function
console.log("Human choice:", getHumanChoice());
