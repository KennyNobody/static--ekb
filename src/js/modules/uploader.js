import * as FilePond from 'filepond';
import ru_ru from 'filepond/locale/ru-ru.js';

import "filepond/dist/filepond.css";

class Uploader {
    constructor(el) {
        this.el = el;
        this.filePond = null;

        this.init();
    }

    init() {
        this.filePond = FilePond.create({
            allowMultiple: true,
            name: 'filepond'
        });

        this.filePond.setOptions(ru_ru);
        this.el.appendChild(this.filePond.element);
    }
}

export {Uploader};