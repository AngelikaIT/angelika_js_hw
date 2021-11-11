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

const registration = () => {

    let name;
    let surname;
    let password;
    let validation = false;
    
    do {
        name = prompt( "Имя: " );
        if ( !name ){
            alert ( "Введите имя:" );
            continue;
        };

        surname  = prompt( "Введите фамилию: " );
        if ( !surname ) {
            alert ( "Введите фамилию:" );
            continue;
        }

        password = prompt( "Пароль: " );

        if (password.toLowerCase() !== password &&
        password.toUpperCase() !== password &&
        password.length >= 6) {
            validation = true;
        } else {
            alert ("Cлабый пароль");
            continue;
        };
       
    } while (!validation) {

        let lowerName    = name.toLocaleLowerCase();
        let lowerSurname = surname.toLocaleLowerCase();

        let userName    = lowerName[0].toLocaleUpperCase() + lowerName.slice(1);
        let userSurname = lowerSurname[0].toLocaleUpperCase() + lowerSurname.slice(1);

        alert(`Добро пожаловать ${userSurname} ${userName}!`);
    };
};

registration();
