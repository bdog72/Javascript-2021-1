//
//

const blockEl = document.querySelector('#block');
const verticalPosition = document.querySelector('#position-y');

const horizontalPosition = document.querySelector('#position-x');
const blockSize = document.querySelector('#size');

const shapeSelector = document.querySelector('#shape-select');
const okBtn = document.querySelector('#ok-btn');

const rgbaR = document.querySelector('#rgba-r');
const rgbaG = document.querySelector('#rgba-g');

const rgbaB = document.querySelector('#rgba-b');
const rgbaA = document.querySelector('#rgba-a');

const rgbaContainer = document.querySelector('.rgba-container');

let rgbaInputs = rgbaContainer.querySelectorAll('input');

// Vertical Position Changer
verticalPosition.addEventListener('change', function () {
  blockEl.style.top = verticalPosition.value + 'px';
});

// Horizontal Position Changer
horizontalPosition.addEventListener('change', function () {
  blockEl.style.left = `${horizontalPosition.value}px`;
});

// Size Changer
blockSize.addEventListener('change', function () {
  blockEl.style.transform = 'scale(' + blockSize.value + ')';
});

// Shape Changer
okBtn.addEventListener('click', function () {
  let shapeOption = shapeSelector.value;
  if (shapeOption === '1') {
    blockEl.style.borderRadius = '0';
  } else if (shapeOption === '2') {
    blockEl.style.borderRadius = '50%';
  }
});

// Background Color Changer
for (let i = 0; i < rgbaInputs.length; i++) {
  rgbaInputs[i].addEventListener('change', function () {
    blockEl.style.backgroundColor = `rgba(${rgbaR.value},${rgbaG.value},${rgbaB.value},${rgbaA.value})`;
    // blockEl.style.backgroundColor =
    //   'rgba(' +
    //   rgbaR.value +
    //   ',' +
    //   rgbaG.value +
    //   ',' +
    //   rgbaB.value +
    //   ',' +
    //   rgbaA.value +
    //   ')';
  });
}
