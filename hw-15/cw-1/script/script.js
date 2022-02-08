// Destructuring

// Object

const user = {
    name: "Jack",
    age: 41,
  };
  
//   как бы мы достали значения без деструктуризации
  const userName = user.name;
  const userAge = user.age;
  
//   используя дестр
  // const { name, age } = user;
  // console.log(`name`, name);
  // console.log(`age`, age);
  
  const rectangle = {
    width: 200,
    height: 100,
  };
  
  // const rectangleWidth = rectangle.width;
  // const rectangleHeight = rectangle.height;
  const rectangleColor = rectangle.color;
  
  // const { width, height, color } = rectangle;
  // console.log(`width`, width);
  // console.log(`height`, height);
  // console.log(`color`, color)
  
  // Переименование при деструктурирующем присваивании
  
  const person = {
    name: "Nikita",
    hobby: "music",
  };
  
  // const personName = person.name;
  
  const { name: personName, hobby: personHobby } = person;
  // console.log(`personName`, personName);
  
  const obj = {
    w: 100,
    h: 200,
    d: 50,
  };
  
  // const { d: depth, w: width, h: height } = obj;
  // console.log(`depth`, depth);
  
  // Значения по умолчанию
  const client = {
    login: "sam",
  };
  
  const admin = {
    login: "peter_adm",
    role: "admin",
  };
  
  const { login, role = "client" } = admin;
  // console.log(`login, role`, login, role)
  
  const options = {
    title: "Menu",
  };
  
  const { width = 100, height = 200, title } = options;
  // console.log(`height`, height)
  
  const test = {
    x: null,
    y: undefined,
    z: 0,
  };
  
  // const { x = "x", y = "y", z = "z", c = "c" } = test;
  
  // console.log(`x`, x); // null
  // console.log(`y`, y); // y
  // console.log(`z`, z); // 0
  // console.log(`c`, c); // c
  
  // Деструктуризация массива
  
  const numbers = [1, 2, 3, 4, 5];
  // const a = numbers[0];
  // const b = numbers[1];
  
  const [a, b] = numbers;
  
  // console.log(`a`, a);
  // console.log(`b`, b);
  
  const n = numbers[2];
  
  // const [, ,n] = numbers;
  
  // console.log(`n`, n);
  
  const ordersQueue = [
    {
      id: "2452df41",
      item: "tv",
    },
    {
      id: "9230428d",
      item: "phone",
    },
    {
      id: "mk252el2",
      item: "scooter",
    },
  ];
  
  // const firstOrder = ordersQueue[0];
  const [firstOrder] = ordersQueue;
  
  const characterfullName = "John Wick";
  // console.log(`characterfullName.split(' ')`, characterfullName.split(" "));
  const [charName, charSurname] = characterfullName.split(" ");
  // console.log(`charName`, charName);
  // console.log(`charSurname`, charSurname);
  
  // Вложенная деструкрутизация
  
  const family = {
    son: {
      age: 12,
      name: "Kyle",
      hobbies: ["music", "games"],
    },
    dad: {
      age: 42,
      name: "Nick",
      hobbies: ["fishing", "sports"],
    },
    mom: {
      age: 39,
      name: "Ann",
    },
  };
  
  const {
    dad: {
      hobbies: [primaryHobby],
    },
    son: { name: sonName, hobbies: sonHobbies },
  } = family;
  
  // console.log(`primaryHobby`, primaryHobby)
  // console.log(`sonName`, sonName)
  // console.log(`sonHobbies`, sonHobbies)
  
  // const drawRectangle = (width, height, color, content) => {
  //   const rect = document.createElement("div");
  
  //   rect.style.width = `${width}px`;
  //   rect.style.height = `${height}px`;
  //   rect.style.backgroundColor = color;
  //   rect.innerHTML = content;
  
  //   document.body.append(rect);
  // };
  
  // drawRectangle(100, 100, "red", "Hello world");
  
  const drawRectangle = ({ width = 50, height, color, content }) => {
    const rect = document.createElement("div");
  
    rect.style.width = `${width}px`;
    rect.style.height = `${height}px`;
    rect.style.backgroundColor = color;
    rect.innerHTML = content;
  
    document.body.append(rect);
  };
  
  // drawRectangle({
  //   height: 100,
  //   color: "blue",
  //   content: "Hello destructuring",
  //   // width: 300,
  // });
  
  const handleInput = (event) => {
    // const { target: input } = event;
    // const { value } = input;
  
    const {
      target: { value },
      target: input,
    } = event;
  
    console.log(`value`, value);
    console.log(`input`, input);
  };
  
  const input = document.createElement("input");
  input.addEventListener("input", handleInput);
  document.body.append(input);
  
  const getSalariesData = (salaries) => {
    const sum = salaries.reduce((total, value) => total + value, 0);
    const average = sum / salaries.length;
  
    // return {
    //   sum,
    //   average,
    // };
    return [sum, average];
  };
  
  const [salSum, salAvg] = getSalariesData([300, 200, 100, 700]);
  
  // console.log(salSum, salAvg)
  
  // Деструктуризация в перебирающих методах
  
  const usersList = [
    {
      name: "sam",
      role: "client",
    },
    {
      name: "john",
      role: "admin",
    },
    {
      name: "peter",
      role: "client",
    },
    {
      name: "jack",
      role: "admin",
    },
  ];
  
  // const adminList = usersList.filter((user) => user.role === "admin");
