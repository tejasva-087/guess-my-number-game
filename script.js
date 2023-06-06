// functions

function score(x) {
  scoreEl.textContent = x;
}

// Random number
// const randomNumber = Math.trunc(Math.random() * 20) + 1;
const randomNumber = 10;
let score_ = 20;
let highScore = 0;
let playing = true;
// DOM VARIABLES

const messageEl = document.querySelector('.message');
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('high-score');

const checkButtonEl = document.getElementById('check');
const againButtonEl = document.getElementById('again');

const inputFieldEl = document.querySelector('.input-field');

const numberDisplay = document.querySelector('.question-mark');

// check button functioning
checkButtonEl.addEventListener('click', function () {
  if (playing) {
    numberDisplay.textContent = inputFieldEl.value;
    if (inputFieldEl.value.length === 0) {
      messageEl.textContent = '⛔️ No number';
    } else {
      if (Number(inputFieldEl.value) > randomNumber) {
        messageEl.textContent = '📈 Too High!!';
        score_--;
        score(score_);
      } else if (Number(inputFieldEl.value) < randomNumber) {
        messageEl.textContent = '📉 Too Low!!';
        score_--;
        score(score_);
      } else {
        messageEl.textContent = '🎉 Correct Number!';
        highScoreEl.textContent = highScore;
        playing = false;
        document.querySelector('body').style.backgroundColor = 'green';
        highScore = score_;
        highScoreEl.textContent = highScore;
      }
    }
    if (highScore < 0) {
      messageEl.textContent = '💥 You lose';
    }
  }
});

// again button functioning
againButtonEl.addEventListener('click', function () {
  playing = true;
  messageEl.textContent = 'Start guessing ...';
  highScoreEl.textContent = highScore;
  score_ = 20;
  scoreEl.textContent = 20;
});
