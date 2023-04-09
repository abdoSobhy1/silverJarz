let subMenus = document.querySelectorAll('.has-menu');

subMenus.forEach(function (subMenu) {
    subMenu.addEventListener('click', function (e) {
        if (e.target.parentNode.classList.contains('has-menu')) {
            console.log(e.target.parentNode);
            e.target.parentNode.classList.toggle('shown');
        }
    });
});

let menuToggle = document.querySelector('.hamburger');

menuToggle.addEventListener('click', function (e) {
    this.classList.toggle('is-active');
    document.querySelector('.main-menu').classList.toggle('active');
});

function setMenuHeight() {
    let headerHeight = document.querySelector('header').offsetHeight;
    document.querySelector('.main-menu.active').style.height = `calc(100dvh - ${headerHeight}px)`;
}

window.addEventListener('resize', function () {
    window.innerHeight > 768 ? setMenuHeight() : document.querySelector('.main-menu.active').style = "";
});

let leftPromoControler = document.querySelector('.left-controler');
let rightPromoControler = document.querySelector('.right-controler');
let promoContainer = document.querySelector('.slider-wrapper');
let promo = document.querySelector('.slider-wrapper .promo');

function slide(direction) {
    if (direction == 'right') {
        promoContainer.scroll({
            top: 0,
            left: promoContainer.scrollLeft + promo.offsetWidth,
            behavior: "smooth",
        });
    } else {
        promoContainer.scroll({
            top: 0,
            left: promoContainer.scrollLeft - promo.offsetWidth,
            behavior: "smooth",
        });
    }
}

rightPromoControler.addEventListener('click', function () {
    console.log('right');
    slide('right');
});

leftPromoControler.addEventListener('click', function () {
    console.log('left');
    slide('left');
});

let creditsYear = document.querySelector(' .year');
creditsYear.innerHTML = new Date().getFullYear();