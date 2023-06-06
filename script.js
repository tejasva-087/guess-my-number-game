// ========= Functions =========
// =============================
function score(x) {
  scoreEl.textContent = x;
}

function checkNumber(inputVar, generatedVar) {
  const result = inputVar > generatedVar ? '📈 Too high' : '📉 Too low';
  messageEl.textContent = result;
  score_--;
  score(score_);
}

// ======== Variables ==========
// =============================

const randomNumber = Math.floor(Math.random() * 20) + 1;
let score_ = 20;
let highScore = 0;
let playing = true;

// ======= Dom variables =======
// =============================

// message display
const messageEl = document.querySelector('.message');

// score
const scoreEl = document.getElementById('score');
const highScoreEl = document.getElementById('high-score');

// buttons
const checkButtonEl = document.getElementById('check');
const againButtonEl = document.getElementById('again');

// input field
const inputFieldEl = document.querySelector('.input-field');

// number display
const numberDisplay = document.querySelector('.question-mark');

// check button functioning

checkButtonEl.addEventListener('click', function () {
  // 1) CHECKING IF THE PLAYERS ARE PLAYING OR NOT
  if (playing) {
    if (inputFieldEl.value.length === 0) {
      // I) CHECKING FOR empty inputs
      messageEl.textContent = '⛔️ No number';
    } else {
      // II) DISPLAYING THE NUMBER
      numberDisplay.textContent = inputFieldEl.value;
      // III) CHECKING THE NUMBER
      if (
        Number(inputFieldEl.value > randomNumber) ||
        Number(inputFieldEl.value) < randomNumber
      ) {
        checkNumber(inputFieldEl.value, randomNumber);
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
  document.querySelector('body').style.backgroundColor = '#212529';
  numberDisplay.textContent = '?';
  inputFieldEl.value = '';
});
