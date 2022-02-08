// Homework 12
// Реализовать функцию, которая показывает подсказку (tooltip) возле необходимого элемента.
//  Функция принимает на вход 2 аргумента - элемент, возле которого нужно отобразить подсказку 
//  и текст подсказки, который будет отображен в тултипе.
//   Подсказка должна быть отображена над элементом, так же должна быть отцентрована.

// Элемент подсказки должен иметь абсолютное позиционирование, то есть не влиять на остальную верстку
// Статические стили (цвет, размеры и тд) примените с помощью класса, а координаты с помощью объекта style.
// Елемент с подсказкой(тултип) должен быть добавлен в body
// Для сдачи домашняя работа обязательно должна сожержать html с рабочим примером.
//  Если ваш тултип будет выходить за границы экрана - не страшно, просто передвиньте ваш елемент, 
//  к которому прикрепили подсказку, дальше от края вьюпорта.

// Пример работы:

// const button = document.getElementById('example');

// createTooltip(button, 'example text bla bla bla');

const createTooltip = (element, text) => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");

    tooltip.innerText = text;

    // Важно! сделать это до того, как мы начнем вычислять координаты для тултипа, 
    //  так как до момента рендера мы не можем узнать его итоговую щирину и высоту, 
    //  а они нам нужны до центровки
    document.body.append(tooltip);

    // получаем координаты элемента, к которому нужно прикрепить тултип
    const anchorElemCoords = element.getBoundingClientRect();

    // координаты тултипа по оси У
    // формулаЖ
    // отступ целевого елемента от верха экрана - 10 (отступ от элемента до тултипа) - высота тултипа
    const tooltipTop = anchorElemCoords.top - 10 - tooltip.clientHeight;


    // половина итоговой ширины тултипа 
    const tooltipLeft = 
        anchorElemCoords.left +
        anchorElemCoords.width / 2 -
        tooltip.clientWidth / 2;

    // const tooltipLeft = anchorElemCoords.left;

    //  не забыть написать еденицы изчисления рх, чтоб это не было голым числом
    // (фбсолютное позиционирование уже задано в стилях)
    tooltip.style.top = `${tooltipTop}px`;
    tooltip.style.left = `${tooltipLeft}px`;

}
const button = document.getElementById("example");
createTooltip(button, 'example text bla bla bla');