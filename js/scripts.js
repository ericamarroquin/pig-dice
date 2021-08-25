//Business Logic

function roll() {
  const min = Math.ceil(0);
  const max = Math.floor(7);
  return Math.floor(Math.random() * (max-min) + min);
}

function play() {
  const playerRoll = roll();
  if (playerRoll === 1) {
    return 0;
  } else {
    return playerRoll;
  }
}

//UI Logic