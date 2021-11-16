// Задание 3
// Вам предоставляется массив (который будет иметь длину не менее 3,
//     но может быть очень большим), содержащий целые числа.
//  Массив либо полностью состоит из нечетных целых чисел,
//   либо полностью состоит из четных целых чисел,
//    за исключением одного целого числа N. 
// Напишите метод, который принимает массив в качестве аргумента
//  и возвращает это «лишнее» N.

// findExcess([0, 1, 2]); // -> 1
// findExcess([1, 2, 3]); // -> 2
// findExcess([2, 6, 8, 10, 3]); // -> 3
// findExcess([0, 0, 3, 0, 0]); // -> 3
// findExcess([1, 1, 0, 1, 1]); // -> 0

const findExcess = (arr) => {
    let evenNum = [];
    let oddNum = [];

    for (let num of arr) {
        if ( num % 2 === 0 ) {
            evenNum.push(num);
        } else {
            oddNum.push(num);
        };
    }; 
    
   let res = evenNum.length < oddNum.length ?  evenNum[0]: oddNum[0] ; 
       return res;  
};

const N = findExcess([1, 1, 0, 1, 1]);
console.log(`N = `, N);