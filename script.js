"use strict";

// Selecting Elements
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Rolling Dice functionality
btnRoll.addEventListener("click", function () {
  //1.Generate dice rolll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2. Display the dice
  diceEl.classList.remove("hidden");
  diceEl.src = `./images/dice-${dice}.png`;

  //3. Checke for rolled 1: If true, switch to next player
});
