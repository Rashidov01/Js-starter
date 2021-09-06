var elJsPaper = document.querySelector('.js-paper');
var elJsCut = document.querySelector('.js-cut');
var elJsRock = document.querySelector('.js-rock');
var elMyScore = document.querySelector('.my-score');
var elBotScore = document.querySelector('.bot-score');
var elOutput = document.querySelector('.output');

var btnNum = 3;
var scoreUser = 0;
var compScore = 0;

// 1-qogoz; 2-qaychi; 3-tosh;

elJsPaper.addEventListener('click', function (e) {
  randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  // elJsPaper = 1;
  if (randomNum == 1) {
    elOutput.textContent = 'You win';
    elMyScore.textContent = ++scoreUser;
  } else if (randomNum == 2) {
    elOutput.textContent = 'you draw';
  } else if (randomNum == 3) {
    elOutput.textContent = 'you lose';
    elBotScore.textContent = ++compScore;
  }
});

elJsCut.addEventListener('click', function (e) {
  randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  // elJsCut = 2;
  if (randomNum == 1) {
    elOutput.textContent = 'You win';
    elMyScore.textContent = ++scoreUser;
  } else if (randomNum == 2) {
    elOutput.textContent = 'you draw';
  } else if (randomNum == 3) {
    elOutput.textContent = 'you lose';
    elBotScore.textContent = ++compScore;
  }
});

elJsRock.addEventListener('click', function (e) {
  randomNum = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  // elJsRock = 3;
  if (randomNum == 1) {
    elOutput.textContent = 'you win';
    elMyScore.textContent = ++scoreUser;
  } else if (randomNum == 2) {
    elOutput.textContent = 'you draw';
  } else if (randomNum == 3) {
    elOutput.textContent = 'you lose';
    elBotScore.textContent = ++compScore;
  }
});