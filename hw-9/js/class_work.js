// ARRAY METHODS

// ! slice()
// получить подмассив

const numArr = [ 0, 1, 2, 3, 4, 5 ];

const part1 = numArr.slice(0, 2);
const part2 = numArr.slice(3, 6);
const part3 = numArr.slice(1);
const part4 = numArr.slice();

// console.log(`part1`, part1);
// console.log(`part2`, part2);
// console.log(`part3`, part3);
// console.log(`part4`, part4);
// console.log(`numArr`, numArr);

// ! splice()
//  - удалять элементы
// - добавить элементы
//  - заменить элементы

//  splice( старт, сколько удалить, что добавить)
//  returns -  возвращает массив удалленых элементов

const example = [ 0, 1, 2, 3, 4, 5, 6, ];

// удаление

const removedExample = example.splice(0, 2);

console.log(`removedExample`, removedExample);
// console.log(`example`, example);
// console.log(`example.length`, example.length);

// --------------

const removedFromEnd = example.splice(example.length - 1);
// console.log(`removedFromEnd `, removedFromEnd );
// console.log(`example`, example);

//  удаление со вставкой (замена)

const removed = example.splice(2, 1, "что-то");
console.log( ` removed`, removed  );
console.log( ` example`, example  );

// добавление без удаления

const removedEmpty = example.splice(1, 0, "еще что-то");
// console.log( ` removedEmpty`,  removedEmpty);
// console.log( ` example`, example );


// ! concat()
//  - объеденяет массивы

const letters = ['a', 'b', 'c'];
const res = letters.concat(['d', 'e'], ['f']);
console.log( ` res`, res );

const a = [1, 2, 3];
const aClone = a.concat([]);

aClone.push(4);
// console.log(`a`, a);
// console.log(`aClone`, aClone);

// ! join(), split()
// - join  - соединяет массив в строку
// - split - разбивает строку на массив
// принимают в себя аргумент - сепаратор, по которому она будет дробиться

const text = "Hello my name is Angelika";
const symbols = text.split("");
const words = text.split(" ");

// console.log(`symbols`, symbols);
// console.log(`words`, words);

let resultText;
resultText = symbols.join("-");
console.log( `resultText `,  resultText);

resultText = words.join(" ");
// console.log(`resultText`, resultText);

// можно массив перевести в строку преобразованием к строке, но 
// разделитель указывать не сиожем, будет запятая
console.log( ` в строку `, String(arr) );

// !------------------------

const maskCreditCard = (cardNumber) => {
    const MASK = "****";
    // накапливаем группы по 4 в массив
    const groups = [];
  
    //  нужен доп счетчик чтоб считать итерации по 4
    for (let i = 0, j = 1; i < cardNumber.length; i += 4, j++) {
      if (j === 2 || j === 3) {
        //   по второй и третей позиции пушим маску
        groups.push(MASK);
        continue;
      }
  
    //   режим кусочки строки по 4 и пушим в массив
      const group = cardNumber.slice(i, i + 4);
      groups.push(group);
    }
  
    console.log(`groups`, groups);
    // теперь нужно заджойнить по пробелу массив, перевести в строку через пробел (сепаратор)
    const result = groups.join(" ");
    return result;
  };
  
  // const masked = maskCreditCard("4111111111111111");
  // console.log(`masked`, masked);

  
//!  includes() и indexOf()

// includes - проверяет наличие элемента в массиве ( true/ false)
// indexOf  - возвращает индекст искомого элемента в массиве ( -1/ 3)

const numbers = [1, 2, 3];

// console.log(`numbers`, numbers)
// console.log(`numbers.includes(1)`, numbers.includes(1));
// console.log(`numbers.includes(5)`, numbers.includes(5));

const names = ["peter", "chuck", "john"];

// console.log(`names`, names)
// console.log(`names.indexOf('peter')`, names.indexOf("peter"));
// console.log(`names.indexOf('sam')`, names.indexOf("sam"));

// !-----------------------

