// Homework 17
// Реализуйте таймер обратного отсчета на JS.

// При запуске приложения на странице должно находиться 2 кнопки Start и Stop.
// При нажатии пользователем на кнопку Start, на странице должен появиться таймер обратного отсчета.
//  (Количесво секунд, которые будет "идти" таймер можете спросить у пользователя через инпут,
//   prompt или записать в коде).
// Длительность таймера обязательно должна быть указана в секундах.
// Элемент таймера обязательно сожержать часы минуты и секунды. 
// То есть, если пользователь длительность таймера 3600 секунд,
//  изначально на странице должно отобразиться 01:00:00, если 10 секунд, то 00:00:10.
// Каждую секунду таймер должен уменьшаться на секунду.
// При нажатии на кнопку Pause таймер должен остановиться, 
// а при повторном нажатии - продолжиться с того же места.
// По истечению таймера, должна быть возможность обработать возвращенный из функции промис. 
// То есть, при выполнении следующего кода, в консоли через 30 секунд должна появиться строка Timer end!
// startTimer(30).then(() => {
//   console.log("Timer end!");
// });
// Пример работы: 

// c разбора:

let timeout = 10;
let interval = null;
let isActive = false;
const timeContainer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const stopBtn = document.getElementById("stop");

const formatTime = (timeItem) => {
    return String(timeItem).length < 2 ? `0${timeItem}` : timeItem;
};

const renderTimer = ( { hours, minutes, seconds } ) => {
    const timeString = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
timeContainer.innerText = timeString;
};

const getTimeLeft = ( secondsLeft ) => {
    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft - hours * 3600) / 60 );
    const seconds = secondsLeft - hours * 3600 - minutes * 60;

    return {
        hours,
        minutes,
        seconds,
    };
};

const startTimer = () => {
    isActive = true;

    // eсли передали 10 секунд, то функция вернет {hours: 0, minutes: 0, seconds: 10,}
    const time = getTimeLeft(timeout);

    // эта функция зарендерит время 10 секунд в виде 00:00:10
    renderTimer(time);

    return new Promise((resolve) => {
        interval = setInterval(() => {
            timeout--;
            if ( timeout <= 0 ) {
                isActive = false;

                clearInterval(interval);
                interval = null;
                resolve();
            }
            const time = getTimeLeft(timeout);
            renderTimer(time);
        }, 1000);
    })
};

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
    isActive = false;
    timeout = 10;
    const time = getTimeLeft(timeout);
    renderTimer(time);
};

const pauseTimer = () => {
    isActive = false;
    clearInterval(interval);
    interval = null;

};

startBtn.addEventListener("click", () => {
    if (isActive || !timeout) {
        return;
    }

    startTimer().then(() => {
        alert("Timer end!");
    });
});
pauseBtn.addEventListener("click", pauseTimer);
stopBtn.addEventListener("click", stopTimer);