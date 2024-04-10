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
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    winner = true;
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    winner = true;
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    winner = true;
  } else {
    winner = false;
  };

  //console.log(winner);
  if (winner) {
    return `You chose ${playerSelection} and I chose ${computerSelection} so... congratulations human, you beat me.`;
  } else {
    return `You chose ${playerSelection} and I chose ${computerSelection} so... try again!`;
  }
};

const playerSelection = userPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
