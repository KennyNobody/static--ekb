import "the-new-css-reset/css/reset.css";
import "./sprite";
import "../css/main.scss";

import {ArticleDrop} from "./modules/articleDrop";
import {Header} from "./modules/header";
import Masonry from 'masonry-layout';

const app = {};

document.addEventListener('DOMContentLoaded', () => {
   initApp();
});

function initApp() {
    const header = document.querySelector('[data-header]');
    const articlesDrop = document.querySelectorAll('[data-article-drop]');
    const masonry = document.querySelectorAll('[data-masonry]');

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
}