//
//

const reloadBtn = document.querySelector('button');
const progress = document.querySelector('.progress-done');

reloadBtn.addEventListener('click', () => {
  window.location.reload();
});

setTimeout(() => {
  progress.style.width = progress.getAttribute('data-done') + '%';
  progress.style.opacity = 1;
}, 500);
