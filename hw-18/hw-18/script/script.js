// Homework 18
// Реализовать функционал получения постов и комментариев к ним с сервера.

// Получить список всех постов с эндпоинта https://jsonplaceholder.typicode.com/posts
//  и отрисовать их на странице.
// В каждом посте должна находится кнопка с текстом Show comments, 
// которая отвечает за получение комментариев к этому конкретному посту.
// При нажатии на кнопку, на сервер по адресу 
// https://jsonplaceholder.typicode.com/posts/{postId}/comments 
// (где ВМЕСТО postId должeн находится id поста) отправляется запрос,
//  к которому необходимо запросить комментарии.
// Полученные комментарии нужно отрендерить в посте 
// (где-то под ним, выбов визуального оформления остается за вами).
// Когда комментарии отрендерены, текст в кнопке необходимо заменить на Hide comments.
// Повторное нажатие на кнопку (если комменты уже отрендерены), удаляет их с поста. 
// Текст кнопки снова меняется на Show comments.
// Документация к API: https://jsonplaceholder.typicode.com/

// Пример работы:

// c разбора:

const container = document.getElementById("posts");

const postsRequest = new XMLHttpRequest();
postsRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
postsRequest.responseType = "json";

postsRequest.send();

// подвешиваемся и ждем загрузку данных из сервера, 
// достаем массив обьектов с сервера response с помощью деструктуризации
// и дальше рендерим их на страницу, проходим по массиву map...

postsRequest.onload = () => {
    const { response } = postsRequest;
    renderPosts(response, container);
};

const handleCommentsButtonClick = ( event, post ) => {
    // понимаем через id  кому куда и что нужно грузить
    // делаем новый запрос  new XMLHttpRequest() уже по определенной ${id} 
    //  взятой с кнопки с дива с ${id} с сервера, берем комент и грузим его в комент контейнер
    // меняем текст кнопки на скрыть комент
    // если при проверке нет атрибута data-comments-shown
    // а если дата атрибут имеется при ивенте, то мы его удаляем и чистим контейнер с коментом, 
    // присваивая пустую строку и меняем текст кнопки на показать комент 
    const { id } = post;
    const commentsContainer = document
        .getElementById(post.id)
        .querySelector(".comments-container");

        if (post.hasAttribute("data-comments-shown")) {
            commentsContainer.innerHTML = "";
            post.removeAttribute("data-comments-shown");
            event.target.innerText = "Show comments";
        } else {
            post.setAttribute("data-comments-shown", "");
            const commentsRequest = new XMLHttpRequest();
            commentsRequest.open(
                "GET", `https://jsonplaceholder.typicode.com/posts/${id}/comments`
            );
            commentsRequest.responseType = "json";
            commentsRequest.send();

            commentsRequest.onload = () => {
                const { response } = commentsRequest;

                renderComments(response, commentsContainer);
                event.target.innerText = "Hide comments";
            };
        };
};

const renderComments = (commentsList, commentsContainer) => {
    const comments = commentsList.map(({ body }) => {
        const comment = document.createElement("p");
        comment.classList.add("comment");
        comment.innerText = body;
        return comment;
    });

    commentsContainer.append(...comments);
};

const renderPosts = ( postsList, container ) => {
    // формируем массив с обьектами, которые прилетели с сервера,
    // map проходим по массиву с серевера и с пом деструкт достаем { id, title, body }
    // таким образом формируется новый массив с обьектами { id, title, body }
    // для каждого об создаем див, присваиваем ему id с сервера, и добавляем стили
    // сщздаем элементы для контента в диве. добавляем им стили, заполняем текстом с обьекта
    // вешаем обработчик, при нажатии на кнопку апендим закидываем весь контент, все созданые элементы в див
    // дальше эти дивы закидываем в контейнер на странице
    const posts = postsList.map(({ id, title, body }) => {
        const postContainer = document.createElement("div");
        postContainer.id = id;
        postContainer.classList.add("post");

        const titleElem = document.createElement("h3");
        const bodyElem = document.createElement("p");
        const commentsElem = document.createElement("div");
        const detailsBtn = document.createElement("button");

        commentsElem.classList.add("comments-container");
        detailsBtn.classList.add("btn");

        titleElem.innerText = title;
        bodyElem.innerText = body;
        detailsBtn.innerText = "Show comments";

        detailsBtn.addEventListener("click", (event) => 
            handleCommentsButtonClick(event, postContainer)
        );

        postContainer.append( titleElem, bodyElem, commentsElem, detailsBtn );

        return postContainer;
    });

    container.append(...posts);
}