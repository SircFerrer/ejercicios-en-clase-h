'use strict';

const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true
  },
  {
    name: 'Comprar pilas',
    completed: true
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

const ulElement = document.querySelector('.js-list');

function paintTasks() {
  let className;
  let checked;
  let htmlCode = '';
  for (let i = 0; i < tasks.length; i += 1) {
    if (tasks[i].completed) {
      className = 'through';
      checked = 'checked';
    } else {
      className = '';
      checked = '';
    }
    htmlCode += `<li class="${className}">`;
    htmlCode += `<input type="checkbox" ${checked} class="js-checkbox" value="${i}" />`;
    htmlCode += `${tasks[i].name}</li>`;
  }
  ulElement.innerHTML = htmlCode;
}

function handleCheckbox(ev) {
  const index = parseInt(ev.target.value);
  tasks[index].completed = !tasks[index].completed;
  udpateAll();
}

function listenCheckboxEvents() {
  const checkboxElements = document.querySelectorAll('.js-checkbox');
  for (let i = 0; i < checkboxElements.length; i += 1) {
    checkboxElements[i].addEventListener('change', handleCheckbox);
  }
}

// reset

const resetElement = document.querySelector('.js-reset');

function reset(ev) {
  ev.preventDefault();
  for (const task of tasks) {
    task.completed = false;
  }
  udpateAll();
}

resetElement.addEventListener('click', reset);

// start app

function udpateAll() {
  paintTasks();
  listenCheckboxEvents();
}

udpateAll();
