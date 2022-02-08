// Homework 13
// Реализовать слайд-шоу из фото на javascript. 
// Ваша задача сделать реализовать функционал переключения изображений с помощью кнопок.

// Заранее в верстке должны быть добавлены все изображения.
// При загрузке страницы - прячутся все изображения кроме первого 
// (вы также можете спрятать их заранее).
// Под картикой должны быть оборажены 2 кнопки - Prev и Next.
// При нажатии на кнопку Next изображение должно переключиться на следующее.
//  Соотвественно при нажатии на Prev - на предыдущее.
// ВАЖНО! Переключение должно происходить бесконечно. 
// То есть, если в данный момент отображено последнее изображение,
//  то при попытке переключиться на следующее, пользователю должно показаться первое изображение.
//   То же самое наоборот, если отображено первое изображение - при переключении назад показывать последнее.
// ЕЩЕ ВАЖНО! Ваш код должен рабоать для любого количества слайдов. Верстка может измениться,
//  при этом js код должен оставаться универсальным.
// Изображения находятся в папке /images но вы также можете взять любые. 
// Стили так же остаются на ваше усмотрение, но помните, что вы фронтенд-разработчики, 
// и у вас должно быть чувство прекрасного :)

const slides = [...document.querySelectorAll(".slide")];
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const hideSlidesOnLoad = () => {
    const slidesToHide = slides.slice(1);

    slidesToHide.forEach((slide) => {
        slide.classList.add("hidden");
    });
};

// 1. при загрузке страницы - убираем все слайды кроме первого, если это не было сделано в верстке
// 2. важно использовать DOMContentLoaded, а не load, так как это сщбытие происходит раньше
// 3. если класс для того чтобы спрятать картинки был написан сразу в верстке, то этот пункт пропускаем

// вешаем обработчик на window, следим с помощ "DOMContentLoaded" когда вся страница будет загружена, 
// вешаем на нее функцию hideSlidesOnLoad, кот нужна для того чтоб навесить прячущий класс на все картинки кроме первой
window.addEventListener("DOMContentLoaded", hideSlidesOnLoad)

// индекс слайда, который показан, по дефолту 0
let currentSlideIndex = 0;

const showNextSlideV2 = () => {
    // слайду по текущему индексу добавляем "прячущий" класс
    slides[currentSlideIndex].classList.add("hidden");

    // проверка, если слайд последний
    if (currentSlideIndex === slides.length - 1) {
        slides[0].classList.remove("hidden");
        currentSlideIndex = 0;
    } else {
        slides[currentSlideIndex + 1].classList.remove("hidden");
        currentSlideIndex++;
    }
};

const ShowPrevSlideV2 = () => {
    //  слайду по текущему индексу добавляем прячущий класс
    slides[currentSlideIndex].classList.add("hidden");

    // проверка, если слайд первый
    if (currentSlideIndex === 0) {
        // то показываем последний
        slides[slides.length - 1].classList.remove("hidden");
        // переводим индекс на последний элемент
        currentSlideIndex = slides.length - 1;
    } else {
        // в противном случае просто показываем предыдущий
        slides[currentSlideIndex - 1].classList.remove("hidden");
        currentSlideIndex--;
    }
}

// вешаем на кнопку обработчик событий, кот слушает клик, и при нажатии на кнопку вызывает функцию
prevBtn.addEventListener("click", ShowPrevSlideV2);
nextBtn.addEventListener("click", showNextSlideV2 );