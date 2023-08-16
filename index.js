function getComputerChoice() {
    const choices= ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    

    const winnerPlayer = 'You Won this Round!'
    const winnerComputer = 'You Lost this Round!'
    const noWinner = 'Tie, go again!'
    var playerSelection = getPlayerChoice();
    var computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        return noWinner;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerChoice === 'paper')
    ) {
        return winnerPlayer;
    } else {
        return winnerComputer;
    }
}
 
function game() {
  let playerScore = 0;
  let computerScore = 0;

  while(playerScore < 5 && computerScore < 5) {
    const playerChoice= getPlayerChoice();
    const computerChoice= getComputerChoice();

    const roundResult = playRound(playerChoice, computerChoice);

    if (roundResult === 'You Won this Round!'){ 
        playerScore++;
    } else if (roundResult === 'You Lost this Round!') {
        computerScore++;
    }

    console.log(roundResult);
    console.log ('Player: ' + playerScore + ' | ' + 'Computer: ' + computerScore);

  }
    if (playerScore === 5) {
        console.log('You won! :)');}
        else {console.log('You lost! :(')}

    }

function getPlayerChoice() {
    const playerInput = (prompt("Type in your choice from the following options: rock, paper, scissors").toLowerCase());
   
    if (playerInput === 'rock' || playerInput === 'paper' || playerInput === 'scissors') {
        return playerInput;
    } else {
        alert('Not a valid choice, please choose between rock, paper, or scissors!');
        return getPlayerChoice();
    }
}