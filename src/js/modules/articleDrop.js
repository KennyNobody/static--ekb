class ArticleDrop {
    constructor(el) {
        this.el = el;

        this.setListeners();
    }

    setListeners() {
        this.el.addEventListener('click', () => {
            this.el.classList.toggle('active');
        });
    }
}

export {ArticleDrop};