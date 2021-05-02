//
//

const progress = document.querySelector('.progress-done');

const reloadBtn = document.querySelector('button');

setTimeout(() => {
  progress.style.width = progress.getAttribute('data-done') + '%';
  progress.style.opacity = 1;
}, 500);

reloadBtn.addEventListener('click', () => {
  location.reload();
});
