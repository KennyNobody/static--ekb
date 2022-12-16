class DropSection {
    constructor(el, arr, header) {
        this.el = el;
        this.arr = arr;
        this.header = header;
        this.headerMarkup = document.querySelector('.header');
        this.name = this.el.getAttribute('data-section-drop');
        this.button = document.querySelector('[data-button-drop="' + this.name + '"]');

        this.setListeners();
    }

    setListeners() {
        document.addEventListener('click', (e) => {
            if (!this.el.hasAttribute('hidden') && !this.el.contains(e.target) && !this.headerMarkup.contains(e.target)) {
                this.toggle();
            }
        });

        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.closeAll();
            this.toggle();
        });


    }

    toggle() {
        if (this.el.hasAttribute('hidden')) {
            this.el.removeAttribute('hidden');
            this.header.fix();
        } else {
            this.el.setAttribute('hidden', 'hidden');
            this.header.toggle();
        }
    }

    closeAll() {
        this.arr.forEach(item => {
            if (item.name !== this.name) {
                item.el.setAttribute('hidden', 'hidden');
            }
        });
    }
}

export {DropSection};