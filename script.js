'use strict';

//Selecting Elements
const diceImage = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

//Setting Initila conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceImage.classList.add('hidden');

let currentScore = 0;

btnRoll.addEventListener('click', () => {
  diceImage.classList.remove('hidden');
  const newRandomRoll = Math.trunc(Math.random() * 6) + 1;
  diceImage.src = `dice-${newRandomRoll}.png`;

  if (newRandomRoll !== 1) {
    currentScore += newRandomRoll;
    current0El.textContent = currentScore;
  } else {
  }
});
