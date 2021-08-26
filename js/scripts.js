//Business Logic

function roll() {
  const min = Math.ceil(1);
  const max = Math.floor(7);
  return Math.floor(Math.random() * (max-min) + min);
}

function Player() {
  this.tempScore = 0;
  this.totalScore = 0;
  this.turn = 0;
  this.rolls = 0;
};

Player.prototype.play = function() {
  const playerRoll = roll();
  if (playerRoll === 1) {
    this.tempScore = 0;
    this.hold();
    alert("Oops, you rolled a one!");
  } else {
    this.tempScore += playerRoll;
    this.rolls += 1;
  }
  return playerRoll;
}

Player.prototype.winner = function() {
  if (this.totalScore >= 100) {
    alert("Winner!")
  }
}

Player.prototype.hold = function() {
  this.totalScore += this.tempScore
  this.tempScore = 0;
  this.turn += 1;
  this.rolls = 0;
  this.winner();
}

//UI Logic
$(document).ready(function() {
  $("button#start").click(function(event) {
    event.preventDefault();
    let player1 = new Player();
    let player2 = new Player();
    

    $("button#roll").click(function(event) {
      event.preventDefault();
      let diceRoll = player1.play();
      $("#totalRolls").text(diceRoll);
      $("#tempScore").text(player1.tempScore);
    })

    $("button#roll-2").click(function(event) {
      event.preventDefault();
      let diceRoll = player2.play();
      $("#totalRolls-2").text(diceRoll);
      $("#tempScore-2").text(player2.tempScore);
    })

    $("button#hold").click(function(event) {
      event.preventDefault();
      player1.hold();
      $("#finalScore").text(player1.totalScore);
      $("#player1-controls").hide();
      $("#player2-controls").show();
    })

    $("button#hold-2").click(function(event) {
      event.preventDefault();
      player2.hold();
      $("#finalScore-2").text(player2.totalScore);
    })
  })
});
