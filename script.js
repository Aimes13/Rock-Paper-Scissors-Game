function computerPlay() {
  const symbol = ['Rock', 'Paper', 'Scissors'];
  return symbol[Math.floor(Math.random() * symbol.length)];
};

console.log(computerPlay());

function playerSelection() {
    let userInput = prompt('Please enter your choice: Rock, Paper or Scissors?');
    const userChoice = userInput.toLowerCase();
  
    switch (userChoice) {
      case 'rock':
        return `You have chosen ${userChoice}`;
        break;
      case 'paper':
        return `You have chosen ${userChoice}`;
        break;
      case 'scissors':
        return `You have chosen ${userChoice}`;
        break;
      default:
        return this.playerSelection();
    }
  };

console.log(playerSelection());
/*
function playRound(playerSelection, computerSelection) {

};

const playRound = 'Rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection)); */
