// 1. Написать функцию для авторизации пользователя 
// с базой валидаций данных.
// - логин: ADMIN ; пароль: 1q2w3e ;
// - если пользователь не ввел логин, показать ему сообщ 
// "Введите логин" 
// если пользователь не ввел пароль, показать ему сообщ 
// "Введите пароль" 
// и начать авторизацию заново

// const LOGIN = "ADMIN";
// const PASSWORD = "1q2w3e";

// const authorise = () => {
//     let userLogin;
//     let userPassword;
//     let isAuthSuccess = false; 
//     // чтоб убрать заведомо бесконечный цикл

//     do {
//         userLogin = prompt ("Логин:" );
//         if (!userLogin) {
//             alert ("Введите логин");
//             continue;
//         }

//         userPassword = prompt ("Пароль:");
//         if (!userPassword) {
//             alert ("Введите пароль" );
//             continue;
//         }

//         if ( userLogin === LOGIN || userPassword === PASSWORD ) {
//             isAuthSuccess = true;
//         } else {
//             alert ("Данные неверны!");
//         }
//     } while (!isAuthSuccess) {
//         alert ("Добро пожаловать!")
//     };
// };

// authorise ();