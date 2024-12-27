let humanScore = 0, computerScore = 0, rounds = 0;
const choiceButtons = document.querySelectorAll('.choice');
const hScore = document.querySelector('.human-score');
const cScore = document.querySelector('.computer-score');

const replay = document.querySelector('.replay');
replay.addEventListener('click', () => {
    location.reload();
});

choiceButtons.forEach(button => {
    button.addEventListener('click', () => playRound(button));
});

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if (choice == 0) return 'rock';
    else if (choice == 1) return 'paper';
    else return 'scissors';
}

function playRound(btn) {
    let computerChoice = getComputerChoice();
    let humanChoice = btn.innerHTML.toLowerCase();
    const result = document.querySelector('.result');

    if (rounds <= 5) {
        if (computerChoice == 'rock' && humanChoice == 'scissors' ||
            computerChoice == 'paper' && humanChoice == 'rock' ||
            computerChoice == 'scissors' && humanChoice == 'paper'
        ) {
            result.innerText = `You lost this round! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
            cScore.innerText = `Computer Score: ${computerScore}`;
        } else if (computerChoice == humanChoice) {
            result.innerText = "It's a draw!";
        }
        else {
            result.innerText = `You win this round! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
            hScore.innerText = `Human Score: ${humanScore}`;
        }
        rounds++;
    } else {
        if (humanScore > computerScore) {
            result.innerText = "You won the game!"
        } else if (humanScore < computerScore) {
            result.innerText = "You lost the game!"
        } else {
            result.innerText = "This game is a draw!"
        }

        replay.style.visibility = "visible";
    }
}

