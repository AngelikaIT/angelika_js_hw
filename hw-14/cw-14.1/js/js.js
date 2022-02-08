// Атрибуты vs DOM-свойства

// браузер парсит, читает html документ и формирует дом дерево, 


const divExample = document.getElementById("exampleOne");
const inputExample = document.getElementById("exampleTwo");
const imgExample = document.getElementById("exampleThree");

// console.dir(divExample);
// console.dir(inputExample);
// console.dir(imgExample);

// Attributes

// console.log(`divExample.attributes`, divExample.attributes);
// console.log(`inputExample.attributes`, inputExample.attributes);
// console.log(`imgExample.attributes`, imgExample.attributes);

const inputAttrs = inputExample.attributes;
const placeholderAttr = inputAttrs.placeholder;

// console.dir(placeholderAttr)

for (let attr of inputAttrs) {
  const attrName = attr.name;
  const attrValue = attr.value;

  // console.log(`${attrName}: ${attrValue}`);
}

//! Методы работы с атрибутами

// setAttribute - устанавливает значение атрибута, принимает
//                два аргумента: название и значение атрибута
// getAttribute - получает значение атрибута,
//                если его нет - вернет null
// hasAttribute - проверяет наличие атрибута (true / false)
// removeAttribute - удаляет атрибут

const input = document.getElementById("exampleFour");
const btn = document.getElementById("attrAction");

// обработчик события клика
const toggleInputDisabled = () => {
    // если у инпута есть атрибут дизейбл, его убираем, если нет, добавляем
  if (input.hasAttribute("disabled")) {
    // remove
    input.removeAttribute("disabled");
  } else {
    // add
    input.setAttribute("disabled", "");
  }
};

btn.addEventListener("click", toggleInputDisabled);

// !Синхронизация атрибутов и свойств

const element = document.querySelector(".example-five");

// console.log(`element.id`, element.id);
// console.log(`element.getAttribute('id')`, element.getAttribute("id"));
// console.log("After change via property");
// element.id = "changed";
// console.log(`element.id`, element.id);
// console.log(`element.getAttribute('id')`, element.getAttribute("id"));
// element.setAttribute("id", "changedAgain");
// console.log("After change via setAttribute");
// console.log(`element.id`, element.id);
// console.log(`element.getAttribute('id')`, element.getAttribute("id"));

// console.log(`input.getAttribute('value')`, input.getAttribute("value"));
// console.log(`input.value`, input.value);

// input.setAttribute('value', 'text');

// console.log(`input.getAttribute('value')`, input.getAttribute("value"));
// console.log(`input.value`, input.value);

// input.value = "newValue";

// console.log(`input.getAttribute('value')`, input.getAttribute("value"));
// console.log(`input.value`, input.value);

// ! Кастомные data-* атрибуты



const prices = document.querySelectorAll(".price");

const highlightDiscountedPrice = (elem) => {
// если у цены есть скидка, подсветить ее красным

  if (elem.dataset.hasDiscount === "true") {
    elem.style.color = "red";
  }
};

prices.forEach((price) => {
  // console.log(`price.dataset`, price.dataset);
  highlightDiscountedPrice(price);
});

// ! Пратическое задание
// - Реализовать простой функционал табов (переключатели)
// - При нажатии на название языка программирования на экране
//   должен отобразится его логитип
// - один из языков должен быть выбран по умолчанию, то есть
//   хотя бы один логотип должен быть отображен
// - называние выбранного языка должно быть подсвечено жирным

const langTitles = [...document.querySelectorAll(".title")];
const langImages = [...document.querySelectorAll(".language-logo")];

// при загрузке страницы переключает жирность выбраного заголовка
const toggleLogos = () => {
  const selectedTilte = langTitles.find((title) => {
    //   находим элемент, кот содержит атрибут жирности
    console.log(`title.dataset`, title.dataset);
    // return title.hasAttribute('data-selected')
    // есть ли свойство в обьекте hasOwnProperty
    return title.dataset.hasOwnProperty("selected");
  });

//   нашли выбраный тайтл, теперь забираем у него контент
  const contentValue = selectedTilte.dataset.content;

//   перебираем все логотипы и если свойство атрибута датасет тайтл совпадает с контентом выбраного тайтла,
//  убираем у картинки хиден, остальным добавить атрибут хиден
  langImages.forEach((image) => {
    if (image.dataset.title === contentValue) {
      image.removeAttribute("hidden");
    } else {
      image.setAttribute("hidden", "");
    }
  });

  console.log(`contentValue`, contentValue);
};

const handleTitleClick = (event) => {
    // тот элем по кот кликнули
  const currentTitle = event.target;

//   предыдущ тайтл, если файнд находит свойство селектед, значит предыдущим выбраным тайтлом был он,
//  и у него нужно убрать дата селектед и добавить новому выбраному тайтлу
  const prevTitle = langTitles.find((title) => {
    return title.dataset.hasOwnProperty("selected");
  });

  prevTitle.removeAttribute("data-selected");
  currentTitle.setAttribute("data-selected", "");

  toggleLogos();

};

// вешаем обработчик на тайтлы, названия языков, и при клике на них вызываем функцию, кот 
// присвоит элементу, по которому кликнули, дата селектед
langTitles.forEach((title) => {
  title.addEventListener("click", handleTitleClick);
});

toggleLogos();