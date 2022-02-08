//! FORMS in JS

const form = document.getElementById("login-form");

const passwordInput = document.getElementById("password");
const loginInput = document.getElementById("login");

const handleSubmit = (event) => {
    // отменить дефолтное поведение, переход по ссылке, обновление страницы при сабмите
  event.preventDefault();

//   вывести значения формы в консоль
  const formValues = {
    //   value всегда строки
    login: loginInput.value,
    password: passwordInput.value,
  };

  console.log(`formValues`, formValues);
};

form.addEventListener("submit", handleSubmit);


//! Работа с инпутами

const exampleInput = document.getElementById("example");
const exampleContainer = document.getElementById("example-container");

// создаем элемент в который потом будем заливать текс,
//  сначала закинем на страницу пустой, потом при вводе будем обновлять значения
const textElem = document.createElement("p");
exampleContainer.append(textElem);

// CHANGE когда убрали фокус
const handleChange = (event) => {
  // console.log(`CHANGE event`, event);
  // console.log(`event.target.value`, event.target.value);

  textElem.innerText = event.target.value;
};

// инпут при фокусе, при вводе значений
const handleInput = (event) => {
  // console.log(`INPUT event`, event);
  // console.log(`event.target.value`, event.target.value);

  textElem.innerText = event.data;
};

exampleInput.addEventListener("change", handleChange);
exampleInput.addEventListener("input", handleInput);

//! select

const select = document.getElementById("example-select");

const handleSelectChange = (event) => {
  //  v1 - если нужно просто получить value, 
//   value- это или значение с атрибута в верстке (value=), или иннер текст (яблоко)
  const value = event.target.value;
  console.log( ` event`, event );
  console.dir(event.target.value);

  //  v2 - если нужно более глубоко или больше получить какието дата атрибуты по сектед индексу
  const options = event.target.options;
  const selectedOption = options[options.selectedIndex];
  console.log(`selectedOption`, selectedOption);
};

// обработчик
select.addEventListener("change", handleSelectChange);

//! - checkbox
//  для checkbox значение достаем не по value, а по checked

const checkbox = document.getElementById("example-checkbox");

const handleCheckboxChange = (event) => {
  console.log(`event.target.value`, event.target.value);
  console.log(`event.target.checked`, event.target.checked);
};

checkbox.addEventListener("change", handleCheckboxChange);

//! - radiobutton

// группа радио кнопок
const genderRadioGroup = document.getElementsByName("gender");

// достать значение выбранной кнопки
const getRadioValue = (radioGroup) => {
    // находим радио батн с чекед тру
    // находим радио кнопку с выбранным значением с пом find
  const checkedRadio = [...radioGroup].find((radio) => radio.checked);
//   если ни один не выбран, выходим из функции
  if (!checkedRadio) {
    return null;
  }
// возвращаем значение выбраной радио кнопки, у кот чекед тру
  return checkedRadio.value;
};

const res = getRadioValue(genderRadioGroup);
// console.log(`res`, res)

// обработчик 
const handleRadioButtonChange = (event) => {
  console.dir(event.target);
};

// смотрим радио кнопки, значения, 
genderRadioGroup.forEach((radio) => {
    //  каждой навешиваем обработчик, на которой выбрана, вызывается функ
  radio.addEventListener("change", handleRadioButtonChange);
});


// !Форма обмена валют

const amountInput = document.getElementById("amount");
const currencySelect = document.getElementById("currency-select");
const resultElement = document.getElementById("result");

const rates = {
  USD: 27.3,
  EUR: 31.7,
};

const getExchangeResult = (amount, currency) => {
    // введеное значение делим на курс 
  return (Number(amount) / rates[currency]).toFixed(2);
};

const updateResult = (exhangeAmount) => {
  resultElement.innerText = exhangeAmount;
};

const handleCurrencySelectChange = (event) => {
    //  получить выбраную валюту
  const selectedCurrency = event.target.value;

  const amount = amountInput.value;

  const result = getExchangeResult(amount, selectedCurrency);
  updateResult(result);

  console.log(`selectedCurrency`, selectedCurrency);
};

const handleAmountInputChange = (event) => {
    // текущее значение инпута, что вводит клиент
  const currentAmount = event.target.value;
  const currency = currencySelect.value;

  const result = getExchangeResult(currentAmount, currency);
  updateResult(result);

  console.log(`currentAmount`, currentAmount);
};

// вешаем обработчики событий
amountInput.addEventListener("input", handleAmountInputChange);
currencySelect.addEventListener("input", handleCurrencySelectChange);


// !Form Data

// получаем форму

const exampleForm = document.getElementById("form-data-example");

const convertFormDataToObject = (formData) => {
  const formValues = {}

  for (let pair of formData.entries()) {
    console.log(`pair`, pair)
    formValues[pair[0]] = pair[1] 

  }

  return formValues
}

//  создаем обработчик
const handleFormSubmit = (event) => {
    //  и всегда сразу чтоб не пеезагружалась страница превент дефолт
  event.preventDefault();

//   чтоб поработать с формой, достать значения, нужно сделать new FormData(event.target), 
//  FormData - это итерируемый обьект, у него есть спец метод entries(), который
// пары ключ: значение в виде массива, 
//  по нулевому индексу будет лежать значение name с верстки (напр, password),
//  а по первому индексу будет значение, кот ввел пользователь
// чтоб получить эти значения нужен цыкл for (let pair of formData.entries())
//  пары () в форме 
// дальше мы хотим получить обьект со свойствами name: value (const formValues = {})
//  и выносим в отдельную функцию convertFormDataToObject
// event.target это всегда форма
  const formData = new FormData(event.target);

//   подготовленые данные = обьекту с функции
  const preparedData = convertFormDataToObject(formData);
  console.log(`preparedData`, preparedData)

  
};

//  вешаем обработчик на форму при сабмите
exampleForm.addEventListener("submit", handleFormSubmit);