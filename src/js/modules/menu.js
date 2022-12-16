import "mmenu-js/src/mmenu.scss";
import Mmenu from "mmenu-js";

class Menu {
    constructor(el) {
        this.el = null;
        this.markup = el;

        this.init();
    }

    init() {

        this.el = new Mmenu( this.markup, {
            navbar: {
                add: false
            }
        }, {
            // configuration

        });
    }
}

export {Menu};