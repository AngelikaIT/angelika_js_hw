// Работа с сервером

// API

// AJAX

// XMLHttpRequest

// https://jsonplaceholder.typicode.com/users

// const xhr = new XMLHttpRequest();
// console.log(`xhr`, xhr);

// const usersXhr = new XMLHttpRequest();
// usersXhr.onreadystatechange = () => {
//   const { readyState } = usersXhr;
//   console.log(`readyState`, readyState);
// };

// usersXhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// usersXhr.responseType = "json";
// usersXhr.send();

// события существуют слудующие:
//   - оnload
//   - onerror
//   - onreadystatechange

// usersXhr.onload = () => {
//   const users = usersXhr.response;
//   // const users = JSON.parse(result)
//   console.log(`users`, users);
// };

const renderPost = (post, author, container) => {
    const { title, body } = post;
    const { name } = author;
  
    const postContainer = document.createElement("div");
    const titleElem = document.createElement("h2");
    const nameElem = document.createElement("h4");
    const bodyElem = document.createElement("p");
  
    titleElem.innerText = title;
    nameElem.innerText = name;
    bodyElem.innerText = body;
  
    postContainer.append(titleElem, nameElem, bodyElem);
  
    container.append(postContainer)
  };
  
  const postXhr = new XMLHttpRequest();
  const BASE_URL = "https://jsonplaceholder.typicode.com";
  
  postXhr.open("GET", `${BASE_URL}/posts/1`);
  postXhr.responseType = "json";
  postXhr.send();
  
  postXhr.onload = () => {
    const { response: post } = postXhr;
    const { userId } = post;
    // const post = postXhr.response
    console.log(`post`, post);
  
    const userXhr = new XMLHttpRequest();
    userXhr.open("GET", `${BASE_URL}/users/${userId}`);
    userXhr.responseType = "json";
    userXhr.send();
  
    userXhr.onload = () => {
      console.log(`userXhr.response`, userXhr.response);
      const user =  userXhr.response
      renderPost(post, user, document.body)
    };
  };