// Homework 13
// !Задание 1
//  Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:
// total, из объекта paging, который вложен в объект meta
// значение is_active, которое принадлежит первому объекту в массиве data.
//  Переименуйте переменную в isActive.

const response = {
  data: [
    {
      username: "samuel",
      is_active: true,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "john",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
    {
      username: "peter",
      is_active: false,
      created_at: "2020-11-20T09:53:50.000000Z",
    },
  ],
  meta: {
    paging: {
      current: 1,
      next: 2,
      prev: null,
      total: 14,
      per_page: 3,
    },
  },
};

const { 
    meta: { 
        paging: {total }
     } ,
     data: [ {
        is_active: isActive
     }]
    } = response;
console.log( `total `, total );
console.log( ` isActive`, isActive );

// !Задание 2

// Из объекта в примере ниже, с помощью деструктуризации достаньте следующие значения:

// name
// surname
// все остальные свойста (height, age) должны быть присвоены объекту parameters.

    const user = {
        name: "gabriel",
        surname: "brown",
        age: 17,
        height: 178,
    };

    const {
        name,
        surname,
        ...parameters
    } = user;
    console.log( ` name`, name );
    console.log( ` surname`, surname );
    console.log( ` parameters`, parameters );
    
    


//! Задание 3

// const max = (a, b) => {
//   return a > b ? a : b;
// };

const max = ( ...num) => {
    return num.reduce( (a, b) => a > b ? a : b)
}
const res = max (2, 5, 15, 0, 7, 3);
console.log( ` res `, res );

// Переделайте функцию max таким образом, 
// что бы она принимала любое количество аргументов 
// (при условии, что все они являются числами, и возвращала максимальное из них).
//  P.S. В данной задаче нельзя использовать Math.max()

// !Задание 4 
// Переделайте функцию createMessage таким образом,
//  что бы на вход передавались не 4 аргумента, а один объект. 
// Деструктузизуйте его прямо в аргументах или в теле функции, и присвойте значения по умолчанию:

// Guest для поля author
// текущую дату для поля time

// const createMessage = (author, text, reciever, time) => {
//   return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
// };
// const message = createMessage("Peter", "Hello", "Sam", new Date());
// console.log( `message `,  message);
// после выполнения этого задания, функция должна коректно работать с таким аргументом
// const message = createMessage({
//   reciever: "John",
//   text: "Hi!",
// });

const createMessage = ( comment ) => {
    const { author="Guest", text, reciever, time = new Date()} = comment;
    return `From ${author} to ${reciever}: ${text} (${time.toLocaleDateString()})`;
};

const message = createMessage({
    reciever: "John",
    text: "Hi!",
  });
console.log( `message `,  message);

// !Задание 5

// Напишите регулярное выражение, которое находит подстроки с такими свойствами:
// начинается с буквенного символа
// заканчивает на буквенный символ
// между первым и послденим символом находятя только числовые символы
// для поиска используйте метод match
// let str = "x1y 722a 333 a123v1n a55555a qwe1 1zxc";
// // для строки str результат должен быть следующий: 
// // [ 'x1y', '722a', '333', 'a123v', 'a55555a' ]
// Напишите регулярное выражение для валидации домена (адреса сайта)
// Валидные домены: ex.ua, google.com, yandex.ru, site.com.ua, my-page.com
// то есть, доменные имена начинаются с любого количества буквенных символов, чисел, символов - _ ., 
// заканчиваются подстрокой, длина которой не менее 2 символов. Начало и конец обязательно разделены точкой
// используйте метод test
// Напишите регулярное выражаение, которое проверяет строку:
// строка не должна содержать ничего кроме числовых символов
// длина строка должна быть не менее 12, но можно и больше
// Тестируйте свои регулярки тут: https://regex101.com