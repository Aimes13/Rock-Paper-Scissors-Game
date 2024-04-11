function computerPlay() {
  const symbol = ['rock', 'paper', 'scissors'];
  return symbol[Math.floor(Math.random() * symbol.length)];
};

//console.log(computerPlay());
let userName = 'Stranger';

function userPlay() {
    userName = prompt('Hello there human! Please enter your name:');
    alert(`${userName}, welcome to my wacky ROCK PAPER SCISSORS Game!!!`);
    alert(`The instructions are very clear: you can only enter 3 choices: 'rock', 'scissors' or 'paper'!!!!`);
    alert('If you try to enter anything else, you WILL NOT be able to play the game silly!');
    alert(`I hope that is simple enough for you ${userName}. Now, let's see if you can beat me human!!!`);
    alert('Get ready to be destroyed!!!!');
    
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
    console.log( `You chose ${playerSelection} and I chose ${computerSelection} so... its a tie!`);
    console.log(`Your current score is: ${playerScore}. My current score is: ${computerScore}.`);
    winner = null;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
      console.log( `You chose ${playerSelection} and I chose ${computerSelection} so... congratulations human, you beat me.`);
      playerScore++;
      console.log(`You have won ${playerScore} game(s).`);
      console.log(`Your current score is: ${playerScore}. My current score is: ${computerScore}.`);
      winner = true;
  } else {
    console.log( `You chose ${playerSelection} and I chose ${computerSelection} so... try again!`);
    computerScore++;
    console.log(`Your current score is: ${playerScore}. My current score is: ${computerScore}.`);
    winner = false;
  };
  return winner;
};

let playerSelection = userPlay();
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;
//console.log(playRound(playerSelection, computerSelection));

function game() {
  console.log(`Round 1:`);
  for (let i = 0; i < 5; i++) {
    for (let j = i+1; j < 6; j++) { //Need to fix this stopping condition
      round = playRound(playerSelection, computerSelection);
      if (round === true) {
        alert(`Wow, you beat me ${userName}... Click 'OK' for the next round.`);
        console.log(`Round ${j+1}:`);
        playerSelection = prompt(`New Round`);
        round;
      } else {
          alert(`Too bad human! Looks like you lost this round hahahahah! Click 'OK' for the next round.`);
          console.log(`Try again: Round ${j+1}`);
          playerSelection = prompt(`New Round`);
          round;
      }
    } 
  }
} 

game();