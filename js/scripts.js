//Business Logic

function roll() {
  const min = Math.ceil(0);
  const max = Math.floor(7);
  return Math.floor(Math.random() * (max-min) + min);
}

function Player() {
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = 0;
};

Player.prototype.play = function() {
  const playerRoll = roll();
  if (playerRoll === 1) {
    this.tempScore = 0;
  }
  this.tempScore = playerRoll;
}

Player.prototype.hold = function() {
  this.totalScore += this.tempScore
  this.tempScore = 0;
  this.turn += 1;
}

//UI Logic
$(document).ready(function() {
  $("button#start").click(function(event) {
    event.preventDefault();
    let player1 = new Player();
    console.log(player1);
  $("button#roll").click(function(event) {
    event.preventDefault();
    player1.play();
    console.log(player1);
  $("button#hold").click(function(event) {
    event.preventDefault();
    player1.hold();
    console.log(player1);
  })
  })
})
});
