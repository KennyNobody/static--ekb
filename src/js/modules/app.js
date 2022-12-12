import {ArticleDrop} from "./articleDrop";
import {Header} from "./header";
import Masonry from 'masonry-layout';
import {Slider} from "./slider";
import {Player} from "./player";
import Swiper, {Navigation} from "swiper";
import {Uploader} from "./uploader";
import {DropSection} from "./dropSection";

class App {
    constructor() {
        this.initApp();
    }

    initApp() {
        this.initHeader();
        this.initArticleDrop();
        this.initMasonry();
        this.initSlider();
        this.initTimeline();
        this.initPlayer();
        this.initUploader();
        this.initDropSection();
    }

    initHeader() {
        const el = document.querySelector('[data-header]');
        if (el) this.header = new Header(el);
    }

    initArticleDrop() {
        const el = document.querySelectorAll('[data-article-drop]');
        if (el.length) this.articleDrop = [];

        el.forEach(item => {
            this.articleDrop.push(new ArticleDrop(item));
        });
    }

    initMasonry() {
        const el = document.querySelector('[data-masonry]');

        if (el) {
            this.masonry = new Masonry(el, {
                itemSelector: '.masonry__item',
                columnWidth: '.masonry__item',
                gutter: 10,
            });
        }
    }

    initSlider() {
        const el = document.querySelectorAll('[data-slider]');
        if (el.length) this.slider = [];

        el.forEach(item => {
            this.slider.push(new Slider(item));
        });
    }

    initPlayer() {
        const el = document.querySelectorAll('[data-player]');
        if(el.length) this.player = [];

        el.forEach(item => {
            this.player.push(new Player(item));
        })

    }

    initTimeline() {
        const el = document.querySelector('[data-timeline]');

        if (el) {
            this.timeline = new Swiper(el.querySelector('.swiper-container'), {
                slidesPerView: 'auto',
                modules: [Navigation],
                navigation: {
                    nextEl: '.timeline__button--next',
                    prevEl: '.timeline__button--prev',
                },
            });
        }
    }

    initUploader() {
        const el = document.querySelectorAll('[data-uploader]');
        if (el.length) this.uploader = [];

        el.forEach(item => this.uploader.push(new Uploader(item)));
    }

    initDropSection() {
        const el = document.querySelectorAll('[data-section-drop]');
        if (el.length) this.dropSection = [];

        el.forEach(item => this.dropSection.push(new DropSection(item, this.dropSection, this.header)));
    }


}

export {App};