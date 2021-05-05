//
//

const keys = document.querySelectorAll('.key');

const blackKeys = document.querySelectorAll('.key.black');
const whiteKeys = document.querySelectorAll('.key.white');

const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

keys.forEach(function (key) {
  key.addEventListener('click', () => {
    playNote(key);
  });
});

function playNote(key) {
  const audioNote = document.getElementById(key.dataset.note);

  audioNote.currentTime = 0;
  audioNote.play();

  key.classList.add('active');

  audioNote.addEventListener('ended', function () {
    key.classList.remove('active');
  });
}

document.addEventListener('keydown', function (e) {
  let key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) {
    playNote(whiteKeys[whiteKeyIndex]);
  }
  if (blackKeyIndex > -1) {
    playNote(blackKeys[blackKeyIndex]);
  }
});
