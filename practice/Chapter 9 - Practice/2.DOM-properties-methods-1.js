//
//

const newH5 = document.createElement('h5');
const newH6 = document.createElement('h6');

console.log(newH5, newH6);

newH5.innerText = 'Cats';
newH6.innerText = 'Birds';

const mainHeading = document.querySelector('h1');
mainHeading.prepend(newH5, newH6);

// const list = document.querySelector('ul');
// const newItem = document.createElement('li');

// newItem.innerText = 'Bozo Boy';
// list.appendChild(newItem);

// const firstItem = document.querySelector('ul li:first-child');

// const newItem2 = document.createElement('li');
// newItem2.textContent = 'First Item';

// list.insertBefore(newItem2, firstItem);
