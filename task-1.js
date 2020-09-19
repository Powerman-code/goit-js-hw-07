// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//     Получится 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега h2)
// и количество элементов в категории(всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const ulItemRef = document.querySelectorAll("#categories");
// console.log(ulItemRef[1].textContent);
console.log(typeof ulItemRef);
// console.log(ulItemRef.querySelectorAll("li"));

let count = function (array) {
  return array.forEach((element) => {
    // console.log(element.length);
    // console.log(element.querySelector("h2"));
    let searchedCategory = "";
    let searchedQuantity = 0;
    console.log(element.querySelectorAll("h2"));
    element.querySelectorAll("h2").forEach((cathegory) => {
      console.log(cathegory);
      // console.log(cathegory.textContent);
      searchedCategory = cathegory.textContent;
      console.log(searchedCategory);
      return searchedCategory;
    });

    // element.querySelectorAll("ul").forEach((cathegoryElement) => {
    //   // console.log(typeof cathegoryElement);
    //   // console.log(Object.keys(cathegoryElement).length);
    //   console.log(cathegoryElement.length);
    //   // return element;
    // });

    // тут мы получаем UL массив, и можем применить на него ленгс.
    // element.querySelectorAll("ul").forEach((cathegoryElement) => {

    console.log(element.querySelectorAll(".item ul"));

    element.querySelectorAll(".item ul").forEach((ulElement) => {
      console.log(ulElement.children.length);
      searchedQuantity = ulElement.children.length;
      console.log(searchedQuantity);
      return searchedQuantity;
    });
    console.log(`Категория: ${searchedCategory}
                    Количество элементов: ${searchedQuantity}`);
    return `Категория: ${searchedCategory}
                    Количество элементов: ${searchedQuantity}`;
  });
};
// ulItemRef.forEach((el) => console.log(el));

console.log(count(ulItemRef));
