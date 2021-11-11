// 3. Написать функцию, которая может замаскировать карту,
// На вход она принимает строку, содержащую номер, а
// а возвращает замаскированую карту

// 0000111122223333 -> 0000 **** **** 3333

// const maskCreditCard = (cardNum) => {

//     const mask = "****";
//     let res = "";

//     for ( let i = 0, j = 1; i < cardNum.length; i += 4, j++) {
//         let slicedNum =  cardNum.slice(i, i + 4 );
//         console.log(`slicedNum`, slicedNum);

//         let maskingRes;
        
//         if (j === 2 || j === 3) {
//             maskingRes = mask;
//         } else {
//             maskingRes = slicedNum;
//         }       

//         if ( j !== 4 ) {
//             res += `${maskingRes} `
//         } else {
//             res += maskingRes;
//         }
//     }
//     return res;
// }

// let resMask = maskCreditCard ("0000111122223333");
// console.log( resMask);