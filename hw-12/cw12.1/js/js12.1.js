// SIZES AND SCROLL

// clientHeight/Width - внутренние видимые размеры элемента, не включая ту часть,
//                      которая проскролена
// offsetHeiht/Width  - высота элемента с учётом паддинга и границ(рамок)
// scrollWidth/Height - полная высота/ширина элемента, включая прокрученную область
//                      минимальное значение вьюпорта
// offsetTop/Left     - растояние от края элемента до элемента,
//                      относительно которого браузер высисляет
//                      координаты для рендера, это может быть
//                      - елемент с css позиционированием
//                      - <td> <th> <table>
//                      - <body>
// scrollTop/Left     - ввысота / ширина прокрученной зоны элемента

// const el = document.documentElement;
// const el = document.querySelector(".test");
// console.log(`el.clientHeight`, el.clientHeight);
// console.log(`el.clientWidth`, el.clientWidth);
// console.log(`el.offsetHeight`, el.offsetHeight);
// console.log(`el.offsetWidth`, el.offsetWidth);
// console.log(`el.scrollWidth`, el.scrollWidth);
// console.log(`el.scrollHeight`, el.scrollHeight);
// console.log(`el.offsetLeft`, el.offsetLeft);
// console.log(`el.offsetTop`, el.offsetTop);
// console.log(`el.scrollLeft`, el.scrollLeft);
// console.log(`el.scrollTop`, el.scrollTop);

// window.scrollX/scrollY;
// window.pageYOffset/pageXOffset;

// console.log(`window.scrollY`, window.scrollY);
// console.log(`window.pageYOffset`, window.pageYOffset);
// !---------------
// window.scrollTo({
//   behavior: "smooth",
//   top: 100,
// });

// document.documentElement.scrollTop = 100;

// ! Прокрутка элемента
const scrollable = document.querySelector(".scrollable-container");
// первый способ чтоб проскролить контент элемента сразу без анимаций
// scrollable.scrollTop = 100;
// второй способ с behavior: "smooth" плавной анимацией
scrollable.scrollTo({
  top: 100,
  behavior: "smooth",
});


//! Прокрутка к елементу

// допустим хотим прокрутить страницу к последнему элементу,
//  последнему абзацу на странице
// получаем последний абзац через querySelector("p:last-of-type")
// последний элемент типа р

// например, при покупках на сайте, чтоб оформить заказ, 
// клиента нужно проскролить к форме, 
// форму получаем в пееменную, не нужно вычислять какието параметры, 
//  и говорим проскролься к форме

// const lastParagraph = document.querySelector("p:last-of-type");
// console.log(`lastParagraph`, lastParagraph);

// lastParagraph.scrollIntoView({
//   behavior: 'smooth',
// });


// ! Координаты элемента
// getBoundingClientRect

const circle = document.querySelector('.circle');
const circleCoords = circle.getBoundingClientRect();
console.log(`circleCoords`, circleCoords);