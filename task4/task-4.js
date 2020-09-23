// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div >

let counter = 0;
// const buttons = document.querySelector("button[data-action="increment"]");
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const counterWindow = document.querySelector("#value");

// console.log(buttonIncrement);

console.log(counterWindow);

const increment = function () {
  counter += 1;
  counterWindow.textContent = counter;
};

const decrement = function () {
  counter -= 1;
  counterWindow.textContent = counter;
};

buttonIncrement.addEventListener("click", increment);

buttonDecrement.addEventListener("click", decrement);

console.log(counter);
