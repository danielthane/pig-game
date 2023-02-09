'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceImage = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//Setting Initial conditions
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//Starting Conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceImage.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Dice Roll Logic
btnRoll.addEventListener('click', () => {
  // Genertaes a new random roll
  if (playing) {
    const newRandomRoll = Math.trunc(Math.random() * 6) + 1;

    //Shows the dice
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${newRandomRoll}.png`;

    // 1 Rolled Check
    if (newRandomRoll !== 1) {
      currentScore += newRandomRoll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// hold Score Logic
btnHold.addEventListener('click', () => {
  // Add current score to the score of active player
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // Check if score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceImage.classList.add('hidden');
    }
    // Finish
    else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', () => {
  init();
});
