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
