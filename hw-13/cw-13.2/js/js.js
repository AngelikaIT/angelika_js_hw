//! MOUSE Events

// - click
// - doubleclick - 
// - mousedown - нажатие кнопки мыши
// - mouseup - отпустили кнопку мыши
// - mousemove движение мыши
// - mouseenter - мышь заходит на элемент
// - mouseleave - мышь уходит с элемента

const clicksElement = document.getElementById("clicks");
const movesElement = document.getElementById("moves");

// clicksElement.addEventListener("click", (event) => {
//   // console.log(event);

//   console.log("CLICK");
// });

// clicksElement.addEventListener("mousedown", (event) => {
//   console.log("MOUSEDOWN");
// });
// clicksElement.addEventListener("mouseup", (event) => {
//   console.log("MOUSEUP");
// });

// clicksElement.addEventListener("dblclick", (event) => {
//   console.log("DOUBLE CLICK");
// });

// movesElement.addEventListener("mouseenter", () => {
//   console.log("MOUSEENTER");
// });

// movesElement.addEventListener("mouseleave", () => {
//   console.log("MOUSELEAVE");
// });

// movesElement.addEventListener("mousemove", (evt) => {
//   const x = evt.clientX;
//   const y = evt.clientY;
//   console.log("MOUSEMOVE", x, y);
// });
// принимаем ивент и выводим текущие координаты где находится мышь

//  каждый раз когда кликаем на элементе, выводим счетчик колличество кликов
const handleClicksCounter = (e) => {
    // элем на кот произошел клик
    const element = e.target;
    // console.log(`element`, element);
  
//     ищем внутри элемнта по querySelector
    const clickCounterElement = element.querySelector("#clicksCounter");
    const currentClicks = Number(clickCounterElement.innerText);
  
    clickCounterElement.innerText = currentClicks + 1;
  };

   // вешаем обработчик событий
  clicksElement.addEventListener("click", handleClicksCounter);
  
// !------------------------------------------
// Добавить на страницу элемент по клику
// При клике на элемент - добавить на страницу текст,
// который будет содеражать информацию о событии
// (координаты клика).
// При повторном клике - удалить елемент со страницы

//  создает сам элемент и добавляет о нем инфо, текущие координаты

const createInfoElement = (event) => {
    const coords = {
      x: event.clientX,
      y: event.clientY,
    };
//   добавляем элемент на страницу
    const infoElement = document.createElement("p");
    //  добавляем текст с координатами
    infoElement.innerText = `X: ${coords.x} Y: ${coords.y}`;
    //  делаем id для элемента
    infoElement.id = "infoElement";
  
    return infoElement;
  };
  
//   вешаем обработчик
  const handleAddInfoElement = (event) => {
    //    результат работы функции запишем в переменную добавляем созданый элемент на страницу
    const createdElement = createInfoElement(event);
    // getElementById вернет нал если такого элемента нет и элемент если он есть
    const maybeElement = document.getElementById(createdElement.id);
  
    // узнаем добавлен ли элемент на страницу по id
    if (maybeElement) {
      maybeElement.remove();
    } else {
        //  если элемента нет на странице, мы его добавляем
      document.body.append(createdElement);
    }
  };
  
  clicksElement.addEventListener("click", handleAddInfoElement);

//   !----------------------
// имитируем ховер
// выводим координаты мыши при вводе мыши на элемент
  
// какие координаты и в каком элементе обновлять
  const updateCoordsinInfoElement = (event, element) => {
    const coords = {
      x: event.clientX,
      y: event.clientY,
    };
  
    element.innerText = `X: ${coords.x} Y: ${coords.y}`;
  };
//    внешняя переменная, кот хранит элемент
  let infoElement = null;

//   пишем три обработчика ( при входе мыши на элемент, при движении мыши и при уходе мыши с элемента)
  
  movesElement.addEventListener("mouseenter", (event) => {
    //    создаем элем
    infoElement = createInfoElement(event);
    //  и доб на страницу
    movesElement.append(infoElement);
  });
  
  movesElement.addEventListener("mousemove", (event) => {
    //    выводим координаты при движении мыши
    updateCoordsinInfoElement(event, infoElement);
  });
  
  movesElement.addEventListener("mouseleave", (event) => {
    //   удаляем элем когда мышь уходит
    infoElement.remove();
  });
  
