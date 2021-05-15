//
//

const clearBtn = document.querySelector('.clear');
const toDoList = document.querySelector('#list');

const toDoInput = document.querySelector('#input');
const toDoAddBtn = document.querySelector('.fa-plus-circle');
// -------------------------------------------------------------

// Selecting the icon class Names
const checkBtn = '.fa-check-circle';
const uncheckBtn = '.fa-circle-thin';
const textLineThrough = '.line-through';

// Creating addtodo function
function addToDo(toDo, id, done, trash) {
  const toDoDone = done ? checkBtn : uncheckBtn;
  const toDoLine = done ? textLineThrough : '';
}
