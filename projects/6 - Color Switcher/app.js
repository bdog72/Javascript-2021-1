//
//

const body = document.body;
const switchBtn = document.querySelector('.switch');

const switchPara = document.querySelector('.color');

switchBtn.addEventListener('click', function () {
  let color1 = getRandomColor();
  let color2 = getRandomColor();
  let color3 = getRandomColor();

  const colorString = `rgb(${color1},${color2},${color3})`;

  body.style.backgroundColor = colorString;
  switchPara.inneText = colorString;
});

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}
