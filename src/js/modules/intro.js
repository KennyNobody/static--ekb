class Intro {
    constructor(el) {
        this.parent = el;

        this.init();
    }

    init() {
        this.parent.appendChild(this.createMarkup());
        this.play();
    }

    play() {
        const video = this.parent.querySelector('video');

        video.muted = true;
        video.play();
    }

    createMarkup() {
        const el = document.createElement('video');
        el.classList.add('intro');
        el.setAttribute('poster', './assets/images/bg-index.jpg');
        el.setAttribute('autoplay', 'autoplay');
        el.setAttribute('loop', 'loop');
        el.setAttribute('muted', 'muted');

        const sources = `
            <source src="./assets/video/intro-mp4.mp4" type="video/mp4">
            <source src="./assets/video/intro-webm.webm" type="video/webm">`;

        el.innerHTML = sources;

        return el;
    }
}

export {Intro};