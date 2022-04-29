// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates the volume of an oblique cylinder given its radius, height and lateral length
 */
function Guess () {
  const MAX = 6;
  const MIN = 1;
 
  // initialize variables
let randomNumber = Math.floor((Math.random() * MAX) + MIN);

// get user input
let userGuess = parseInt(document.getElementById('user-guess').value)

  // if number is correct display "You got it!"
if (userGuess == randomNumber) {
document.getElementById("message").innerHTML = "Correct the number was   " + randomNumber + "!"
}
// otherwise display "Your number was incorrect."
else {
document.getElementById("message").innerHTML = "Your number was incorrect. It was " + randomNumber + "."
}
} 