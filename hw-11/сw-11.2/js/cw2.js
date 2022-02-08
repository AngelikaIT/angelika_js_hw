// Editing Document

// !Create element
const element = document.createElement("div");
console.log(`element`, element);
// console.dir(element);

element.innerText = "Hello i am div";
// console.dir(element);

// !Добавление элементов
// append

// кудаДобавляем.append(...чтоДобавляем);

document.body.append(element);

element.innerText = "Changed text in div";

// innerHTML

const container = document.createElement("div");
document.body.append(container);
const layout = "<h1>Heading</h1>";

// получим просто текст <h1>Heading</h1>
// container.innerText = layout;
// получим верстку
container.innerHTML = layout;

// console.dir(container)

// !---------------------------------------------------
// - append - добавляет элемент в конец элемента,
//   у коготоро был вызван метод
// - prepend - добавляет элемент в начало
// - before - добавляет элемент перед
// - after - добавляет элемент после
// - replaceWith - заменяет элемент
// - appendChild - работает как append, но с некоторыми
//   отличиями.

// Отличия:
// - append позволяет добавить как элемент, так и строку,
//   appendChild - только элемент
// - appendChild возвращает добавленый элемент, append
//   не возвращает ничего
// - append позволяет добавить сразу несколько элементов
//   за раз, appendChild - только один элемент

// !----------------------------------------
const expamleContainer = document.querySelector(".example");
const child = document.createElement("p");
child.innerText = "New Element";

// expamleContainer.append(child);
// expamleContainer.prepend(child);
// expamleContainer.before(child);
// expamleContainer.after(child);
expamleContainer.children[0].replaceWith(child);

// ------------------------------------------


//! Удаление елементов
// - remove()
// - innerHTML = ''
// - remove использовать предпочтительнее

// child.remove()
// expamleContainer.remove()
// document.body.append(expamleContainer)

// expamleContainer.innerHTML = ''
// console.log(`exampleContainer.children`, expamleContainer.children)
// const childrenArr = Array.from(expamleContainer.children)
// const childrenArr = Array.from(expamleContainer.children);
// или
const childrenArr = [...expamleContainer.children];

// удалить все элементы внутри, но оставить обертку
// childrenArr.forEach((elem) => elem.remove())


//! Клонирование элементов

const div = document.createElement("div");
div.innerText = "Element for cloning";
document.body.append(div);
// const newDiv = div; // error
const newDiv = div.cloneNode(true);
document.body.append(newDiv);

// elem.cloneNode(deep)
// cloneNode вызывается у элемента и возвращает копию элемента
// по умолч deep false, он склонирует только обертку, без детей, 
// true чтоб сделать глубокую копию, со всеми вложеностями, всеми детьми


// ! ПРАКТИКА
// Добавление нескольких элементов
const fruits = ["banana", "apple", "cherry", "pear"];
// const renderList = (arr) => {
//   const list = document.createElement('ul');

//   arr.forEach((item) => {
//     const listItem = document.createElement('li');
//     listItem.innerText = item;

//     list.append(listItem);
//   })

//   console.dir(list);
//   document.body.append(list)
// }

// const renderList = (arr) => {
//   const list = document.createElement('ul');

//   arr.forEach((item) => {
//     list.innerHTML += `<li>${item}</li>`
//   })

//   // arr.forEach((item) => {
//   //   const listItem = document.createElement('li');
//   //   listItem.innerText = item;

//   //   list.append(listItem);
//   // })

//   console.dir(list);
//   document.body.append(list)
// }

const renderList = (arr) => {
  const list = document.createElement("ul");

//   самый элегантный метод, не дергать каждый раз innerHTML, 
// сначала все по максимуму делаем в js, потом все закидываем в дом

  const listHTML = arr
  .map((item) => `<li>${item}</li>`)
  .join("");

  console.log(`listHTML`, listHTML);
  list.innerHTML = listHTML;
  // arr.forEach((item) => {
  //   const listItem = document.createElement('li');
  //   listItem.innerText = item;

  //   list.append(listItem);
  // })

  console.dir(list);
  document.body.append(list);
};

// renderList(fruits);

// !-----------
// сборка компонентов


// Добавление элементов в элементы, "сброка компонентов"
// Предстваим, что нам нужно отрендерить верстку,
// небольшую статью в блоге.
// Она состоит из несколькх элементов:
// - заголовка
// - подзаговка
// - несольких абзацев текста
// - все элементы должны быть завернуты в контейнер

// const createBlogArticle = (title, subtitle, text) => {
//   const blogContainer = document.createElement("div");
//   const titleElement = document.createElement("h2");
//   const subtitleElement = document.createElement("h3");
//   const textContainer = document.createElement("div");

//   titleElement.innerText = title;
//   subtitleElement.innerText = subtitle;

//   text.forEach((paragraph) => {
//     const paragraphElement = document.createElement("p");
//     paragraphElement.innerText = paragraph;

//     textContainer.append(paragraphElement);
//   });

//   blogContainer.append(titleElement, subtitleElement, textContainer);
//   console.log(blogContainer);

//   return blogContainer;
// };
//   --------------------------------------------

const createBlogArticle = (title, subtitle, text) => {
    const blogContainer = document.createElement("div");
  
    blogContainer.innerHTML = `
      <h2>${title}</h2>
      <h3>${subtitle}</h3>
      <div>
        ${text.map((textItem) => `<p>${textItem}</p>`).join("")}
      <div>
  `;
  
    return blogContainer;
  };


  const blogItemElement = createBlogArticle("Hello World!", "My first article", [
    "a",
    "b",
  ]);
  document.body.append(blogItemElement);
  
  // div
  //   h2
  //   h3
  //   div
  //     p
  //     p