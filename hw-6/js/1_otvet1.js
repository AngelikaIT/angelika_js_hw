// Задание 1

// Реализовать регистрацию пользователя в валидацией пароля

// Спрашивать у пользователя имя, фамилию и пароль до тех пор,
// пока он не введет корректные значения.

// Валидными именем и фамилией явлются любые строки,
// которые содержат хотя бы 1 символ.

// Валидный пароль - это любая строка длинеее чем 6 символов
// и содержащая символы разного регистра.

// Примеры корректных паролей: AbCxx12, 1234xY, abcdeF.
// Примеры НЕ корректных паролей: 1q2w3e, 123456, xyzxyz.

// После валидации данных необходимо отформатировать имя и фамилию
// и вывести на экран с помощью alert полное имя пользователся в правильном формате.

//  Под форматированием имеется ввиду написание имени и фамилии с большой буквы.
//   Например, если юзер ввел jOhn bROWN, то в результате форматирования должно получится
//    John Brown.

// Hints: вам может понадобится цикл do while,
//  так же советуем разбивать код на отдельные функции, каждая с ОДНОЙ логической целью.

const isValidPassword = (password) =>
  password.toLowerCase() !== password &&
  password.toUpperCase() !== password.toLowerCase() &&
  password.length >= 6;

const registration = () => {
  let name;
  let surname;
  let password;
//   let validation = false;

  do {
    name = prompt("Имя: ");
    if (!name) {
      alert("Введите имя:");
      continue;
    }

    surname = prompt("Введите фамилию: ");
    if (!surname) {
      alert("Введите фамилию:");
      continue;
    }

    password = prompt("Пароль: ");
    // let abc = "qwertyuiopasdfghjklzxcvbnm";
    // let ABC = "QWERTYUIOPASDFGHJKLZXCVBNM";
    // let num = "0123456789";

    // for (let i = 0; i < password.length; i++) {
    //   if (
    //     password.length < 6 &&
    //     abc.indexOf(password[i]) === -1 &&
    //     ABC.indexOf(password[i]) === -1 &&
    //     num.indexOf(password[i]) === -1
    //   ) {
    //     alert("Cлабый пароль!");
    //   } else {
    //     validation = true;
    //   }

    // почему когда условие (password.length < 6) записано отдельно, оно работает,
    // а когда записано со всеми остальными через && оно не работает???

    // if  (password.length < 6) {
    //     alert ("Cлабый пароль!")
    // } else {
    //     validation = true;
    // };
    // }
  } while (!name || !surname || !isValidPassword(password));

  let lowerName = name.toLocaleLowerCase();
  let lowerSurname = surname.toLocaleLowerCase();

  let userName = lowerName[0].toLocaleUpperCase() + lowerName.slice(1);
  let userSurname = lowerSurname[0].toLocaleUpperCase() + lowerSurname.slice(1);

  alert(`Добро пожаловать? ${userSurname} ${userName}!`);
};

registration();
