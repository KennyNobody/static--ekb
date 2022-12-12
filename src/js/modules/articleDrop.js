class ArticleDrop {
    constructor(el) {
        this.el = el;
        this.content = this.el.querySelector('[data-article-drop-content]');
        this.height = this.content.offsetHeight;

        this.setListeners();
    }

    setListeners() {
        if (this.height <= 150) {
            this.el.classList.add('active');
        }

        this.el.addEventListener('click', () => {
            if (this.height > 150) {
                this.el.classList.toggle('active');
            }
        });
    }
}

export {ArticleDrop};