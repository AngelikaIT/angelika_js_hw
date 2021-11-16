// Задание 2
// Вам необходимо посчитать количество вхождений каждого элемента в массиве. 
// Результатом работы написанного вами метода должен быть объект,
//  где ключами являются елементы массива а их значениями - количесво раз,
//   которое каждый конкретный элемент встречается в массиве.
//    В массиве гарантировано находятся исключительно строки.

// getOccurrencesCount(["a", "v", "a", "b", "b"]);
// {
//   a: 2,
//   v: 1,
//   b: 2,
// }

// getOccurrencesCount([
//   "apples",
//   "oranges",
//   "pears",
//   "pears",
//   "apples",
//   "oranges",
//   "oranges",
//   "pears",
// ]);
// {
//   apples: 2,
//   oranges: 3,
//   pears: 3,
// }

const getOccurrencesCount = (arr) => {

    let newObj = {};

    for (let item of arr) {

        if (!newObj[item]) {
            newObj[item] = 1;
        } else {
            newObj[item] += 1;
        };
        
    };

    return newObj;

};

// const res = getOccurrencesCount(["a", "v", "a", "b", "b"]);
const res = getOccurrencesCount([
      "apples",
      "oranges",
      "pears",
      "pears",
      "apples",
      "oranges",
      "oranges",
      "pears",
    ]);

console.log(res);


