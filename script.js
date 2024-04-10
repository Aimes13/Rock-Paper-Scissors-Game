const computerPlay = {
  symbol: ['Rock', 'Paper', 'Scissors'],
  computerChoice () {
    return this.symbol[Math.floor(Math.random() * this.symbol.length)];
  }
};

console.log(computerPlay.computerChoice());
