// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>;

const ourBoxes = document.querySelector("#boxes");
const input = document.querySelector("input");
const createBtn = document.querySelector('button[data-action="render"]');
const clearBtn = document.querySelector('button[data-action="destroy"]');
let amount = 0;
// = input.value;

const onInputСhange = function () {
  return (amount = input.value);
};
console.log(amount);

input.addEventListener("input", onInputСhange);

console.log(input.value);
console.log(input);
const createBoxes = function (amount) {
  console.log("Создаю магию");
  // for (let i = 0; i <= amount; i++) {
  //   ourBoxes.
  // }
  const newCreatedBoxes = amount.forEach((element) => {
    return document.createElement("div");
  });
  console.log(newCreatedBoxes);
};

const destroyBoxes = function () {
  console.log("Удаляю магию");
};

createBtn.addEventListener("click", createBoxes);
console.log(input.value);
clearBtn.addEventListener("click", destroyBoxes);
