// Задание 2

// Написать функцию, которая находит сумму зарплат работников.

// На вход функция будет получать объект, где значениями в объекте являются СТРОКИ,
//  содержащие размер заработной платы сотрудников компании.

// Необходимо посчитать сумму всех значений и вернуть ее.

// const salaries = {
//   John: "4300.00",
//   Ann: "5700.40",
//   Pete: "4900.95",
// };

// Результатом для данного объекта должно получится число 14901.35.

// Hint: работа с целыми числами более безопасна, чем с десятичными.

// const salaries = {
//       John: "4300.00",
//       Ann: "5700.40",
//       Pete: "4900.95",
//     };

// const getSalariesTotal = ( salaries ) => {
//     let total = 0;
//     for ( let employee in salaries) {
//         console.log(`employee`, employee );
//         console.log( `salaries[employee]`, salaries[employee]);
//         total += salaries[employee] * 100;
//     }
//     return total / 100;
// };

// const totalResult = getSalariesTotal(salaries);
// console.log(`totalResult`, totalResult);