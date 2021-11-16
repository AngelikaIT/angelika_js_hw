// Задание 1

// Напишите функцию, которая принимает массив булевых значений, а возвращает число,
//  которое представляет собой количесво значений true в массиве

// countTrue([true, false, false, true, false]); // -> 2
// countTrue([false, false, false, false]); // -> 0
// countTrue([]); // -> 0

let getAmountTrue = (arr) => {
    let countTrue = 0;
    for ( let item of arr) {
        if (item === true) 
            countTrue += 1;
    };
    return countTrue;
};

const res = getAmountTrue([false, false, false, false]);
console.log(res);



