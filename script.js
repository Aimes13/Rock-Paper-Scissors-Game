function computerPlay() {
  const symbol = ['rock', 'paper', 'scissors'];
  return symbol[Math.floor(Math.random() * symbol.length)];
};

//console.log(computerPlay());

function userPlay() {
    let userInput = prompt('Please enter your choice: Rock, Paper or Scissors?');
    const userChoice = userInput.toLowerCase();
  
    switch (userChoice) {
      case 'rock':
        return `${userChoice}`;
        break;
      case 'paper':
        return `${userChoice}`;
        break;
      case 'scissors':
        return `${userChoice}`;
        break;
      default:
        return this.userPlay();
    }
  };

//console.log(computerPlay(),userPlay());

function playRound(playerSelection, computerSelection) {
  let winner;
  if (playerSelection === computerSelection) {
    winner = null;
    console.log( `You chose ${playerSelection} and I chose ${computerSelection} so... its a tie!`);
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    winner = true;
    console.log( `You chose ${playerSelection} and I chose ${computerSelection} so... congratulations human, you beat me.`);
  } else {
    winner = false;
    console.log( `You chose ${playerSelection} and I chose ${computerSelection} so... try again!`);
  };
  return winner;
};

let playerSelection = userPlay();
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));


let playerScore = 0;
let computerScore = 0;

function checkWinner() {  
  let round = playRound(playerSelection, computerSelection);
  
  switch (round) {
    case true:
      playerScore++;
      console.log(`You have won ${playerScore} game(s).`);
      console.log(`Your current score is: ${playerScore}. My current score is: ${computerScore}.`);
      break;
  case false:
    computerScore++;
    console.log(`Your current score is: ${playerScore}. My current score is: ${computerScore}.`);
    break;
  default:
    console.log(`Your current score is: ${playerScore}. My current score is: ${computerScore}.`);
  }
};

//checkWinner();
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`Round ${i+1}:`);
    checkWinner();
    playerSelection = prompt(`Welcome to Round: ${i+1}`);
  }
} 

game();