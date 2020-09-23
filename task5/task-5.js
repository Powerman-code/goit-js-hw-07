// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

// inputRef.addEventListener("keypress", inputNameChanger);

const onInputFocus = function () {
  console.log("Инпут получил фокус");
};

const onInputBlur = function () {
  console.log("Инпут потерял фокус");
};

const onInputСhange = function (event) {
  console.log(event.currentTarget.value);
  // spanRef.textContent = event.currentTarget.value;
  // if (event.currentTarget.value === "") {
  //   spanRef.textContent = "незнакомец";
  // }
  event.currentTarget.value === ""
    ? (spanRef.textContent = "незнакомец")
    : (spanRef.textContent = event.currentTarget.value);
};

inputRef.addEventListener("focus", onInputFocus);
inputRef.addEventListener("blur", onInputBlur);
inputRef.addEventListener("input", onInputСhange);

// const inputNameChanger = function () {
//   spanRef.textContent = ;
//   // if (inputRef.value = '') {
//   //   spanRef.textContent = 'незнакомец';
//   // }
// };
