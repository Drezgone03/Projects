'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

//funkcija koju ubacujemo u kod na 5 mesta, isto se moze uraditi za sve druge (number, score...)
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input.
    if (!guess) {
        displayMessage('No number');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('Corect Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // New highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // When guess is wrong // skracen kod za (to high i to low)
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'To High' : 'To Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Game Over!');
            document.querySelector('.score').textContent = 0;
        }
    }
});
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});
*/

///////////////////////////////////////////////////////////
// Second Version of the game, numbers 1-20, 5 attempts//
////////////////////////////////////////////////////////

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Start Guessing...';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '25rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      if (guess > 20 || guess < 0) {
        document.querySelector('.message').textContent =
          ' You must enter a number between 1 and 20';
      }
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor = 'darkRed';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//////////////////////////////////////////////////////
// Same example as above but we only use functions //
////////////////////////////////////////////////////

// ISTI KOD KAO GORE SAMO SU KORISCENE FUNKCIJE ZA SVE

/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayValue = function (value) {
  document.querySelector('.guess').value = value;
};

const displayNumberStyle = function (NumberStyle) {
  document.querySelector('.number').style.width = NumberStyle;
};

const bodyStyle = function (bodyStyle) {
  document.querySelector('body').style.backgroundColor = bodyStyle;
};

const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input.
  if (!guess) {
    displayMessage('No number');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Corect Number!');
    displayNumber(secretNumber);
    bodyStyle('#60b347');
    displayNumberStyle('30rem');

    // New highscore
    if (score > highscore) {
      highscore = score;
      displayHighscore(highscore);
    }

    // When guess is wrong // skracen kod za (to high i to low)
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'To High' : 'To Low');

      score--;
      displayScore(score);
    } else {
      displayMessage('Game Over!');
      displayScore('0');
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  displayValue('');
  bodyStyle('#222');
  displayNumberStyle('15rem');
});
*/
