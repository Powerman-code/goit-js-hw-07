// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//     после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const listOfIngredients = document.querySelector("ul");
console.log(listOfIngredients);
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

// let ingredientsItems = [];

const addingIngridientsToList = function (array) {
  // 1) вариант

  // // console.log(array);
  // array.forEach((element) => {
  //   let liElements = document.createElement("li");
  //   liElements.textContent = element;
  //   // console.log(liElements);
  //   ingredientsItems.push(liElements);
  //   console.log(liElements);
  //   console.log(ingredientsItems);
  //   // console.log((document.createElement("li").textContent = element));
  //   // listOfIngredients.append(listItem);
  //   // return ingr;
  // });
  // listOfIngredients.append(...ingredientsItems);
  // // console.log(ingredientsItems);

  // 2 вариант)

  let ingredientsItems = array.map((element) => {
    const liItem = document.createElement("li");
    liItem.textContent = element;
    return liItem;
  });
  listOfIngredients.append(...ingredientsItems);
  // console.log(typeof ingredientsItems);
  // console.log(ingredientsItems);
};

console.log(addingIngridientsToList(ingredients));
