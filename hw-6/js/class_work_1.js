// 1. Написать функцию, которая принимает на вход hex код цвета, 
// а возвращает rgb

// #ffffff -> rgb(255, 255, 255)

// 2. Написать функцию, которая принимает на вход 3 аргумента, 
// red, green, blue, каждый из которых отвечает за соответствующий 
// канал цвета, и возвращает hex код типа #ffffff

// 3. Написать функцию, которая может замаскировать карту,
// На вход она принимает строку, содержащую номер, а
// а возвращает замаскированую карту

// 0000111122223333 -> 0000 **** **** 3333

// Вариант 1

// const getRGBFromHex = (hexCode) => {

//     const red   = hexCode.slice(1, 3);
//     const green = hexCode.slice(3, 5);
//     const blue  = hexCode.slice(5);

//     const decimalRed   = parseInt(red, 16);
//     const decimalGreen = parseInt(green, 16);
//     const decimalBlue  = parseInt(blue, 16);

//     return `rgb(${decimalRed}, ${decimalGreen}, ${decimalBlue})`;
// }

// const resRGB =  getRGBFromHex ("#ffffff");
// console.log(`resRGB`, resRGB);

// Вариант 2 !

// const getRGBFromHex = (hexCode) => {

//     let codes = "";

//     for (let i = 1; i < hexCode.length; i += 2 ) {

//         const color = hexCode.slice( i, i+2);
//         let parsedColor = parseInt( color, 16);

//         if (i !== hexCode.length - 2 ) {
//             parsedColor = `${parsedColor}, `
//         }
//         codes += parsedColor;
//     }
    
//     return `rgb(${codes})`
    
// }

// const resRGB =  getRGBFromHex ("#ffffff");
// console.log(`resRGB2`, resRGB);

// Вариант 3

// const getRGBFromHex = (hexCode) => {

//     let codes = "";

//     for (let i = 1; i < hexCode.length; i += 2 ) {

//         const color = hexCode.slice( i, i+2);
//         let parsedColor = parseInt( color, 16);

//         // if (i !== hexCode.length - 2 ) {
//         //     parsedColor = `${parsedColor}, `
//         // }
//         // codes += parsedColor;

//         codes += (i !== hexCode.length - 2 ) ?  `${parsedColor}, ` : parsedColor;
//     }
    
//     return `rgb(${codes})`
    
// }

// const resRGB =  getRGBFromHex ("#ffffff");
// console.log(`resRGB3`, resRGB);