// (массив, элемент кот меняем, элем на кот меняем)
const replaceValue = (arr, target, replacer) => {
    // определить индекс по кот будем проводить замену
    //  если массив не содержит наш таргет (индекс кот нужно заменить), возвр просто массив
    if (!arr.includes(target)) {
      return arr;
    }
//   делаем копию, конкатим с пустым массивом, чтоб не менять исходный массив, и работаем с рез
    const res = arr.concat([]);
    const index = res.indexOf(target);
  
    // console.log(`index`, index)
//   по индексу  index, удаляем 1 элем, и вставляем replacer
    res.splice(index, 1, replacer);
  
    return res;
  };

  const test = [1, 2, 3];
const resultOfReplacing = replaceValue(test, 2, 5);
// console.log(`resultOfReplacing`, resultOfReplacing)

// console.log(`test`, test)

// part2
// ! ПЕРЕБИРАЮЩИЕ методы
// в кач аргумента принимают в себя
// ! callback  function -
//  это функция, которая передается в другую функцию и уже внутри нее вызывается

// Callback functions

const callback = (text) => {
    console.log(text);
  };
  
  // callback();
  
  const testFunction = (cb, x) => {
    console.log(`cb`, cb);
    cb(x);
  };
  
  // testFunction(callback, 'Hello from CallBack')

//   !-----------------

const makeOperation = (num1, num2, callback) => {
    // если тип числа 1 не число и тип числа 2 не число,
    //  говорим что числа не верны и возвращаем ноль
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      console.log("Invalid numbers");
  
      return 0;
    }
  
    // если условие не отработало (если числа типа намбер), 
    // возвр результат работы колбэка  с передаными перемеными 
    return callback(num1, num2);
  };
  
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  
  const res1 = makeOperation(1, 2, add);
  const res2 = makeOperation(4, 2, subtract);
//   пример с не стрелочной функцией
  const res3 = makeOperation(5, 5, function (a, b) {
    return a * b;
  });
//   пример со стрелочной, исп чаще всего
  const res4 = makeOperation(10, 2, (a, b) => a / b);
  
  // console.log(`res1`, res1);
  // console.log(`res2`, res2);
  // console.log(`res3`, res3);
  // console.log(`res4`, res4);
  
// !   forEach - перебирает массив, вызывая
//           колбек для каждого елемента,
//           ничего не возвращает
// !   map     - заменяет каждый текущий елемент
//           массива результатом работы
//           (возвращаемым значением) колбека.
//           Возвращает новый [], не мутируя старый
// !   filter  - возвращает новый [] из тех элементов,
//           для которых коллбек вернул true или
//           truthy значение
// !   find    - ищет элемент в массиве, возвращает
//           первый элемент для которого результат
//           колбека будет true
// !   some    - возвращает true, если хотя бы для
//           одного элемента результат выполнения
//           колбека был true, в противном случае
//           возвращает false
// !   every   - возвращает true, если хотя бы для
//           всех элементов результат выполнения
//           колбека был true, в противном случае
//           возвращает false
// !   sort    - соритирует исходный массив и возращает
//           новый отсортированный. Принимает опциональный
//           аргумент - колбек, который в свою очередь
//           принимает 2 аргемента: текущий и следующий
//           элементы массива. Без аргумента сортирует
//           по методу строк, то есть сравнивая их Юникоды
// !   reduce  - метод, который позволяет сжать массив до
//           одного значения.

// !-------------------------------------------------------

// ! forEach();
// как перебор фором 
// - вызывает коллбек для каждого елемента
// - ничего не возращает

const defaultCallback = (item, index, array) => {
    console.log(`item`, item);
    console.log(`index`, index);
    console.log(`array`, array);
  };
  
  const logger = (item, index, arr) => {
    console.log(`In array [${arr}] on position ${index}: ${item}`);
  };
  
  const numbersList = [1, 2, 3, 4, 5];
  
  numbersList.forEach(logger)
  
// ! // map();
// - возвращает новый массив
// - заменяет каждый елемент массива резульатом
//   выполнения колбека

const digits = [10, 20, 30];
const multiplied = digits.map((digit) => digit * 10);
// console.log(`digits`, digits)
// console.log(`multiplied`, multiplied);

// ! коллекция -
//  это массив объектов, 

//  имеем массив людей  people, в кот каждый чел это объект 
// со значениями имя и фамил в разных регистрах
// нужно получить массив с полным именем, имя фамил через пробел с большой буквы

