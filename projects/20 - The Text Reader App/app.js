//
//

const textDisplay = document.querySelector('#text');
const speedBtn = document.querySelector('#speed');

const readBtn = document.querySelector('.read');
const pauseBtn = document.querySelector('.pause');

const stopBtn = document.querySelector('.stop');

let currentChar;

// Readding functionality
readBtn.addEventListener('click', function () {
  readText(textDisplay.value);
});

// Pausing functionality
pauseBtn.addEventListener('click', pauseText);

// Stoping functionality
stopBtn.addEventListener('click', stopText);

// Speed Input functionality
speedBtn.addEventListener('input', function () {
  stopText();
  readText(utterance.text.substr(currentChar));
});

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener('end', function () {
  textDisplay.disabled = false;
});

utterance.addEventListener('boundary', function (e) {
  currentChar = e.charIndex;
});

// Read text function
function readText(testText) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume();
  }

  // console.log(utterance);
  utterance.text = testText;
  utterance.rate = speedBtn.value || 1;
  textDisplay.disabled = true;
  speechSynthesis.speak(utterance);
}

// Paus Text function
function pauseText() {
  if (speechSynthesis.speaking) {
    speechSynthesis.pause();
  }
}

// Stop text function
function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();
}
