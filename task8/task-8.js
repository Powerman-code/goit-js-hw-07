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
// var fragment = document.createDocumentFragment();

let createdBoxes = [];

const inputValue = input.value;
console.log(inputValue);
console.dir(input.textContent);

const createBoxes = function (amount) {
  // event.preventDefault;
  console.log("Создаю боксы");
  console.dir(input);
  console.log(input.value);
  for (let i = 0; i <= amount - 1; i++) {
    let dirBox = document.createElement("div");
    dirBox.width = 30 + i * 10 + "px";
    dirBox.height = 30 + i * 10 + "px";
    // console.dir(createdBoxes);
    createdBoxes.push(dirBox);
  }
  ourBoxes.append(...createdBoxes);
  console.dir(createdBoxes);
  console.log(typeof createdBoxes);
};
console.log(ourBoxes);
console.dir(ourBoxes);

const destroyBoxes = function () {
  console.log("Удаляю боксы");
};

createBtn.addEventListener("click", () => createBoxes(input.value));
console.log();
clearBtn.addEventListener("click", destroyBoxes);

// console.log(createBoxes(4));

// хотим вставить в список UL много LI

// делаем вспомогательный DocumentFragment
// var fragment = document.createDocumentFragment();

// for (цикл по li) {
//   fragment.appendChild(list[i]); // вставить каждый LI в DocumentFragment
// }

// ul.appendChild(fragment); // вместо фрагмента вставятся элементы списка

// const createBoxes = function (amount) {
//   // event.preventDefault;
//   console.log("Создаю магию");
//   console.dir(input);
//   console.log(input.value);
//   for (let i = 0; i <= amount - 1; i++) {
//     createdBoxes = document.createElement("div");
//     createdBoxes.width = 30 + "px";
//     createdBoxes.height = 30 + "px";
//     console.dir(createdBoxes);
//   }
// };
