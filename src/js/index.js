import "the-new-css-reset/css/reset.css";
import "swiper/css";
import "./sprite";
import "../css/main.scss";

import {ArticleDrop} from "./modules/articleDrop";
import {Header} from "./modules/header";
import Masonry from 'masonry-layout';
import  {Slider} from "./modules/slider";
import Swiper, { Navigation } from "swiper";

const app = {};

document.addEventListener('DOMContentLoaded', () => {
   initApp();
});

function initApp() {
    const header = document.querySelector('[data-header]');
    const articlesDrop = document.querySelectorAll('[data-article-drop]');
    const masonry = document.querySelectorAll('[data-masonry]');
    const slider = document.querySelectorAll('[data-slider]');
    const timeline = document.querySelector('[data-timeline]');

    if (header) app.header = new Header(header);

    articlesDrop.forEach(item => {
       new ArticleDrop(item);
    });

    masonry.forEach(item => {
       new Masonry(item, {
           itemSelector: '.masonry__item',
           columnWidth: '.masonry__item',
           gutter: 10,
       });
    });

    slider.forEach(item => {
        new Slider(item);
    });

    if (timeline) {
        new Swiper(timeline.querySelector('.swiper-container'), {
            // spaceBetween: 40,
            slidesPerView: 'auto',
            modules: [Navigation],
            navigation: {
                nextEl: '.timeline__button--next',
                prevEl: '.timeline__button--prev',
            },
        });
    }
}