//   !клавиатура

// Keyboard Events

// - keydown - нажатие клавиши
// - keypress -
// - keyup - отпустили клавишу

// window.addEventListener("keypress", (event) => {
//   console.log(`keypress`, event);
// });

// window.addEventListener("keyup", (event) => {
//   console.log(`keyup`, event);
// });

// window.addEventListener("keydown", (event) => {
//   console.log(`keydown`, event);
// });

// Среди особых свойств событий клавиатуры следует отметить:
// - code - симольный код нажатой клавиши
// - key - фактически нажатая клавиша (зависит от текущей раскладки)
// - keycode - числовой код нажатой клавиши
// - charCode - код символа (есть только у keypress)
// - ctrlKey - нажат ли ctrl при событии
// - shiftKey - была ли нажата клавиша shift
// - altKey - была ли нажата клавиша alt


// Задача:
// Подсвечивать текущую нажатую клавишу.

// Алгоритм:
// 1. По keydown подсвечивать нужную клавишу
//    Находим ее свойству события key
// 2. По keyup находим подсвеченную клавишу и убираем подсветку

// получаем все наши клавиши виртуальные
const keysList = [...document.querySelectorAll(".keyboard-item")];

// функция хелпер чтоб найти кнопку, которая будет подсвечена, для этого
const getCurrentPressedKey = (event) => {
  const curentKey = event.key;

//    найти в нашем списке найти элемент у которого инер текст 
// совпадает с нажатой кнопком с помощ метода массивов find
  return keysList.find((key) => {
    //    если функция нашла чтото, значение тру, то этот элемент 
    // возвращается и ззаписывается в переменную currentKeyElement
    return key.innerText.toLowerCase() == curentKey.toLowerCase();
  });
};

//  обработчик (можно было через свитч кейсы, но долго)
const handleKeyDown = (event) => {
    // найти кнопку, которая будет подсвечена, для этого
    // 
  const currentKeyElement = getCurrentPressedKey(event);

  if (!currentKeyElement) {
    return;
  }

//   добавляем нужный класс нажатой клавише
  currentKeyElement.classList.add("keyboard-item--pressed");
};

// обработчик
const handleKeyUp = (event) => {
    //  найти клавишу, кот отпустили
  const currentKeyElement = getCurrentPressedKey(event);
//  если нет такой клавиши, выходим с функции
  if (!currentKeyElement) {
    return;
  }
//  удаляем класс у отпущеной клавиши
  currentKeyElement.classList.remove("keyboard-item--pressed");
};

// вешаем на window обработчики
window.addEventListener("keyup", handleKeyUp);
window.addEventListener("keydown", handleKeyDown);


//! События window
// - DOMContentLoaded - загуржен и прочитан html
//   - если нужен только html
// - load - предыдущее + стили, картинки
//   - нужна полностью загруженная страница (стили, изображения)
// - resize - вызывается при измении ширины вьюпорта
// - scroll - вызывается при скролле

//  
// window.addEventListener("load", (event) => {
//   console.log(`load`, event);
// });

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log(`DOMContentLoaded`, event);
// });

// ------------------------------------------------

// window.addEventListener('resize', (event) => {
//   // console.log(`resize`, event)

// получаем ширину экрана
//   // const windowWidth = event.target.innerWidth;
//   const windowWidth = window.innerWidth;

//  на ширине 576 рх нам нужно чтото сделать
//   if(windowWidth <= 576) {
//     console.log('MOBILE!')
//   } else {
//     console.log('DESKTOP!')
//   }

// })

//  !события скрола
//  когда пользователь доскролил до конца страницы, показать ему об этом сообщение
window.addEventListener('scroll', (event) => {
    // console.log(`event`, event);
  
    // чтоб узнать где находится пользователь на странице, сущ window.scrollY на какое кол рх произошел скрол
  // высота вьюпорта + высота сколла === высота страницы
  console.log(`scroll`, window.scrollY)
//   document.body.offsetHeight - вся высота страницы
// window.innerHeight - высота вьюпорта
  const isScrolledToBottom = 
    window.innerHeight + window.scrollY >= document.body.offsetHeight
  console.log(`isScrolledToBottom`, isScrolledToBottom)
  if(isScrolledToBottom) {
    console.log('you are scrolled to bottom')
  }
  })
