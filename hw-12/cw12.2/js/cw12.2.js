// Working with styles

// - className
// - classList
// - объект style
// - getComputedStyle()

// ! className
// - возвращает полный класс строку
// - служебное свойство, лучше использовать classList

// const example1 = document.getElementById("exampleOne");
// console.dir(example1);
// console.log(`example1.className`, example1.className);

// example1.className = 'blue'

// example1.className += " dashed";

// ! classList

// const example2 = document.getElementById("exampleTwo");
// console.log(`example2.classList`, example2.classList);

//   - add
//   - remove
//   - replace
//   - contains (не includes!)
//   - toggle

// добавить класс
// example2.classList.add("dashed");
// console.log(`add .dashed`, example2.classList);

// // удалить класс
// example2.classList.remove("dashed");
// console.log(`remove .dashed`, example2.classList);

// // заменить класс
// example2.classList.replace("red", "blue");
// console.log(`replace .red to .blue`, example2.classList);

// // "переключить" класс
// example2.classList.toggle("large");
// console.log(`toggle .large`, example2.classList);

// example2.classList.toggle("large");
// console.log(`toggle .large`, example2.classList);

// как работает  toggle
// const toggleClass = (element, className) => {
//   if (element.classList.contains(className)) {
//     element.classList.remove(className)
//   } else {
//     element.classList.add(className)
//   }
// }

// toggleClass(example2, 'large');
// console.log(`example2.classList`, example2.classList);
// toggleClass(example2, 'large');
// console.log(`example2.classList`, example2.classList);

// !--------------------------------
//  Создаем шахматную доску с переключателем


// const renderChessBoard = (cellsCount) => {

    // создаем элемент таблица с количеством ячеек cellsCount
    // кот состоит из рядов tr и ячеек td
//     const table = document.createElement("table");

// добавляем таблице заготовленый класс chessboard
//     table.classList.add("chessboard");
  
//  чтоб создать опред количество рядов и ячеек (cellsCount)
// испол 2 цыкла, в первом, в цикле верхнего уровня создаем ряды row
// в цыкле второго уровня будем в каждый ряд доб ячейки cell

//     for (let i = 0; i < cellsCount; i++) {
//       const row = document.createElement("tr");
//       for (let j = 0; j < cellsCount; j++) {
//         const cell = document.createElement("td");
//         cell.classList.add("chessboard-cell");
  
// 
//         let isDark;
  
// если ряд четный, черные ячейки тру на четных ячейках

//         if (i % 2 === 0) {
//           isDark = j % 2 === 0;
//         } else {
//           isDark = j % 2 !== 0;
//         }
  
// если isDark добавляем класс черной ячейки

//         if (isDark) {
//           cell.classList.add("chessboard-cell--dark");
//         }
  
// каждую ячейку добавить в ряд
//         row.append(cell);
//       }
// каждый ряд с ячейками доб в таблицу
//       table.append(row);
//     }
//    табл доб в боди
//     document.body.append(table);
  
//     return table;
//     // tr
//     // td
//   };
  
// функция кот меняет черные на белые ячейки при клике
// достаем все ячейки td у таблицы с пом querySelectorAll
// затем форичем перебираем каждую ячейку с пом 
// тогл меняем ей цвет, класс toggle("chessboard-cell--dark"

//   const toggleChessBoard = (chessBoard) => {
//     console.log("func");
//     const allCells = chessBoard.querySelectorAll("td");
//     allCells.forEach((cell) => {
//       cell.classList.toggle("chessboard-cell--dark");
//     });
//   };
  
//   // const board = renderChessBoard(9);
  
//   const btn = document.getElementById("toggle");
//   // btn.addEventListener("click", () => toggleChessBoard(board));
//   !------------------------------------------------------------
  //! style
//   нужен для вычисления супер динамических значений
  // - название всех css-свойств, которые содержат в себе дефис,
  //   пишутся в camelCase
  // - содержит в себе только инлайновые стили
  
  // const styleExample = document.getElementById("exampleFour");
  // console.log(`styleExample.style`, styleExample.style);
  
  // const desiredWidth = Number(prompt("Width?"));
  // const desiredHeight = Number(prompt("Height?"));
  // const desiredWidth = 100;
  // const desiredHeight = 200;
  
//   Сгенерировать произвольный цвет
// !-------
//   const getRandomRGB = () => {
//     const numbers = [];
  
//     for (let i = 0; i < 3; i++) {
//       const randomNumberInRange = Math.round(Math.random() * 255);
//       numbers.push(randomNumberInRange);
//     }
  
// из полученого массива джойним по запятой в строку
//     const RGBString = `rgb(${numbers.join(",")})`;
  
//     return RGBString;
//   };
//   !------------
// сгенерировать прмоугольник с получеными от пользователя размерами
// и сгенерировать его каждый раз нового цвета
// спрашиваем размеры, записываем их в стайл

//   const drawRectangle = (width, height) => {
//     const rect = document.createElement("div");
//     const randomRGB = getRandomRGB();
  
// можно и так генерировать цвет
    //  const randomColor = `rgb(${
    //   Math.round(Math.random() * 255)
    // },${
    //   Math.round(Math.random() * 255)
    // },${
    //   Math.round(Math.random() * 255)
    // })`;
  
    // записываем размеры в стайл
//     rect.style.height = `${height}px`;
//     rect.style.width = `${width}px`;
//     rect.style.backgroundColor = randomRGB;
  
//     document.body.append(rect);
//   };
  
//   // drawRectangle(desiredWidth, desiredHeight);

    //! Вычисленные стили
//   // window.getComputedStyle(elem)
//    вывести внутри каждого квадрата цвет в формате rgb этого квадрата

//  функция отрендерить цвета прямоугольника

//   const renderRectangleColors = () => {

    // нужно получить все прямоугольники по айди и 
    // все его дочерние элементы с пом children и превращаем в массив 

//     const rectangles = [...document.getElementById("exampleFive").children];
  
//  для каждого прямоугольника получаем его стили
//     rectangles.forEach((rectangle) => {
//       const styles = window.getComputedStyle(rectangle);
// достаем нужный нам backgroundColor
//       const color = styles.backgroundColor;
//  и говорим что в каждом прямоуг текстом будет его цвет в формате rgb 
//       rectangle.innerText = color;
//     })
//   };
  
//   renderRectangleColors();