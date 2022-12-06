class Header {
    constructor(el) {
        this.el = el;

        this.setListeners();
    }

    setListeners() {
        this.toggle();

        document.addEventListener('scroll', () => {
            this.toggle();
        });
    }

    toggle() {
        if (window.scrollY === 0) {
            this.el.classList.add('invert');
        } else {
            this.el.classList.remove('invert');
        }
    }
}

export {Header};