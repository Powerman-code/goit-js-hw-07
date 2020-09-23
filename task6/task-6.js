// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputRef = document.querySelector("#validation-input");

// inputRef.addEventListener("keypress", inputNameChanger);

const onInputFocus = function () {
  console.log("Инпут получил фокус");
};

const validLength = inputRef.dataset.length;
console.log(validLength);

const onInputBlur = function () {
  console.log("Инпут потерял фокус");
  inputRef.value.length < validLength
    ? inputRef.classList.add("invalid")
    : inputRef.classList.replace("invalid", "valid");
  console.log(inputRef.value.length);
  console.log(validLength);
};

// рабочий вариант 1
// const onInputBlur = function () {
//   console.log("Инпут потерял фокус");
//   if (inputRef.value.length < validLength) {
//     inputRef.classList.add("invalid");
//     console.log(inputRef.classList);
//   } else inputRef.classList.replace("invalid", "valid");
//   console.log(inputRef.classList);
//   console.log(inputRef.value.length);
//   console.log(validLength);
// };

// 3 вариант

// function onInputBlur() {
//   inputRef.value.length > Number(inputRef.dataset.length) ||
//   inputRef.value.length < Number(inputRef.dataset.length)
//     ? inputRef.classList.add("invalid")
//     : inputRef.classList.replace("invalid", "valid");
// }

inputRef.addEventListener("focus", onInputFocus);
inputRef.addEventListener("blur", onInputBlur);
// inputRef.addEventListener("input", onInputСhange);