const people = [
  {
    name: "peter",
    surname: "brown",
  },
  {
    name: "sam",
    surname: "Peterson",
  },
  {
    name: "Ann",
    surname: "black",
  },
  {
    name: "Antony",
    surname: "Hopkins",
  },
];

// person это тот же item

const formattedNames = people.map((person) => {
  const name = person.name[0].toUpperCase() + person.name.slice(1);
  const surname = person.surname[0].toUpperCase() + person.surname.slice(1);

  return `${name} ${surname}`;
});

// console.log(`formattedNames`, formattedNames);

// !   filter()
// - фильтрует массив
// - оставляет в массиве только те значения,
//   для которых результат выполнения колбека - true

//  нужно получить положит значения, > 0
const digitsList = [-1, 2, 4, -2, 0, 1, 11, -6];
const positiveNumbers = digitsList.filter((digit) => digit > 0);
// console.log(`positiveNumbers`, positiveNumbers);

const randomValues = ["", true, false, [1, 2], 0, 10, "test", null];
// важно вернуть не строгое тру а труси, правдивое значение:
// const truthyValues = randomValues.filter((item) => item);
// const truthyValues = randomValues.filter((item) => Boolean(item));
const truthyValues = randomValues.filter(Boolean);

// отл вариант, если нужно отфильтровать и оставить правдивые значения

// console.log(`truthyValues`, truthyValues);

let arr = [
  {name: 'Вася', age: 36},
  {name: 'Аня', age: 18 },
  {name: 'Петя', age: 12},
]
let res = arr.filter(function(item, index, array) {
  return item.age >= 18;
});
// получим новый масив

// !  find()
// - ищет елемент в массиве
// - возвращает первый найденый елемент, для которого
//   фуккция колблек вернула true

// найти объкт с каким-то опред значением, например по id

const users = [
    { id: 7, username: "admin" },
    { id: 12, username: "carl777", age: 36 },
    { id: 51, username: "XXX", age: 18 },
    { id: 32, username: "jack" },
  ];
  
  const desiredUserId = 51;
  
  const user = users.find((user) => user.id === desiredUserId);
  // console.log(`user`, user);
  
  const userName = users.find((user) => user.id === desiredUserId).username;
  // console.log(`userName`, userName);

  // или пример 

  let res = users.find(function(item, index, array) {
    return item.age === 18;
  });
  console.log( ` res`, res );
  //  { id: 51, username: "XXX", age: 18 },
  // item это сам элемент массива ( { id: 51, username: "XXX", age: 18 },)
  // index это его ключ, позиция
  // array весь массив

  // let res  = users.find(item => item.age === 18);
  // console.log( ` res `, res  );

  //  findIndex делает то же самое, но вернет не весь обьект, а его индекс
  
//   !  some() and every()

// - возращают true если для хотя бы одного (every -  для всех)
//   колбек вернул true

// const hasTruthyValues = randomValues.some(item) => Boolean(item);
// или сокращаем Boolean до
const hasTruthyValues = randomValues.some(Boolean);
const isAllValuesTruthy = randomValues.every(Boolean);

// console.log(`randomValues`, randomValues);
// console.log(`hasTruthyValues`, hasTruthyValues);
// console.log(`isAllValuesTruthy`, isAllValuesTruthy);

const studentMarks = [
  {
    subject: "Math",
    mark: 5,
  },
  {
    subject: "Literature",
    mark: 5,
  },
  {
    subject: "Arts",
    mark: 5,
  },
  {
    subject: "Computer Science",
    mark: 5,
  },
];

const isExcellentStudent = (marks) => {
  return marks.every((item) => item.mark === 5);
};

const hasBadMarks = (marks) => {

    // ? почему не так, если нужно выяснить отличник или нет?
    //! ? return marks.some((item) => item.mark < 5 );   
  return marks.some((item) => item.mark <= 2);
};

// console.log(`isExcellentStudent(marks)`, isExcellentStudent(studentMarks));
// console.log(`hasBadMarks(marks)`, hasBadMarks(studentMarks));

//! sort()

// Принимает в себя опциональный колбек, который принимает в себя два
// аргумента, текущий и следующий элементы массива.
// мутирует массив

