// Задание 2

// Реализовать функцию - генератор случайных чисел в заданном промежутке

// Функция должна принимать на вход 2 числа, которые являются границами промежутка.
// Функция должна возвращать случайное число, которое большое или равно меньшего числа и меньше или равно большего.

// let randomDrop = (min, max) => {
//     return min + Math.random() * ( max - min );
// };
// let dropRandom = randomDrop(10, 20);
// alert (dropRandom);

// let randomInteger = (min, max) => {
//     return Math.round(min + Math.random() * ( max - min ));
// };
// let IntegerRandom = randomInteger(10, 20);
// alert (IntegerRandom);

// более верно???

// let randomInteger = (min, max) => {
//     return Math.round(min - 0,5 + Math.random() * ( max - min + 1 ));
// };
// let IntegerRandom = randomInteger(1, 3);
// alert (IntegerRandom);