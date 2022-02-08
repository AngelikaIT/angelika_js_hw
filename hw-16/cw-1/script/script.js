- объекты
// - массивы
// - числа
// - булевые значения
// - null
// - строки

// JSON - объект
// - каждый должен быть обернут ДВОЙНЫМИ кавычками
// - все строки используют двойные кавычки
// - никаких плавающих запятых

// {
//   "name": "Nikita",
//   "age": 24,
//   "isAdmin": true,
//   "children": null
// }

// JSON - массив

// [
//   "apple",
//   null,
//   42.7,
//   {
//     "email": "user@gmail.com",
//     "password": "1q2w3e"
//   }
// ]

const jsonObj = '{"name": "Nikita"}';
const jsonArr = '[1, 3, "test", null, {"quantity": 10}]';

const jsObj = JSON.parse(jsonObj);
// console.log(`jsonObj`, typeof jsonObj)
// console.log(`jsObj`, jsObj)

const jsArr = JSON.parse(jsonArr);

// console.log(`jsArr`, jsArr[4].quantity)

// localStorage

// - setItem("key", "value")
// - getItem("key")
// - removeItem("key")
// - clear()

localStorage.setItem("firstValue", 1);

// console.log(`localStorage`, localStorage);

// getItem

const visitsCount = 0;
localStorage.setItem("visitsCount", visitsCount);

const localVisitsCount = localStorage.getItem("visitsCount");
// console.log(`localVisitsCount`, localVisitsCount);

// removeItem

localStorage.removeItem("visitsCount");

localStorage.setItem("favouriteFruit", "apple");
let favouriteFruit = localStorage.getItem("favouriteFruit");

favouriteFruit = "pear";

localStorage.setItem("favouriteFruit", favouriteFruit);

const updatedFruit = localStorage.getItem("favouriteFruit");
// console.log(`updatedFruit`, updatedFruit);

// объекты в localStorage

const fruit = {
  name: "apple",
  weight: 300,
  sweetness: 5,
  color: "green",
};

// const jsonFruit = JSON.stringify(fruit);

// localStorage.setItem('fruit',fruit); // [object Object]
// localStorage.setItem('fruit', JSON.stringify(fruit));

// const localFruit = JSON.parse(localStorage.getItem('fruit'));
// console.log(`localFruit`, localFruit)

// Задача:
// - при первом входе показывать пользователю форму авториации
// - после ее заполения, показывать приветсвие пользователя с его именем
// - каждый последующий вход проверять, была ли пройдена авторизация
// - если да - показывать сразу приветсвие
// - если нет - показывать снова форму

const nameInput = document.createElement("input");
const emailInput = document.createElement("input");
const form = document.createElement("form");
const submitBtn = document.createElement("button");

const USER_LOCALSTORAGE_KEY = "user";

const renderGreeting = (name) => {
  const greeting = document.createElement("h1");
  greeting.innerText = `Hello, ${name}`;

  document.body.append(greeting);
};

const updateLocalStorage = (user) => {
  localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
};

const handleSubmit = (event) => {
  event.preventDefault();

  const { value: name } = nameInput;
  const { value: email } = emailInput;

  updateLocalStorage({ name, email });

  form.remove();
  renderGreeting(name);
};

const renderForm = () => {
  nameInput.setAttribute("placeholder", "Name");
  emailInput.setAttribute("placeholder", "Email");
  submitBtn.innerText = "Войти";

  form.append(nameInput, emailInput, submitBtn);
  form.addEventListener("submit", handleSubmit);
  document.body.append(form);
};

// renderForm()
// renderGreeting('Nikita')

const init = () => {
  if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
    const { name } = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE_KEY));
    renderGreeting(name);
  } else {
    renderForm();
  }
};

init();


// sessionStorage.setItem('Test', "I will dissappear on tab closes");


// Cookies (куки)

console.log(`document.cookie`, document.cookie);

document.cookie = "name=John";

document.cookie = "age=42"

document.cookie = "name=Peter";


// - max-age
// max-age=3600 (время в секундах)
// - expires
// expires=Tue, 19 Jan 2038 03:14:07 GMT
// - path
// - domain

document.cookie = "surname=Brown; max-age=10";

const now = new Date();
const tomorrow = new Date(now.setDate(now.getDate() + 1))

document.cookie = `sucure_token=123123123; expires=${tomorrow.toUTCString()}`