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

    const createProductCard =(arr) => {
        const cardContainer = document.createElement("div");


        // вот в этой строчке особо тоже смысла нет, ибо объект не возможно вставить в верстку div
        let productCard = arr
            .map( () => `<div>${product}</div>` )
            .join("");
        
        
        // вынять значения из productCard не возможно , ибо это еще не объект , ты сам массив до этого не разбираешь чтобы вынять объект
        let product = `
        <h2>${productCard.name}</h2>
        <h3>${productCard.brand}</h3>
        <ul>
            ${productCard.properties.map((textItem) => `<li>${textItem}</li>`).join("")}
        </ul>
        `

        // возвращать из функции container нет смысла, ибо ты его нигде потом не используешь
        return cardContainer;
    }

    let res = createProductCard(products);


    // один из способов как можно сделать, разобрать arr - сформировать массив `` из map , при этом на выходе преобразовать его в строку - и все это засунуть как html через метод innerHTML
    const createProductCard = (arr) => {
      const cardContainer = document.createElement("div");
    
      cardContainer.innerHTML = arr
        .map((prod) => {
          return `<h2>${prod.name}</h2>
                <h3>${prod.brand}</h3>
                <ul>
                    ${prod.properties
                      .map((textItem) => `<li>${textItem}</li>`)
                      .join("")}
                </ul>
                `;
        })
        .join("");
    
      document.body.append(cardContainer);
    };
    
    let res = createProductCard(products);