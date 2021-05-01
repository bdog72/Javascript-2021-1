//
//
//
const body = document.body;
const switchBtn = document.querySelector('.switch');

const switchPara = document.querySelector('.color');

switchBtn.addEventListener('click', function () {
  let color1 = getRandomNumber();
  let color2 = getRandomNumber();
  let color3 = getRandomNumber();

  const colorString = `rgb(${color1},${color2},${color3})`;

  switchPara.innerText = colorString;
  body.style.backgroundColor = colorString;
});

function getRandomNumber() {
  return Math.floor(Math.random() * 256);
}
