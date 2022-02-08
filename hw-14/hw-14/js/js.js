// Homework 14
// Из массива с данными создать форму и обработать событие ее отправки.

// Вам предоставляется массив данных, коллекция, где каждый объект характеризует поле ввода,
//  которое необходимо отобразить на экране.
// Поля ввода могут быть следующих типов:
// текстовое поле (обычный инпут) - text
// селект - select
// Модель данных, описывающих неободимое поле ввода, следующая:
// element: описывает какой елемент создать: текстовое поле или select

// name: имя для поля ввода (атрибут name)

// label: значение, которое отображается в теге label для текущего поля

// options: массив вариантов option, будет присутсвовать, 
// если значение поля element = 'select', то есть текущее поле ввода - селект

// Массив options представлен в следующей модели данных:
// text: значение, которое показывается пользователю

// value: значение атрибута value тега option

// При сабмите формы страница НЕ должна перезагружаться
// Результатом сабмита формы должен быть объект, в котором хранятся все значения,
//  введенные пользователем. Ключами, по которым хранятся значения,
//   должны быть значения атрибута name соответствущего поля ввода.
// Каждое поле ввода + label к нему требуется завернуть в div.
// В форме обязательно должна содержаться button type=submit.
// Форма должна быть создана полностью средствами JavaScript. В html файле должно быть пусто,
//  максимум только элемент-контейнер, в который вы в последсвии добавите форму.
// Вы можете использовать любые стили и дополнительные элементы. Главное выполнить все по заданию.
// Примеры: Для поля ввода, которое описано следующим образом - результатом должна быть такая верстка:

// {
//   element: 'text',
//   name: 'login',
//   label: 'Логин',
// }
// <div>
//   <label for="login">Логин</label>
//   <input type="text" name="login" id="login" />
// </div>
// {
//   element: 'select',
//   name: 'fruits',
//   label: 'Выберите фрукты',
//   options: [
//     {
//       text: 'Апельсины',
//       value: 'oranges',
//     },
//     {
//       text: 'Яблоки',
//       value: 'apples',
//     },
//     {
//       text: 'Груши',
//       value: 'pears',
//     },
//   ]
// }
// <div>
//   <label for="fruits">Выберите фрукты</label>
//   <select name="fruits" id="fruits">
//     <option value="oranges">Апельсины</option>
//     <option value="apples">Яблоки</option>
//     <option value="pears">Груши</option>
//   </select>
// </div>
// При следующих вводных данных у вас должен получится примерно такой результат (стили не применялись):

const formConfig = [
  {
    element: "text",
    name: "login",
    label: "Логин",
  },
  {
    element: "text",
    name: "age",
    label: "Возраст",
  },
  {
    element: "select",
    name: "language",
    label: "Выберите язык программирования",
    options: [
      {
        text: "JavaScript",
        value: "js",
      },
      {
        text: "Java",
        value: "java",
      },
      {
        text: "Python",
        value: "python",
      },
    ],
  },
];




// функция, создающая поля из конфига
const createFields = (config) => {
    return config.map((fieldConfig) => {
        const wrapper = document.createElement("div");
        const label = document.createElement("label");
        label.setAttribute("for", fieldConfig.name);
        label.innerText = fieldConfig.label;

        let element;

        switch (fieldConfig.element) {
            case "text":
                element = document.createElement("input");
                element.setAttribute("type", "text");

                element.setAttribute("id", fieldConfig.name);
                element.setAttribute("name", fieldConfig.name);

                break;

            case "select":
                element = document.createElement("select");
                // для селекта пробегаемся по массиву options для того 
                // что бы создать варианты выбора селекта
                // аппендим получившиеся опшены в селект
                fieldConfig.options.forEach((opt) => {
                    const option = document.createElement("option");
                    option.innerText = opt.text;
                    option.setAttribute("value", opt.value);

                    element.append(option);
                });

                element.setAttribute("id", fieldConfig.name);
                element.setAttribute("name", fieldConfig.name);

                break;

            default:
                // на всякий случай можно обработать ошибку)
                console.log( ` Unhandled input type`, fieldConfig.element  );
        }

        // после свитча аппендим лейбл и получившийся елемент в div обертку
        wrapper.append(label, element);

        // возвращаем див обертку
        return wrapper;
    })
};

// функция из классной работы, превращает форм дату в обьект
const convertFormDataToObject = (formData) => {
    const data = {}
  
    for (let pair of formData.entries()) {
      console.log(`pair`, pair)
      data[pair[0]] = pair[1] 
    };
  
    return data;
  };

//   обработчик сабмита, не забываем про превент дефолт
const handleSubmit = (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    const data = convertFormDataToObject(formData);

    console.log( ` data`, data  );
};

// сщздаем элемент формы
const form = document.createElement("form");
// получаем массив элементов с полями 
const fields = createFields(formConfig);

// циклом пробегаемся по полям и добавляем каждое в форму
fields.forEach((item) => {
    form.append(item);
});

// добавляем кнопку в форму
const submitBtn = document.createElement("button");
submitBtn.setAttribute("type", "submit");
submitBtn.innerText = "Подтвердить";
form.append(submitBtn);

//  добавляем форму на страницу
document.body.append(form);

// вешаем обработчик
form.addEventListener("submit", handleSubmit);