const swiper = new Swiper('.main-slider', {
    spaceBetween: 30,

    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        }
    }
});

let burger = document.querySelector('.menu-burger');
let close = document.querySelector('.header__menu-close');
let menuMob = document.querySelector('.header');

burger.addEventListener('click', () => {
    menuMob.style.display = 'block';
})

close.addEventListener('click', () => {
    menuMob.style.display = 'none';
})



const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__button-play');

buttonModal.addEventListener('click', (e) => {
    modalWindow.classList.add('active');
});

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner'); //Отлавливается клик по modal__inner

    if (!isModal) {
        modalWindow.classList.remove('active');
    }; //Закрываем модальное окно, если клик происходит вне модального окна

});





