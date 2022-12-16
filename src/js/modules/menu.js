import "mmenu-js/src/mmenu.scss";
// import "../../css/libs/mmenu.scss";

import Mmenu from "mmenu-js";

class Menu {
    constructor(el, header) {
        this.el = null;
        this.api = null;
        this.header = header;
        this.markup = el;
        this.button = document.querySelector('[data-menu-button]');

        this.init();
    }

    init() {

        this.el = new Mmenu( this.markup, {
            navbar: {
                title: 'Дивано'
            },
            hooks: {
                "open:after": () => {
                    this.header.fix();
                },
                "close:after": () => {
                    this.header.toggle();
                }
            },
            offCanvas: {
                page: {
                    selector: ".page"
                }
            }
        });

        this.api = this.el.API;

        console.log(this.api);

        if (this.button) {
            this.button.addEventListener('click', () => {
                if (document.body.classList.contains('mm-wrapper--opened')) {
                    console.log('Пык');
                    this.api.close();
                    // this.api.closePanel();
                } else {
                    this.api.open();
                }
            });
        }


    }
}

export {Menu};