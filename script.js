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
// Step 4: Declare the player score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round (UI-driven)
const WINNING_SCORE = 5;

function decideRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) return 'tie';

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'player';
    }

    return 'computer';
}

function playRound(playerSelection) {
    if (!playerSelection) return;

    const computerSelection = getComputerChoice();
    const outcome = decideRound(playerSelection, computerSelection);

    if (outcome === 'tie') {
        showResult(`You chose ${playerSelection}, computer chose ${computerSelection}. It's a tie!`);
    } else if (outcome === 'player') {
        humanScore++;
        showResult(`You chose ${playerSelection}, computer chose ${computerSelection}. You win this round!`);
    } else {
        computerScore++;
        showResult(`You chose ${playerSelection}, computer chose ${computerSelection}. You lose this round.`);
    }

    updateScoreboard();

    if (humanScore >= WINNING_SCORE || computerScore >= WINNING_SCORE) {
        const finalMessage = humanScore > computerScore
            ? `Congratulations — you reached ${WINNING_SCORE} points and won the game!`
            : `Game over — the computer reached ${WINNING_SCORE} points and won. PS: this is all random.`;
        showResult(finalMessage);
        setButtonsEnabled(false);
    }
}

// UI helper functions
function updateScoreboard() {
    const el = document.getElementById('scoreboard');
    if (el) el.textContent = `You: ${humanScore} - Computer: ${computerScore}`;
}

function showResult(message) {
    const el = document.getElementById('result');
    if (el) el.textContent = message;
    console.log(message);
}

function setButtonsEnabled(enabled) {
    ['rock', 'paper', 'scissors'].forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.disabled = !enabled;
            if (!enabled) btn.classList.add('disabled'); else btn.classList.remove('disabled');
        }
    });
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScoreboard();
    showResult('Game reset. Make your move!');
    setButtonsEnabled(true);
}

// Event listeners for buttons
document.addEventListener('DOMContentLoaded', () => {
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const reset = document.getElementById('reset');

    if (rock) rock.addEventListener('click', () => playRound('rock'));
    if (paper) paper.addEventListener('click', () => playRound('paper'));
    if (scissors) scissors.addEventListener('click', () => playRound('scissors'));
    if (reset) reset.addEventListener('click', resetGame);

    // initial UI
    updateScoreboard();
    showResult('Time to act! First to 5 wins.');
});