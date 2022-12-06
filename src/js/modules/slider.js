import app from '../../../js/app';
import Swiper, {Navigation, Pagination} from "swiper";

class Slider {
    constructor(el) {
        this.el = el;
    }
}

function createSlider(item) {
    const type = item.hasAttribute('data-slider-desktop');
    const desktop = window.matchMedia('(min-width: 1200px)');
    const mobile = window.matchMedia('(min-width: 0px) and (max-width: 1199px)');
    let swiper = Swiper;
    let init = false;

    const quantity = item.getAttribute('data-slider-quantity') || 'auto';
    const centered = (item.hasAttribute('data-slider-centered'));
    const looped = (item.hasAttribute('data-slider-looped'));

    function initSlider() {
        if (!type || type && desktop.matches) {
            if (!init) {
                init = true;
                swiper = create();
            }
        } else if (type && mobile.matches) {
            if (init) {
                swiper.destroy();
                init = false;
            }
        }
    }

    function create() {
        return new Swiper(item.querySelector('.swiper-container'), {
            modules: [Navigation, Pagination],
            spaceBetween: 15,
            loop: looped,
            watchSlidesProgress: true,
            slideVisibleClass: 'slider__slide--visible',
            slidesPerView: 'auto',
            centeredSlides: centered,
            loopAdditionalSlides: 3,
            pagination: {
                el: '.slider__pagination',
                type: 'bullets',
                clickable: true,
                bulletClass: 'bullet',
                bulletActiveClass: 'bullet--active'
            },
            navigation: {
                nextEl: item.querySelector('.slider__button--next'),
                prevEl: item.querySelector('.slider__button--prev'),
                disabledClass: 'slider__button--disabled'
            },
            breakpoints: {
                1200: {
                    spaceBetween: 30,
                    slidesPerView: quantity,
                }
            }
        });
    }

    initSlider();

    window.addEventListener('resize', () => {
        initSlider();

        return swiper;
    });

    return swiper;
}