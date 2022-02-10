// Планирование выполнения кода
// setTimeout
// setInterval

// console.log(`1`);
// console.log(`2`);
// console.log(`3`);

// console.log("Loop start");

// for (let i = 0; i < 1000000000; i++) {
//   const a = 2 + 2;
// }

// console.log("Loop end");

// setTimeout

// setTimeout(() => {
//   console.log('А я через 2!')
// }, 2000);

// setTimeout(() => {
//   console.log('Я выполнился через секунду')
// }, 1000);

// console.time('Test timeout')

// console.log("Before timeout");

// setTimeout(() => {
//   console.log("Timeout works!");
// });

// console.log("After timeout");

// console.timeEnd('Test timeout')

// setInterval

let counter = 1;

const sayHi = () => {
  console.log(`Hi! Times: ${counter}`);
  counter++;
};

// sayHi()
// setInterval(() => {
//   counter++
//   sayHi(counter)
// }, 1000)

// setInterval(sayHi, 1000)

// clearTimeout / interval

// const timerId = setTimeout(() => {
//   console.log("Timeouted code");
// }, 1000);

// console.log(`timerId`, timerId);
// clearTimeout(timerId);

// const intervalId = setInterval(() => {
//   console.log("every second");
// }, 1000);

// console.log(`intervalId`, intervalId);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// Задача:
// - На UI отрисовать 2 кнопки, start и stop, каждая из кеоторых
//   будет запускать и останавливать интервал
// - при зарпущеном интервале, в консоли каждые 300мс должны выводиться
//   случайные числа

// setInterval(() => {
//   const random = Math.random();
//   console.log(`random`, random)
// }, 300)

let intervalId = null;

const start = () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      const random = Math.random();
      console.log(`random`, random);
    }, 300);
  }
};

const stop = () => {
  clearInterval(intervalId);
  intervalId = null;
};

const startBtn = document.createElement("button");
const stopBtn = document.createElement("button");
startBtn.innerText = "Start";
stopBtn.innerText = "Stop";
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);

// document.body.append(startBtn, stopBtn);

// Мини-приложение "Будильник"

const alarmTimeInput = document.getElementById("time");
const setAlarmBtn = document.getElementById("startAlarm");
let alertTime = null;

const onAlarm = () => {
  alert("БУДИЛЬНИК!!");
};

const handleTimeChange = ({ target: { value } }) => {
  const [hour, minutes] = value.split(":");
  const time = new Date();
  time.setHours(hour);
  time.setMinutes(minutes);
  time.setSeconds(0);

  alertTime = time;
};

const setAlarm = (action) => {
  if (!alertTime) {
    alert("Не указано время!");
    return;
  }

  const timeoutTime = alertTime.getTime() - Date.now();
  alert(`Будьльник заведен на ${alertTime}`);

  setTimeout(action, timeoutTime);
  alertTime = null;
  alarmTimeInput.value = "";
};

alarmTimeInput.addEventListener("change", handleTimeChange);
setAlarmBtn.addEventListener("click", () => {
  setAlarm(onAlarm);
});