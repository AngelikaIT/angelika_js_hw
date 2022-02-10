// Как все устроено под капотом? Асинхронность кода. Event Loop


































for (let i = 0; i < 2; i++) {
    const random = Math.random();
    console.log(random);
  }
  
  
  
  function sayHello() {
    console.log("Hello!");
  }
  setTimeout(sayHello, 2000);
  
  
  
  $.on('button', 'click', function onClick() {
    console.log('clicked')
   });
   
   
   function sayHello() {
     console.log("Hello!");
   }
   setTimeout(sayHello, 2000);
   
   
   
   for (let i = 0; i < 2; i++) {
     const random = Math.random();
     console.log(random);
   }