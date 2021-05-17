//
//

const clearBtn = document.querySelector('.clear');
const toDoList = document.querySelector('#list');

const toDoInput = document.querySelector('#input');
const toDoAddBtn = document.querySelector('.fa-plus-circle');
// -------------------------------------------------------------

// Selecting the icon class Names
const checkBtn = 'fa-check-circle';
const uncheckBtn = 'fa-circle-thin';
const textLineThrough = 'line-through';

// Todo Container
// let toDoContainer = [];
// let id = 0;

let toDoContainer, id;

let toDoData = localStorage.getItem('to-do-item');
if (toDoData) {
  toDoContainer = JSON.parse(toDoData);
  id = toDoContainer.length;
  loadToDoContainer(toDoContainer);
} else {
  toDoContainer = [];
  id = 0;
}

function loadToDoContainer(array) {
  array.forEach((item) => {
    addToDo(item.name, item.id, item.done, item.trash);
  });
}

// Clear the local storage
clearBtn.addEventListener('click', function () {
  localStorage.clear();
  location.reload();
});

// Creating addtodo function
function addToDo(toDo, id, done, trash) {
  if (trash) return;

  const toDoDone = done ? checkBtn : uncheckBtn;
  const toDoLine = done ? textLineThrough : '';

  const item = `
    <li class="item">
      <i class="fa ${toDoDone} complete" status="complete" id="${id}"></i>
      <p class="text ${toDoLine}">${toDo}</p>
      <i class="fa fa-trash-o delete" status="delete" id="${id}"></i>
    </li>
  `;
  toDoList.insertAdjacentHTML('beforeend', item);
}

// Adding a todo to the list when enter key is pressed
document.addEventListener('keyup', displayTodo);

// Adding a todo to the list when the plus icon is clicked
toDoAddBtn.addEventListener('click', displayTodo);

// display todo function
function displayTodo(event) {
  if (
    event.keyCode === 13 ||
    event.target.classList.value === 'fa fa-plus-circle'
  ) {
    const toDo = input.value;
    // Checking whether the input field is not empty
    if (toDo) {
      addToDo(toDo, id, false, false);
      toDoContainer.push({
        name: toDo,
        id: id,
        done: false,
        trash: false,
      });

      // Persisting to local storage || Updating local storage
      localStorage.setItem('to-do-item', JSON.stringify(toDoContainer));

      id++;
    }
    input.value = '';
  }
}

// When a todo is Completed
function completeTodo(toDoItem) {
  toDoItem.classList.toggle(checkBtn);
  toDoItem.classList.toggle(uncheckBtn);
  toDoItem.parentNode.querySelector('.text').classList.toggle(textLineThrough);

  toDoContainer[toDoItem.id].done = toDoContainer[toDoItem.id].done
    ? false
    : true;
}

// When a todo is removed
function removeToDo(toDoItem) {
  toDoItem.parentNode.parentNode.removeChild(toDoItem.parentNode);
  toDoContainer[toDoItem.id].trash = true;
}

// Targeting the dynamically created todo items
toDoList.addEventListener('click', function (e) {
  if (
    e.path[0].localName === 'p' ||
    e.path[0].localName === 'li' ||
    e.path[0].localName === 'ul'
  )
    return;

  const toDoItem = e.target;
  const toDoStatus = toDoItem.attributes.status.value;

  if (toDoStatus === 'complete') {
    completeTodo(toDoItem);
  } else if (toDoStatus === 'delete') {
    removeToDo(toDoItem);
  }

  localStorage.setItem('to-do-item', JSON.stringify(toDoContainer));
});