//   обращаться сразу к { role } чтоб достать всех "admin" - этот способ деструкт супер часто используется
  const adminList = usersList.filter(({ role }) => role === "admin");
  // console.log(`adminList`, adminList);
  
  const exampleObj = {
    a: "a value",
    b: "b value",
    c: "c value",
  };
  
  const entries = Object.entries(exampleObj);
  // console.log(`entries`, entries)

//   используя Object.entries мы получим массив мвссивов, в котором 
// всегда по нулевому индексу лежит ключ, а по первому индексу значение с объекта
// т.е., если нужно перебрать объект с помощью цикла, 
// на каждой итерации прилетает массив, и мы сразу можем его деструктуризовать, 
// по нулевому инд ключ, по первому значение

  
  entries.forEach(([key, value]) => {
    // console.log(`key`, key);
    // console.log(`value`, value);
  });
  
  // Rest и spread операторы
  
  const data = {
    isAgree: false,
    login: "sam",
    email: "sam@gmail.com",
    password: "1q2w3e",
  };
  
  const { isAgree, ...restValues } = data;
  // console.log(`isAgree`, isAgree);
  // console.log(`restValues`, restValues);
  
  const queue = ["jack", "john", "peter"];
  const [firstGuest, ...restGuests] = queue;
  
  // console.log(`firstGuest`, firstGuest);
  // console.log(`restGuests`, restGuests);
  
  const calc = (operation, ...numbers) => {
    // console.log(`operation`, operation)
    // console.log(`numbers`, numbers)
  
    switch (operation) {
      case "add":
        return numbers.reduce((a, b) => a + b, 0);
      case "multiply":
        return numbers.reduce((a, b) => a * b, 1);
    }
    // return a + b + c
  };
  
  const res = calc("add", 1, 2, 3);
  const res2 = calc("multiply", 2, 2, 2);
  // console.log(`res`, res)
  // console.log(`res2`, res2)
  
  // spread
  // ...
  
  const product = {
    name: "TV",
    id: "123",
    price: "200",
  };
  
  const productUpdates = {
    discount: 50,
    price: "100",
  };
  
  const updatedProduct = {
    ...product,
    ...productUpdates,
  };
  
  // console.log(`updatedProduct`, updatedProduct);
  
  
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  
  const mergedArr = [...arr1, ...arr2];
  // console.log(`mergedArr`, mergedArr);
  
  const exampleArr = [1, 2, 3];
  const newArr = [0, ...exampleArr, 4];
  // console.log(`newArr`, newArr);
  
  
  const numbersList = [17, 43, 5, 4, 8];
  
  
  // const max = Math.max(1, 3, 2, 7);
  const max = Math.max(...numbersList);
  
  console.log(`max`, max)