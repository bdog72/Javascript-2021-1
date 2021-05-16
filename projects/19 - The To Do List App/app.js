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
let toDoContainer = [];
let id = 0;

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
      id++;
    }
    input.value = '';
  }
}

// Targeting the dynamically created todo items
toDoList.addEventListener('click', function (e) {
  if (
    e.path[0].localName === 'p' ||
    e.path[0].localName === 'li' ||
    e.path[0].localName === 'ul'
  )
    return;
  console.log(123);

  const toDoItem = e.target;
  const toDoStatus = toDoItem.attributes.status.value;

  // if (toDoStatus === 'complete') {
  //   completeTodo(toDoItem);
  // } else if (toDoStatus === 'delete') {
  //   removeToDo(toDoItem);
  // }
});
