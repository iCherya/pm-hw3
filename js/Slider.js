class Slider {
    constructor(adaptive, nodeEl, canSlide = false, isCarusel = true, timer = 5000) {
        this.adaptive = adaptive;
        this.nodeEl = nodeEl;
        this.isCarusel = isCarusel;
        this.slideIndex = 0;
        this.canSlide = canSlide;
        this.timer = timer;

        this.init();

        if (timer > 0) {
            this.setIntervalTimer();
        }
    }
    showSlides(n) {
        const slides = this.nodeEl.querySelectorAll('.slider-item');
        this.slideIndex = n;

        for (const slide of slides) {
            slide.style.display = 'none';
        }

        if (n === slides.length) {
            this.slideIndex = !this.isCarusel ? 0 : slides.length - 1;
        }

        if (n <= 0) {
            this.slideIndex = !this.isCarusel ? slides.length - 1 : 0;
        }

        if (this.canSlide) {
            const dots = document.querySelectorAll('.slider-controls li');
            for (const dot of dots) {
                dot.classList.remove('active');
            }

            dots[this.slideIndex].classList.add('active');
        }

        slides[this.slideIndex].style.display = 'block';
    }
    nextSlide() {
        this.showSlides(this.slideIndex + 1);
    }
    previousSlide() {
        this.showSlides(this.slideIndex - 1);
    }
    setIntervalTimer() {
        const timer = setInterval(() => this.nextSlide(), this.timer);

        this.intervalTimer = timer;
    }
    init() {
        this.showSlides(this.slideIndex);

        const prevButton = this.nodeEl.querySelector('.slider-previous');
        const nextButton = this.nodeEl.querySelector('.slider-next');

        prevButton.onclick = () => {
            clearInterval(this.intervalTimer);
            this.previousSlide();
        };
        nextButton.onclick = () => {
            clearInterval(this.intervalTimer);
            this.nextSlide();
        };
    }
}
