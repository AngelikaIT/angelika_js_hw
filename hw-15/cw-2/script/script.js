// REGEXP

// const regexp = new RegExp('шаблон', 'флаги');
// const regexp = /шаблон/флаги

let regexp = /привет/;

let text = "Привет! Вчера он поприветсвовал меня, сказав просто 'привет'.";
// match

let matches = text.match(regexp);

// console.log(`matches`, matches);

// g - global
//     с этим флагом решулярка ищет все вхождения, а не только первое
// i - ignorecase
//     регулярка становится нечуствительна к регистру
// m - Многострочный режим

regexp = /привет/i;
matches = text.match(regexp);

// console.log(`matches`, matches);

regexp = /привет/g;
matches = text.match(regexp);

// console.log(`matches`, matches);

regexp = /привет/gi;
matches = text.match(regexp);

// console.log(`matches`, matches);

regexp = /пока/gi;
matches = text.match(regexp);

// console.log(`matches`, matches);

// replace

// const message = "hello how are you";

// const result = message.replace(' ', '_');
// console.log(`result`, result)

// const message = "hello how are you";

// const result = message.replaceAll(' ', '_');
// console.log(`result`, result)

// test

// \d - digit
// \w - word
// \s - space
// \D - not digit
// \W - non word
// \S - non space

// [] - набор символов
// [abc] - найдет все символы a b и c
// {} - количество символов

// найти гласные буквы в строке
const alphabet =
  "A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z";

const findVowels = (text) => {
  return text.match(/[aouie]/gi);
};

const vowels = findVowels(alphabet);

// console.log(`vowels`, vowels)

// подсветить текст, который соответсвует регулярному выражению

const element = document.getElementById("one");

const highlightText = (elem, regexp) => {
  const { innerText: text } = elem;
  // console.log(`elem`, elem);

  const result = text.replace(regexp, (repalced) => {
    return `<span class="highlighted">${repalced}</span>`;
  });

  // console.log(`result`, result)

  elem.innerHTML = result;
};

// highlightText(element, /lo/gi);

// 1. Найти число
// 2. Найти следующее после него слово

const exampleElement = document.getElementById("two");

highlightText(exampleElement, /\d+\s\w+/gi);

// test

const re = /[a-z]/g;

// console.log(`re.test('abcde')`, re.test('abcde'))
// console.log(`re.test('ZAX12')`, re.test('ZAX12'))

// Валидация пользовательского ввода

const form = document.getElementById("form");
const input = document.getElementById("input");

const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const VISA_REGEX = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/g;
const MASTERCARD_REGEX = /^(?:5[1-5][0-9]{14})$/g;
const WEBMONEY_REGEX = /[ZR]\d{12}/g;

const handleSubmit = (event) => {
  event.preventDefault();

  const { value } = input;

  // const processedValue = value.replace(/\D/gi, "");
  // const isVisa = VISA_REGEX.test(processedValue);
  // const isMasterCard = MASTERCARD_REGEX.test(processedValue);

  // if (isVisa || isMasterCard) {
  //   alert(`Добро пожаловать! Ваша карта ${isVisa ? "Visa" : "Mastercard"}`);
  // } else {
  //   alert("Вы ввели неверное значение!");
  // }

  if (WEBMONEY_REGEX.test(value)) {
    alert(`Добро пожаловать!`);
  } else {
    alert("Вы ввели неверное значение!");
  }
};

form.addEventListener("submit", handleSubmit);