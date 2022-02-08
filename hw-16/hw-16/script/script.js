// Homework 16
// Вашей задачей будет реализовать функционал приветсвия пользователя на сайте
//  c помощью localStorage.

// При первом входе на сайт просто показывать на экране приветствие Дооро пожаловать!
// Если пользователь уже заходил на сайт (при первом визите), 
// то к базовому приветсвию следует добавить строку Вы заходили раз: N.
//  Где вместо N будет количесво посещений сайта пользователем.
//   Обратите внимание, что первый визит так же считается.
// Функционал должен работать при закрытии вкладки или бразура, обновлении страницы.

// Пример контента сайта при 1 входе пользователя: Пример 1

// Пример контента сайта при 14 входе: Пример 2


const container = document.getElementById("container");

const renderGreeting = () => {
    const greetingElement = document.createElement("p");
    greetingElement.innerText = "Добро пожаловать ";
    container.append(greetingElement);

    const visitsNum = document.createElement("p");
    const visits = JSON.parse(localStorage.getItem("visits"));
        if (!visits){
            localStorage.setItem("visits", 1);    
        } else {
            let n = visits + 1;
            localStorage.setItem("visits", n);
            visitsNum.innerText =`Вы заходили раз: ${n}`;
            container.append(visitsNum);

        //     хотелось чтоб как-то с ++ увеличивалось на 1, но не хочет так работать,
        //      может сможешь подсказать в чем именно тут ошибка
        //     visits++;
        //     localStorage.setItem("visits", `${visits}`);
        //     visitsNum.innerText =`Вы заходили раз: ${visits}`;
        //     container.append(visitsNum);

        }         
}
renderGreeting();


// с разбора:

// const container = document.getElementById("container");

// const renderGreeting = ( isInitial, visitsCount = 0) => {
//     const greetingElement = document.createElement("p");
//     const visitsCountElement = document.createElement("p");
//     greetingElement.innerText = "Добро пожаловать ";
//     visitsCountElement.innerText = `Вы заходили раз: ${visitsCount}`;

//     container.append(greetingElement);

//     if ( isInitial ) {
//         container.append(visitsCountElement);
//     }
// };

// if ( localStorage.getItem("visits")) {
//     const visits = JSON.parse(localStorage.getItem("visits"));
//     const updateVisits = visits + 1;
//     localStorage.setItem("visits", updateVisits);

//     renderGreeting( true, updateVisits);
// } else {
//     localStorage.getItem("visits", 1);
//     renderGreeting(false);
// }