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
        if (window.scrollY === 0 && this.check()) {
            this.el.classList.add('invert');
        } else {
            this.el.classList.remove('invert');
        }

        console.log(this.check());
    }

    check() {
        const el = this.el.querySelectorAll('[data-section-drop]');
        let flag = true;

        for (let i = 0; i < el.length; i++) {
            if (!el[i].hasAttribute('hidden')) {
                flag = false;
                break;
            }
        }

        return flag;

        // el.forEach(item => {
        //     if (!item.hasAttribute('hidden')) return false;
        // })

        return true;
    }

    fix() {
        this.el.classList.remove('invert');
    }
}

export {Header};