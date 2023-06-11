let scores, roundScore, activePlayer, gamePlaying;
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
  document.getElementById("name--0").textContent = "Player 1";
  document.getElementById("name--1").textContent = "Player 2";
}
init();
// Events Occuers:-
let lastDice;
document.querySelector(".btn--roll").addEventListener("click", function () {
  if (gamePlaying) {
    // Random number
    let dice = Math.floor(Math.random() * 6) + 1;
    //    Display the Result
    let diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "Img/dice-" + dice + ".png";
    // Update the round score If the rolled number was not a 1
    if (dice === 6 && lastDice === 6) {
      scores[activePlayer] = 0;
      document.querySelector("#score--" + activePlayer).textContent = "0";
      nextPlayer();
    } else if (dice !== 1) {
      roundScore += dice;
      document.querySelector("#current--" + activePlayer).textContent =
        roundScore;
    } else {
      nextPlayer();
    }
    lastDice = dice;
    
  }
});
document.querySelector(".btn--hold").addEventListener("click", function () {
  if (gamePlaying) {
    // Add current and Global Score
    scores[activePlayer] += roundScore;
    document.querySelector("#score--" + activePlayer).textContent =
      scores[activePlayer];

    // Check if player won the
    let winningScore;
    let input = document.querySelector(".final-score").value;
    if (input) {
      winningScore = input;
    } else {
      winningScore = 100;
    }

    if (scores[activePlayer] >= winningScore) {
      document.querySelector("#name--" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      document
        .querySelector(".player--" + activePlayer)
        .classList.remove("player--active");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});
function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // if (activePlayer === 0){
  //     activePlayer = 1
  // }
  // else{
  //     activePlayer = 0
  // }
  roundScore = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
  document.querySelector(".dice").style.display = "none";
  // document.querySelector('.player--0').classList.remove('player--active');
  // document.querySelector('.player--1').classList.('player--active');
  // document.querySelector('.player--0').classList.remove('player--active');
  // document.querySelector('.player--1').classList.add('player--active');

}
document.querySelector(".btn--new").addEventListener("click", init);

// First Generate Dice Numbers
// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current-' + activePlayer).textContent = dice;
// let x =
// document.querySelector('#score-0').textContent;
