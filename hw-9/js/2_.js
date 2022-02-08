// Задание 2

// Написать собственную реализацию методов массива map, forEach, filter

// Это могут быть функции под названием ownMap, ownForEach, ownFilter.
// На вход они должны принимать массив, с которым необходимо осущуествить действие,
//  и колбек-функцию, которая применится к каждому из элементов массива.
// Встроенные методы массива map, forEach, filter испольовать запрещено.
// Пример работы:

// const isNegative = (number) => number < 0;
// const increment = (number) => number + 1;
// const logger = (element, index, array) => {
//   console.log(`In array [${array}] on position ${index}: ${element}`);
// };

// ownForEach([1, 2, 3], logger);
// ownMap([1, 2, 3], increment); // [2, 3, 4]
// ownFilter([-2, 4, -1], isNegative); // [-2, -1]
// Вы можете испольвать уже готовые колбек-функции isNegative, increment, logger,
//  для тестов, или напсиать свои. Работа будет проверяться на остнове предоставленых функций,
//  так что советуем проверить работу на них.





  
//   const ownForEach = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i], i, arr);
//     }
//   };

// // -------------------------------------------

//   const ownMap = (arr, callback) => {
//     let resultArr = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       const operationResult = callback(arr[i], i, arr);
  
//       resultArr.push(operationResult);
//     }
  
//     return resultArr;
//   };

// //   -----------------------------------------
  
//   const ownFilter = (arr, callback) => {
//     let resultArr = [];
  
//     for (let i = 0; i < arr.length; i++) {
//       const operationResult = callback(arr[i], i, arr);
  
//       if (operationResult) {
//         resultArr.push(arr[i]);
//       }
//     }
  
//     return resultArr;
//   };

function test (a, b){
  var x;

  
  for ( i=a; i>0; i--){
    console.log( ` i=`, i );
    if ( a%i === 0 && b%i === 0){
      x = i;
      break;
    }
    
  };



  return x;
};

console.log( ` x= `,  test (10, 99));