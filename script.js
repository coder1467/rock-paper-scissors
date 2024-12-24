function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    if (choice == 0) return 'rock';
    else if (choice == 1) return 'paper';
    else return 'scissors';
}

function getHumanChoice() {
    let choice;
    do {
        choice = prompt('Choose Rock, Paper or Scissors: ').toLowerCase();
    } while (choice != 'rock' && 
            choice != 'paper' &&
            choice != 'scissors');
    return choice
}

function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (computerChoice == 'rock' && humanChoice == 'scissors' || 
        computerChoice == 'paper' && humanChoice == 'rock' ||
        computerChoice == 'scissors' && humanChoice == 'paper'
    ) {
        console.log('You Lose! ' + computerChoice + ' beats ' + humanChoice);
        computerScore++;
    } else if (computerChoice == humanChoice) {
        console.log('It\'s a draw!');
    }
    else {
        console.log('You Win! ' + humanChoice + ' beats ' + computerChoice);
        humanScore++;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let n = 5;

    while (n > 0) {
        playRound();
        n--;
    }
}

playGame();