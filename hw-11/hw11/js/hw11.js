// Homework 11
// Реализовать функцию, которая принимает на вход массив с данными (товары)
//  и рендерит на страницу карточки товаров.

// Пример масисива данных, с которыми должна работать функция, используйте их для теста:

// const products = [
//   {
//     name: "Iphone 12",
//     brand: "Apple",
//     price: 3200000,
//     properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
//   },
//   {
//     name: "Galaxy S20 Ultra",
//     brand: "Samsung",
//     price: 2900000,
//     properties: ["120 hz screen", "Water resistance"],
//   },
//   {
//     name: "MI 9",
//     brand: "Xiaomi",
//     price: 1300000,
//     properties: ["Best price", "Pay less - get more!"],
//   },
// ];
// В результате работы функции на странице должна появится вот такая верстка: Данные на старнице

// Для реазизации задачи используйте разные способы, 
// как и innerHTML с шаблонными строками, так и метод append()

const products = [
      {
        name: "Iphone 12",
        brand: "Apple",
        price: 3200000,
        properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
      },
      {
        name: "Galaxy S20 Ultra",
        brand: "Samsung",
        price: 2900000,
        properties: ["120 hz screen", "Water resistance"],
      },
      {
        name: "MI 9",
        brand: "Xiaomi",
        price: 1300000,
        properties: ["Best price", "Pay less - get more!"],
      },
    ];

//     const createProductCard =(arr) => {
//       const cardContainer = document.createElement("div");
//       cardContainer.innerHTML = `
//         ${arr
//           .map( (prod) => {
//             return `
//               <h3>${prod.name}</h3>
//               <h4>${prod.brand}</h4>
//               <ul>
//                 ${prod.properties
//                   .map( (prop) => {
//                     return `
//                     <li>
//                       ${prop}
//                     </li>
//                     `;
//                   })
//                   .join("")}
//               </ul>
//             `;
//           })
//         .join("")}
//       `;
//       document.body.append(cardContainer);
//     }

//     let res = createProductCard(products);
// !----------------------------------------------------------

const createProductCard =(arr) => {
  const cardContainer = document.createElement("div");

  arr.forEach( (prod) => {
    const prodContainer = document.createElement("div");
    const prodTitle = document.createElement("h3");
    const prodSubtitle = document.createElement("h4");
    const prodPropertiesList = document.createElement("ul");
      prod.properties.forEach( (prop) => {
        const listItem = document.createElement("li");
        listItem.innerText = prop;
        prodPropertiesList.append(listItem);
      });

      prodTitle.innerText = prod.name;
      prodSubtitle.innerText = prod.brand;

      prodContainer.append( prodTitle, prodSubtitle, prodPropertiesList);
      cardContainer.append(prodContainer);
    });
    document.body.append(cardContainer);
}
createProductCard(products);