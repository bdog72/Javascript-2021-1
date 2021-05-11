//
//

let list = document.querySelector('.list');
let imgs = Array.from(list.children);

const nextBtn = document.querySelector('.btn-right');
const prevBtn = document.querySelector('.btn-left');

// Getting Images Width
const imgWidth = imgs[0].getBoundingClientRect().width;

// Arranging Images next to each other
function setImgPosition(img, index) {
  img.style.left = imgWidth * index + 'px';
}
imgs.forEach(setImgPosition);

// Move to Img function
function moveToImg(list, currentImg, targetImg) {
  list.style.transform = `transLateX(-${targetImg.style.left})`;
  currentImg.classList.remove('current-img');
  targetImg.classList.add('current-img');
}

// Hide/Show Arrows
const hideShowArrows = function (imgs, prevBtn, nextBtn, targetIndex) {
  if (targetIndex === 0) {
    prevBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');
  } else if (targetIndex === imgs.length - 1) {
    prevBtn.classList.remove('hidden');
    nextBtn.classList.add('hidden');
  } else {
    prevBtn.classList.remove('hidden');
    nextBtn.classList.remove('hidden');
  }
};

// When we click on the right button, we move images to the left
nextBtn.addEventListener('click', function () {
  const currentImg = list.querySelector('.current-img');
  const nextImg = currentImg.nextElementSibling;

  const nextIndex = imgs.findIndex((img) => img === nextImg);

  moveToImg(list, currentImg, nextImg);
  hideShowArrows(imgs, prevBtn, nextBtn, nextIndex);
});

// When we click on the left button, we move images to the right
prevBtn.addEventListener('click', function () {
  const currentImg = list.querySelector('.current-img');
  const prevImg = currentImg.previousElementSibling;

  const prevIndex = imgs.findIndex((img) => img === prevImg);

  moveToImg(list, currentImg, prevImg);
  hideShowArrows(imgs, prevBtn, nextBtn, prevIndex);
});
