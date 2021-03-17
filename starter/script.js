'use strict';

let btnCheck = document.querySelector('.check');
let btnAgain = document.querySelector('.again');
let messageInstruction = document.querySelector('.message');
let unknowNumber = document.querySelector('.number');
let highscore = document.querySelector('.highscore');
let randomeNumber = Math.trunc(Math.random() * 20 + 1);
let maxValueScore;

let countCount = function (n) {
  return (n += -1);
};

btnCheck.addEventListener('click', function () {
  let scoreValue = Number(document.querySelector('.score').textContent);
  let guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    messageInstruction.textContent = 'pls put a number';
  } else if (guessNumber > randomeNumber) {
    messageInstruction.textContent = 'to high';
    document.querySelector('.score').textContent = countCount(scoreValue);
  } else if (guessNumber < randomeNumber) {
    messageInstruction.textContent = 'to low';
    document.querySelector('.score').textContent = countCount(scoreValue);
  } else {
    messageInstruction.textContent = 'You did it!!!!!!';
    unknowNumber.textContent = randomeNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (maxValueScore > countCount(scoreValue)) {
      highscore.textContent = maxValueScore;
    } else {
      maxValueScore = highscore.textContent = countCount(scoreValue) + 1;
    }
  }
});

btnAgain.addEventListener('click', function () {
  messageInstruction.textContent = 'Start guessing...';
  unknowNumber.textContent = '?';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  randomeNumber = Math.trunc(Math.random() * 20 + 1);
});
