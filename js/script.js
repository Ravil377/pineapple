if(document.querySelector('.sales__swiper-js')) {
    const salesWrapper = new Swiper('.sales__swiper-js', {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: '.sales__swiper-button-next',
            prevEl: '.sales__swiper-button-prev',
        },
        // Responsive breakpoints
        // breakpoints: {
        //   // when window width is >= 320px
        //   320: {
        //     slidesPerView: 2,
        //   },
        //   // when window width is >= 480px
        //   480: {
        //     slidesPerView: 3,
        //   },
        //   // when window width is >= 640px
        //   640: {
        //     slidesPerView: 4,
        //   }
    
        // }
    })
    
}

if(document.querySelector('.hit__swiper-js')) {
    const hitWrapper = new Swiper('.hit__swiper-js', {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: '.hit__swiper-button-next',
            prevEl: '.hit__swiper-button-prev',
        },
    })
}

if(document.querySelector('.new__swiper-js')) {
    const newWrapper = new Swiper('.new__swiper-js', {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: '.new__swiper-button-next',
            prevEl: '.new__swiper-button-prev',
        },
    })
}

if(document.querySelector('.news__swiper-js')) {
    const newsWrapper = new Swiper('.news__swiper-js', {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.news__swiper-button-next',
            prevEl: '.news__swiper-button-prev',
        },
    })
}

if(document.querySelector('.article__swiper-js')) {
    const articleWrapper = new Swiper('.article__swiper-js', {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 20,
        navigation: {
            nextEl: '.article__swiper-button-next',
            prevEl: '.article__swiper-button-prev',
        },
    })
}

if(document.querySelector('.card-thumb__swiper-js')) {
    const cardThumbs = new Swiper(".card-thumb__swiper-js", {
        slidesPerView: 4,
        spaceBetween: 15,
        freeMode: true,
        watchSlidesProgress: true,
    });

    const card = new Swiper(".card__swiper-js", {
        spaceBetween: 10,
        navigation: {
        nextEl: ".card__swiper-button-next",
        prevEl: ".card__swiper-button-prev",
        },
        thumbs: {
        swiper: cardThumbs,
        },
    });
}

if(document.querySelector('.swiper-tabs-js')) {
    const cardThumbs = new Swiper(".swiper-tabs-js", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        // freeMode: true,
        // watchSlidesProgress: true,
        breakpoints: {
            1200: {
                spaceBetween: 150
            },
        }
    });
}

if(document.querySelector('.viewed__swiper-js')) {
    const viewed = new Swiper('.viewed__swiper-js', {
        slidesPerView: 'auto',
        freeMode: true,
        navigation: {
            nextEl: '.viewed__swiper-button-next',
            prevEl: '.viewed__swiper-button-prev',
        },
    })
}
const burgerMenu = document.querySelector('.burger__menu');
const burger = document.querySelector('.burger');
const catalog = document.querySelector('.header__catalog');
const catalogMenu = document.querySelector('.catalog__menu-js');
const body = document.querySelector('body');
burger.addEventListener('click', () => {
    burger.classList.toggle('burger__close-btn');
    burgerMenu.classList.toggle('burger__menu_active');
    body.classList.toggle('body_fixed');
})
catalog.addEventListener('click', () => {
    catalogMenu.classList.toggle('catalog__menu_active');
})

const menus = document.querySelectorAll('.catalog__item-js');
const tabs = document.querySelectorAll('.catalog__tab');
const openTab = (e, menu) => {
    tabs.forEach(tab => {
        tab.classList.remove('catalog__tab_active');
        if(tab.dataset.id === e.currentTarget.id) {
            tab.classList.add('catalog__tab_active');
        }
    })
    menus.forEach(menu => {
        menu.classList.remove('catalog__item_active');
        if(menu.id === e.currentTarget.id) {
            menu.classList.add('catalog__item_active');
        }
    })
}

menus.forEach(menu => {
    menu.addEventListener('click', (e) => openTab(e, menu));
})