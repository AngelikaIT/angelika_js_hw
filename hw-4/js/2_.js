// Задание 2
// Написать функцию, которая будет спрашивать у пользователя его имя и возраст, и с помощью alert приветствовать его.
// Далее, если возраст больше 30, то показать сообщение с приветсвием Здавствуйте, <Имя Пользователя>
// Если меньше, сообщением будет Привет, <Имя Пользователя> (в треугольных скобках должно быть значение имени, 
// введенной пользователем)



// function sayHello () {

//     let userName = prompt ("Введите имя:");
//     let userAge = Number ( prompt ("Сколько вам лет?") );

//     if 
//         (userAge >= 30) {
//             alert ("Здравствуйте, " + userName + " !")
//     } else
        // alert ("Привет, "  + userName + " !")
// };

// sayHello ();

// ------------------стрелочная------------------------------------------------------

// let userName = prompt ("Введите имя:");
// let userAge = Number ( prompt ("Сколько вам лет?") );
// const sayHello = () => {
//    userAge >= 30 ? alert ("Здравствуйте, " + userName + " !") : alert ("Привет, "  + userName + " !");
// } 
// sayHello ();

// -------------------с дефолтными значениями--------------------------------------------------------

// let userName = prompt ("Введите имя:");
// let userAge = Number ( prompt ("Сколько вам лет?") );
// const sayHello = (userName = "гость", userAge = 18) => {
//    userAge >= 30 ? alert ("Здравствуйте, " + userName + " !") : alert ("Привет, "  + userName + " !");
// } 
// sayHello ();