// Задание:
// Создать форму с валидацией полей.
// 1. Форма должна содержать следующие поля:
//   - login
//   - email
//   - password
//   - чекбокс, который подтвержадет согласие пользователя
//     на обработку данных
// 2. Сабмит формы не должен перезагружать страницу
// 3. Форма должна проходить валидацию по следующим правилам:
//   - все поля должны быть заполнены
//   - пароль должен содержать минимум 6 символов
//   - логин должен быть уникальным (массив занятых логинов
//     для примера предоставляется)
// 4. Валидация проходит в момент отправки формы, если
//    пользователь ввел некоректные данные, то отправка
//    прекращается, а под те инпуты, в которые введены
//    некоректные данные, выводится сообщение об ошибке
// 5. Если не стоит галочка о согласии обработки
//    данных - форма не может быть отправлена
// 6. В результате успешного сабмита формы (данные валидны),
//    отобразить в консоли браузера объект, содержащий емейл логин
//    и пароль

const takenLogins = ["alexxx", "john_cena", "sam", "ANDROMEDA2000"];

// сабмит формы
// провести валидацию
// {
//  isFormValid: true || false,
//  erorrs: {
//    login: 'Вы не ввели логин!',
//    password: 'Вы ввели короткий пароль!'
//  }
// }
// если данные валидны - вывести значния в консоль
// если не валидны, подсветить инпуты с ошибочными значениями, вывести
// под них текст ошибки

// при изменении чекбокса, проверять его значение, в зависимости
// от него убирать или добалять атрибут disabled кнопки

const form = document.getElementById("form");
const formInputs = document.querySelectorAll("input[type=text]");
const agreeCheckbox = document.getElementById("agree");
const submitBtn = document.getElementById("submit");

const loginInput = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const validationRules = {
  email: [
    {
      validator: (value) => Boolean(value),
      errorMessage: "Вы не ввели email",
    },
  ],
  login: [
    {
      validator: (value) => Boolean(value),
      errorMessage: "Вы не ввели логин",
    },
    {
      validator: (value) => !takenLogins.includes(value),
      errorMessage: "Этот логин уже занят",
    },
  ],
  password: [
    {
      validator: (value) => Boolean(value),
      errorMessage: "Вы не ввели пароль",
    },
    {
      // validator: (value) => value !== "" && value.length >= 6,
      validator: (value) => (value === "" ? true : value.length >= 6),
      errorMessage: "Пароль должен содержать 6+ символов",
    },
  ],
  realName: [
    {
      validator: (value) => Boolean(value),
      errorMessage: "Вы не ввели имя",
    },
    {
      validator: (value) => value[0].toUpperCase() === value[0],
      errorMessage: "Имя должно начинаться с большой буквы"
    }
  ]
};

const validateForm = (values, rules) => {
  const errors = {};
  let isFormValid = true;

  for (let name in values) {
    const currentRules = rules[name];
    const value = values[name];

    currentRules.forEach((rule) => {
      const isValid = rule.validator(value);

      if (!isValid) {
        isFormValid = false;
        errors[name] = rule.errorMessage;
      }
    });
  }

  return {
    isFormValid,
    errors,
  };
};

// const simpleValidateForm = (login, email, password) => {
//   // console.log(`login`, login);
//   // console.log(`email`, email);
//   // console.log(`password`, password);

//   const errors = {};
//   let isFormValid = true;

//   //   - логин должен быть уникальным (массив занятых логинов
//   //     для примера предоставляется)

//   if (!login) {
//     isFormValid = false;
//     errors.login = "Вы не ввели логин";
//   }

//   if (!email) {
//     isFormValid = false;
//     errors.email = "Вы не ввели email";
//   }

//   if (!password) {
//     isFormValid = false;
//     errors.password = "Вы не ввели пароль";
//   }

//   if (password !== "" && password.length < 6) {
//     isFormValid = false;
//     errors.password = "Пароль должен содержать 6+ символов";
//   }

//   if (takenLogins.includes(login)) {
//     isFormValid = false;
//     errors.login = "Этот логин уже занят";
//   }

//   return {
//     isFormValid,
//     errors,
//   };
// };

// когда стоит галочка на обработку данных, кнопка Отправить активна

const handleCheckboxChange = (event) => {
  const checked = event.target.checked;

  if (checked) {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", "");
  }
};

const highlightErroredInputs = (errors) => {
  for (let name in errors) {
    const text = errors[name];

    const erroredInput = form.querySelector(`input[name=${name}]`);
    // console.log(`erroredInput`, erroredInput);
    const errorTextElement = form.querySelector(
      `input[name=${name}] ~ .errorMessage`
    );
    // console.log(`errorTextElement`, errorTextElement);
    erroredInput.setAttribute("data-invalid", "");
    errorTextElement.innerText = text;
  }
};

const handleInput = (event) => {
  const currentInput = event.target;

  if (currentInput.hasAttribute("data-invalid")) {
    currentInput.removeAttribute("data-invalid");
  }

  const errorTextElement = form.querySelector(
    `input[name=${currentInput.name}] ~ .errorMessage`
  );

  errorTextElement.innerText = "";
};

const convertFormDataToObject = (formData) => {
  const formValues = {};

  for (let pair of formData.entries()) {
    formValues[pair[0]] = pair[1];
  }

  return formValues;
};

const handleFormSubmit = (event) => {
  event.preventDefault();

  // const loginValue = loginInput.value;
  // const emailValue = emailInput.value;
  // const passwordValue = passwordInput.value;

  // const validationResult = simpleValidateForm(
  //   loginValue,
  //   emailValue,
  //   passwordValue
  // );

  const formData = new FormData(event.target);
  formData.delete("agree");
  const values = convertFormDataToObject(formData);
  console.log(`values`, values);

  const validationResult = validateForm(values, validationRules);

  if (!validationResult.isFormValid) {
    highlightErroredInputs(validationResult.errors);
  } else {
    console.log(values);
  }
  // console.log(`validationResult`, validationResult);
};

agreeCheckbox.addEventListener("change", handleCheckboxChange);
form.addEventListener("submit", handleFormSubmit);
formInputs.forEach((input) => {
  input.addEventListener("input", handleInput);
});