// compareFunction(a, b) > 0   -> a, b
// compareFunction(a, b) === 0 -> a, b
// compareFunction(a, b) < 0   -> b, a

const fruits = ["бананы", "арбузы", "Вишня"];
// fruits.sort();

// чтоб отсортировать валидно, в алфавитном порядке
fruits.sort((a, b) => a.localeCompare(b));

// console.log(`fruits`, fruits);

const scores = [21, 1, 2, 10];

// scores.sort();

// scores.sort((a, b) => {
//   console.log(`a`, a);
//   console.log(`b`, b);

//   return a > b ? 1 : -1;
//   return a - b
// });

scores.sort((a, b) => a - b);
// в обратном порядке b - a

// console.log(`scores`, scores);

console.log( ` в обратном порядке`, scores.reverse() );


// !   reduce()
// Накапливает опререденное значение на каждой итерации, и в результате его возвращает. Принимает
// в себя коллбек, который принмиает в себя два аргумента:
// - аккамулятор
// - текущий елемент массива
// И необязательный агрумент, стартовое значение аккамуляторв. Если этот аругмент не передан, то
// стартовым значением станет первый елемент массива. или [initial]
// reduseRight с права на лево

let value = arr.reduce(function( previousValue, item, index, array) {
  //...
}, [initial]);

const salaries = [100, 200, 300, 400, 500, 600];
// просумировать все зп

// у нас есть колбэк, кот принимает в себя 2 значения, асс и  value
const salariesTotal = salaries.reduce((acc, value) => {
    // на каждой итерации внутри метода редьюс нам доступен акамулятор и текущее значение
  // console.log(`acc`, acc);
  // console.log(`value`, value);
  acc += value;

  return acc;
}, 0);
//  0 - второе стартовое значение, не обязательное
// console.log(`salariesTotal`, salariesTotal)



// !-----------------
// переменная курс обмена, нужно получить в грн uahTotal: 0, 
//  

const exchangeRate = 27;

// {
//   uahTotal: 0
//   usdTotal: 0
// }

const salariesData = salaries.reduce(
  (acc, value) => {
    // console.log(`acc`, acc);
    // console.log(`value`, value);

    // как записать в объект значения, к нулю приращиваем рез
    acc.uahTotal += value * exchangeRate
    acc.usdTotal += value

    return acc;
  },

//   изначальное значение задоем объект с нулевыми значениями и 
//  в него по ключу acc.uahTotal будем записывать рез += value * exchangeRate
  {
    uahTotal: 0,
    usdTotal: 0,
  }
);

// console.log(`salariesData`, salariesData);

//  ! Chaining методов массива
// цепочка, один за одним


const products = [
  {
    name: 'Potato',
    price: 3,
    quantity: 10,
    isOnSale: true,
  },
  {
    name: 'Milk',
    price: 7,
    quantity: 12,
    isOnSale: true,
  },
  {
    name: 'Bread',
    price: 5,
    quantity: 1,
    isOnSale: false,
  },
  {
    name: 'Meat',
    price: 11,
    quantity: 4,
    isOnSale: true,
  },
  
] 

// - подготовить цену к показу пользователю 3 -> 3.00
// - отфильтровать только те товары, которые на распродаже isOnSale: true,
// - отсортировать по количесву

const productsResult = products
// сначала отфильтруем товар, кот на распродаже, 
// чтоб не выполнять лишних действий с товарами, кот не на паспр
  .filter((product) => product.isOnSale)
//   должны вернуть продакт с изменненой ценой 3 -> 3.00
  .map(product => {
    product.price = product.price + '.00'

    return product
  }) 
//   сортируем по колличеству от меньшего
  .sort((a, b) => a.quantity - b.quantity);

console.log(`productsResult`, productsResult);

//  можно методы массива вызывать сразу у массива
[1, 2, 3]
  .map(n => n + 1)
  .forEach(n => console.log(`n`, n))
// [2, 3, 4]

// ! isArray

let obj = {};
let arr = [];

console.log( typeof obj  ); // object
console.log( typeof arr  ); // object

if (Array.isArray(obj)) {
  console.log( `это массив`  );
} else{
  console.log( ` это не массив` );
}
