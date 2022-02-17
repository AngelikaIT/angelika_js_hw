// Методы запросов

// GET - получение
// POST - создание
// PATCH - редактирование (частичное)
// PUT - замена
// DELETE - удаление

// {id: 1, name: 'Nikita', age: 25}

// /users/1, PATCH
// {"name": "Alex"}

// {id: 1, name: 'Alex', age: 25}

// /users/1, PUT
// {"age": 26}

// {"age": 26}

// Структура запроса
// - body
// - headers
// - path параметры
// - query параметры

const BASE_URL = "https://jsonplaceholder.typicode.com";

// const postXhr = new XMLHttpRequest();

// postXhr.open("GET", `${BASE_URL}/posts/1`);
// postXhr.responseType = "json";
// postXhr.send();

// Path
// /users/1
// /posts/1
// /wallets/1
// /available-products/user/1/role/2

// Query параметры запроса

// /users?id=1
// /users?name=peter
// /workers?isActive=true&position=senior
// /posts?filter[content]=Hello&sort[date]=asc

// const postXhr = new XMLHttpRequest();

// postXhr.open("GET", `${BASE_URL}/posts/1?isActive=true&position=senior`);
// postXhr.responseType = "json";
// postXhr.send();

// POST

// const newPost = {
//   title: "Title",
//   body: "Some text",
//   userId: 1,
// };

// const createPostRequest = new XMLHttpRequest();
// createPostRequest.responseType = "json";
// createPostRequest.open("POST", `${BASE_URL}/posts`);
// createPostRequest.send(JSON.stringify(newPost));

// createPostRequest.onload = () => {
//   console.log(`createPostRequest.response`, createPostRequest.response);
// };

// const postPatch = {
//   title: "New Title",
// };

// const patchUserRequest = new XMLHttpRequest();
// patchUserRequest.responseType = "json";
// patchUserRequest.open("PATCH", `${BASE_URL}/posts/42`);
// patchUserRequest.send(JSON.stringify(postPatch));

// patchUserRequest.onload = () => {
//   console.log(`patchUserRequest.response`, patchUserRequest.response);
// };

// PUT

// const updatedPost = {
//   body: "some updated post text",
//   userId: 70,
// };

// const updatePostRequest = new XMLHttpRequest();
// updatePostRequest.responseType = "json";
// updatePostRequest.open("PUT", `${BASE_URL}/posts/32`);
// updatePostRequest.send(JSON.stringify(updatedPost));

// updatePostRequest.onload = () => {
//   console.log(`updatePostRequest.response`, updatePostRequest.response);
// };

// DELETE запрос

// const deletePostRequest = new XMLHttpRequest();
// deletePostRequest.responseType = "json";
// deletePostRequest.open("DELETE", `${BASE_URL}/posts/1`);
// deletePostRequest.send();

// deletePostRequest.onload = () => {
//   console.log(`updatePostRequest.response`, deletePostRequest.response);
// };

// 1xx — информационные коды.
// 2xx — успешная обработка.
// 3xx — перенаправление (редирект).
// 4xx — ошибка пользователя.
// 5xx — ошибка сервера.

// const testRequest = new XMLHttpRequest();

// testRequest.open("GET", `${BASE_URL}/unknown`);
// testRequest.responseType = "json";
// testRequest.send();

// testRequest.onload = () => {
//   console.log(`testRequest.response`, testRequest.response)
// }

// const testRequest = new XMLHttpRequest();

// testRequest.open("GET", `${BASE_URL}/posts/null`);
// testRequest.responseType = "json";
// testRequest.send();

// testRequest.onload = () => {
//   console.log(`testRequest.response`, testRequest.response)
// }

// 400 - Bad Request
// 401 - Unauthorized
// 403 - Forbidden

// const testRequest = new XMLHttpRequest();

// testRequest.open("PUT", `${BASE_URL}/posts/11111`);
// testRequest.responseType = "json";
// testRequest.send(
//   JSON.stringify({
//     id: 1,
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   })
// );

// testRequest.onload = () => {
//   console.log(`testRequest.response`, testRequest.response);
// };

// Обработка ошибок

// onerror

// const errorReq = new XMLHttpRequest();
// const method = "GET";
// const url = "https://developer.mozilla.org/";

// errorReq.open(method, url);

// errorReq.onload = () => {
//   console.log("Request finished");
// };

// errorReq.onerror = () => {
//   console.log("Ooops something went wrong");
// };

// errorReq.send();

// const getPostRequest = new XMLHttpRequest();

// getPostRequest.open("GET", `${BASE_URL}/posts/1`);
// getPostRequest.responseType = "json";
// getPostRequest.send();

// getPostRequest.onload = () => {
//   console.log(`getPostRequest`, getPostRequest.response);
//   // const { title } = getPostRequest.response;

//   const { status } = getPostRequest;
//   console.log(`status`, status);
//   // console.log(`title`, title);
//   if (status === 200 || status === 201) {
//     console.log("success");
//     const { title } = getPostRequest.response;

//     console.log(title);
//   } else {
//     alert("Something went wrong");
//   }
// };

// getPostRequest.onerror = () => {
//   alert("OOOPS!");
// };

const form = document.getElementById("findUserForm");
const userIdInput = document.getElementById("userId");
const userContainer = document.getElementById("userContainer");

const renderUser = ({ name, email, phone }) => {
  console.log("user....");

  const nameParagraph = document.createElement("p");
  const emailParagraph = document.createElement("p");
  const phoneParagraph = document.createElement("p");

  nameParagraph.innerText = name;
  emailParagraph.innerText = email;
  phoneParagraph.innerText = phone;

  userContainer.innerHTML = "";
  userContainer.append(nameParagraph, emailParagraph, phoneParagraph);
};

const handleFindUser = (event) => {
  event.preventDefault();

  const userId = userIdInput.value;

  const getUserByIdRequest = new XMLHttpRequest();
  getUserByIdRequest.open("GET", `${BASE_URL}/users/${userId}`);
  getUserByIdRequest.responseType = "json";
  getUserByIdRequest.send();

  getUserByIdRequest.onload = () => {
    const { status } = getUserByIdRequest;

    if (status === 200) {
      renderUser(getUserByIdRequest.response);
    } else {
      alert("User not found!");
    }
  };
};

form.addEventListener("submit", handleFindUser);