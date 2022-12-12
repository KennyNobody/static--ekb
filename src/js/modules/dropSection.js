class DropSection {
    constructor(el, arr, header) {
        this.el = el;
        this.arr = arr;
        this.header = header;
        this.name = this.el.getAttribute('data-section-drop');
        this.button = document.querySelector('[data-button-drop="' + this.name + '"]');

        this.setListeners();
    }

    setListeners() {
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.header.fix();
            this.closeAll();
            this.toggle();
        });
    }

    toggle() {
        if (this.el.hasAttribute('hidden')) {
            this.el.removeAttribute('hidden');
        } else {
            this.el.setAttribute('hidden', 'hidden');
        }
    }

    closeAll() {
        this.arr.forEach(item => {
            console.log(item);
            if (item.name !== this.name) {
                item.el.setAttribute('hidden', 'hidden');
            } else {
            }
        });
    }
}

export {DropSection};