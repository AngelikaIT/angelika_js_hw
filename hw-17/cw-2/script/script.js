// Promise

// Рассмотрим следующую задачу:
// - взять данные с сервера (асинхронная операция)
// - обработать данные (асинхронная операция)
// - вывести данные в консоль

const data = {
    name: "user",
    age: 25,
    role: "admin",
  };
  
  // console.log("Getting data...");
  
  // setTimeout(() => {
  //   // console.log("Data recieved");
  //   console.log(`data`, data);
  
  //   // console.log("Processing data...");
  //   setTimeout(() => {
  //     // console.log("Data processed");
  //     const birthYear = new Date().getFullYear() - data.age;
  //     const processed = {
  //       ...data,
  //       birthYear,
  //     }
  //     console.log(`processed`, processed)
  //   }, 2000);
  // }, 2000);
  
  // const getUser = () => data;
  
  // const processUser = (user) => {
  //   const birthYear = new Date().getFullYear() - user.age;
  //   return {
  //     ...user,
  //     birthYear,
  //   }
  // }
  
  // const getProcessedData = (get, process) => {
  //   setTimeout(() => {
  //     const data = get()
  
  //     setTimeout(() => {
  //       const processed = process(data);
  //       console.log(`processed`, processed)
  
  //       return processed
  //     }, 1000)
  //   }, 1000)
  // }
  
  // const user = getProcessedData(getUser, processUser);
  
  // console.log(`user`, user)
  
  // Promise
  
  // const promise = new Promise((resolve, reject) => {
  //   console.log("Gettting data...");
  
  //   setTimeout(() => {
  //     // console.log(`data`, data)
  
  //     // resolve(data)
  //     reject("Ooops!");
  //   }, 1000);
  // });
  
  // console.log(`promise`, promise);
  
  // promise
  //   .then((result) => {
  //     console.log(`promise fullfilled`, promise);
  
  //     console.log(`result`, result);
  //   })
  //   .catch((error) => {
  //     console.log(`promise rejected`, promise);
  
  //     console.log(`error`, error);
  //   })
  //   .finally(() => {
  //     console.log(`Promise FINALLY`, promise);
  //   });
  // then
  // catch
  // finally
  
  // for(let i = 0; i < 3; i++) {
  //   console.log(`i`, i)
  // }
  
  // const getUser = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(data);
  //     }, 1500);
  //   });
  // };
  
  // const processUser = (user) => {
  //   const birthYear = new Date().getFullYear() - user.age;
  //   const processed = {
  //     ...user,
  //     birthYear,
  //   };
  
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(processed);
  //     }, 1500);
  //   });
  // };
  
  // getUser()
  //   .then((result) => {
  //     processUser(result)
  //       .then((user) => console.log(`user`, user))
  //   }
  // );
  
  // getUser()
  //   .then((result) => {
  //     return processUser(result);
  //   })
  //   .then((user) => {
  //     console.log(`user`, user);
  //   });
  
  
  // Функция sleep
  
  // Попрактикуемся с промисом:
  // - реализуем функцию, которая позволит подождать выполнение
  // кода, то есть выполнить некоторую задержку.
  // Время задержки должно указываться программистом из-вне.
  
  
  const sleep = (delay) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, delay)
    })
  }
  
  // sleep(2000).then(() => console.log('AAAA'))
  
  // sleep(1500).then(() => {
  //   console.log("Waited 1.5 seconds");
  // });
  
  
  // Задача:
  // - "отправить" форму на сервер
  // - пока идет запрос поля должны быть disabled, а в кнопке
  //   должен крутиться прелоадер
  // - после "ответа" сервера вернуть форму в привычное состояние
  
  const form = document.getElementById("login-form");
  const preloader = document.getElementById("preloader");
  const inputs = form.querySelectorAll("input");
  const button = form.querySelector("button");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    toggleDisabled(button, ...inputs)
    toggleButtonLoading()
  
    sleep(1500).then(() => {
      toggleDisabled(button, ...inputs)
      toggleButtonLoading()
    })
  }
  
  const toggleDisabled = (...elements) => {
    console.log(`elements`, elements);
  
    elements.forEach((elem) => {
      if(elem.hasAttribute('disabled')) {
        elem.removeAttribute('disabled')
      } else {
        elem.setAttribute('disabled', '');
      }
    })
  }
  
  const toggleButtonLoading = () => {
    preloader.classList.toggle("hidden");
  };
  
  
  form.addEventListener('submit', handleSubmit)