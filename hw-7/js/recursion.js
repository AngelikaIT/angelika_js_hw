// учимся делать копию и глубокую копию объекта

// - копируется ссылка, а не сам обьект, по этому заданные свойства в новой переменной
//   дублируются и в первую (изначальную) переменную, а мы можем не знать где еще в коне она используется;

const num1 = 10;
let num2 = num1;

num2 = 22;
// console.log(`num1`, num1);
// console.log(`num2`, num2);

const a = {
  x: "y",
};

const b = a;
const c = b;

// c.x = "z";

// console.log(`b`, b);
// console.log(`a`, a);
// ---------------------------------------------------------------------------------------------------------------------------------------------------


// - чтоб правильно скопировать, нужно создать новые обьект и в нем присвоить ключи с первого;


  
  const user = {
    name: "John",
  };
  
  const userClone = {};
  userClone.name = user.name;
  
  userClone.name = "Peter";
  
  // console.log(`user`, user);
  // console.log(`userClone`, userClone)
  
  const car = {
    name: "BMW",
    year: 2020,
    price: 30000,
  };
//   ---------------------------------------------------------------------------------------
// универсальная ф-ция для копирования одноуровневого обьекта:
// - обьявляем ф-цию и вызываем ее
// - ф-ция получает в себя обект и перебирает его ключи
// - создаем новый обьект (клон), в кот будут склад значения по ключам с первого обьекта и возвращаем его
// - в цикле с пом фор ин перебираем обьект, кот прилетел в кач аргумента в ф-цию, 
// и по ключу, кот доступен на каждой итерации (кей) достать значения значение из исходного обьекта 
//  и записать его в обьект клон 

  const makeClone = (obj) => {
    const clone = {};
  
    for (let key in obj) {
        // смотрим какие есть ключи в исходном обьекте:
      // console.log(`key`, key); 
        // смотрим obj по ключу [key]  :
      // console.log(`obj[key]`, obj[key])
        //  далее в обьект clone по ключу [key] мы должны записать то значение, кот 
        // лежит в obj по ключу [key]
      clone[key] = obj[key];
    }
  
    return clone;
  };
  
//   вызываем ф-цию:
  const carClone = makeClone(car);
//   теперь можно перезаписывать значения в клон обьекте, и они не будут измен в исх обьекте

  carClone.year = 2021;
  // console.log(`car`, car);
  // console.log(`carClone`, carClone);


  const cube = {
    color: "black",
    dimensions: {
      height: 100,
      width: 200,
    },
  };

  const cubeClone = makeClone(cube);
  // cubeClone.color = "white";
  // cubeClone.dimensions.height = 1000;
  // console.log(`cube`, cube);
  // console.log(`cubeClone`, cubeClone);

// для клонирования более глубокой вложенности нужна РЕКУРСИЯ
//  вызов ф-ции самой себя 

// например, нахождение факториала числа (перемножить все числа от 1 до п)

// через счетчик:

const loopFactarial = (n) => {
    let result = 1;
  
    for (let i = 0; i < n; i++) {
      // result = result * (n - i);
      result *= n - i;
    }
  
    return result;
  };
  
  const factorial = loopFactarial(4);
  // console.log(`factorial`, factorial);

  
//   через рекурсию:
//  - база рекурсии, или условие выхода из рекурсии:
//  if (n === 1) {
//       return n;
//     }
//  в каком-то обязательном случае не вызываем ф-цию рекурсивно

// если это условие не выполняется, ф-ция возвращает n 
// умноженый на результат вызова ф-ции (n - 1)
//  если n дошел до 1, возвр просто n

const recursiveFactorial = (n) => {
    if (n === 1) {
      return n;
    }
  
    return n * recursiveFactorial(n - 1);
  };
  
  // console.log(`recursiveFactorial(4)`, recursiveFactorial(4));
  

// -----------------пример---------------------------------------------------------

// такое же копирование обьекта в цикле с перебором ключей через фор ин, но
// теперь мы будем проверять тип ключа, если не обьект, выводим так же значения по ключу с 
// исходного обьекта, в противном случае, если тип ключа обьект, 
// в клон по ключу clone[key] записываем результат вызова этой же ф-ции (makeDeepClone),
// и передаем в нее обьект, который лежит в исходном оюьекте по ключу кей makeDeepClone(obj[key])

const makeDeepClone = (obj) => {
    const clone = {};
  
    // console.log(`obj`, obj);
  
    for (let key in obj) {
      if (typeof obj[key] !== "object") {
        clone[key] = obj[key];
      } else {
        // console.log(`obj[key]`, obj[key]);
//   -------рекурсия:
        clone[key] = makeDeepClone(obj[key]);
      }
    }
  
    return clone;
  };
  
  const cubeDeepClone = makeDeepClone(cube);
  
  cubeDeepClone.dimensions.height = 1000;
  console.log(`cube`, cube);
  console.log(`cubeDeepClone`, cubeDeepClone);

//   ---------------------------------------------------------------------------------------
  
  const deepObject = {
    a: {
      b: {
        c: {
          d: {
            e: 1,
          },
        },
      },
    },
    f: 2,
  };
  
  const deepClone = makeDeepClone(deepObject);
  deepClone.a.b.c.d.e = 2;
  
  console.log(`deepObject`, deepObject);
  console.log(`deepClone`, deepClone);