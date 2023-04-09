
let landing = document.querySelector('.landing');

function setLandingSize() {
    let headerHeight = document.querySelector('header').offsetHeight;
    if (window.innerWidth > 768) {
        landing.style.height = `calc(100dvh - ${headerHeight}px)`;
        document.querySelector('.landing .slides').style.height = `100%`;
    } else {
        landing.style.height = `calc(100dvh - ${headerHeight}px + ${document.querySelector('.search-form form').offsetHeight + 40}px)`;
        document.querySelector('.landing .slides').style.height = `calc(100dvh - ${headerHeight}px)`;
    }
}

setLandingSize();

window.addEventListener('resize', function () {
    setLandingSize();
    let timer = setInterval(() => { setPos(); }, 100);
    this.setTimeout(() => { this.clearInterval(timer); }, 500);
});

let index = 0;
let slides = document.querySelectorAll(".slide");
let nextSlide = function () {
    if (index == slides.length) {
        index = 0;
    }
    slides[index].style.display = "block";
    setTimeout(() => {
        slides[index].classList.add("active");
    }, 10);
    setTimeout(() => {
        slides.forEach((slide) => {
            if (slide.classList.contains("active") && slide != slides[index]) {
                let lastSlide = index - 1;
                if (lastSlide == -1) {
                    lastSlide = slides.length - 1;
                }
                slides[lastSlide].style.display = "none";
                slide.classList.remove("active");
            }
        });
        index += 1;
    }, 500);
};

nextSlide();
let timer = window.setInterval(() => {
    nextSlide();
}, 2500);

let prevSlide = function () {
    if (index == 0) {
        index = slides.length;
    }
    index -= 1;
    slides[index].style.display = "block";
    setTimeout(() => {
        slides[index].classList.add("active");
    }, 10);
    setTimeout(() => {
        slides.forEach((slide) => {
            if (slide.classList.contains("active") && slide != slides[index]) {
                slide.classList.remove("active");
                let lastSlide = index + 1;
                if (lastSlide == slides.length) {
                    lastSlide = 0;
                }
                slides[lastSlide].style.display = "none";
            }
        });
    }, 100);
};

let prev = document.querySelector(".prev");
let next = document.querySelector(".next");

prev.addEventListener("click", () => {
    prevSlide();
    clearInterval(timer);
    timer = window.setInterval(() => {
        nextSlide();
    }, 2500);
});

next.addEventListener("click", () => {
    nextSlide();
    clearInterval(timer);
    timer = window.setInterval(() => {
        nextSlide();
    }, 2500);
});

function setPos() {
    let SlideControls = document.querySelector('.controls');
    if (window.innerWidth > 768) {
        let SlideContentPosition = document.querySelector('.active .slide-content').getBoundingClientRect();
        SlideControls.style.top = `${SlideContentPosition.top - 20}px`;
        SlideControls.style.right = `${SlideContentPosition.width / 2 + 20}px`;
    }
    else {
        SlideControls.style = "";
    }
}
setPos();
let forms = document.querySelectorAll('form');
forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
});

let dateInput = document.querySelector('input[type="date"]:required');

dateInput.min = new Date().toISOString().split('T')[0];


dateInput.addEventListener('change', function (e) {
    if (dateInput.validity.valueMissing) {
        dateInput.setAttribute('placeholder', "موعد الرحلة");
    } else {
        dateInput.setAttribute('placeholder', '');
    }
});
