class Dropdown {
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

export {Dropdown};