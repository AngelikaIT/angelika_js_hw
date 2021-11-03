// Задание 1
// Дополнить классную работу счетчиком количества попыток

// Пользователь иммет только 3 попытки авторизации. 
// Попробуйте разные варианты реализации, через цикл for и цикл while. 
// отправьте на проверку более элегантный по вашему мнению вариант.

// При использовании каждой попытки пользователю должен показываться
//  alert с сообщением об оставшемся количесве попыток

// const LOGIN = "ADMIN";
// const PASSWORD = "1q2w3e";

// const authorise = () => {
//     let userLogin;
//     let userPassword;
//     let isAuthSuccess = false; 
//     let i = 2;

//         do {
//             userLogin = prompt ("Логин:" );
//             if (!userLogin) {
//                 alert ("Введите логин");
//                 continue;
//             }

//             userPassword = prompt ("Пароль:");
//             if (!userPassword) {
//                 alert ("Введите пароль" );
//                 continue;
//             }

//             if ( userLogin === LOGIN || userPassword === PASSWORD) {
//                 isAuthSuccess = true;
            
//                 } else if ( i > 0 ) {
//                 alert ( ` Данные неверны! Осталось попыток: ${i}`)
//             } else {
//                 alert ("Все попытки использованы, вход запрещен!");
//                 // break;   как здесь правильно остановить цикл?
//             }
        
//             i--;

//         } while (!isAuthSuccess) {
//             alert ("Добро пожаловать!")
//         };
// };

// authorise ();

