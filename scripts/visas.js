let typeSwitcher = document.querySelectorAll('.type-switch');

typeSwitcher.forEach((switcher, index) => {
    switcher.setAttribute('id', `type-switch-${index}`);
    switcher.nextElementSibling.setAttribute('for', `type-switch-${index}`);
    switcher.addEventListener('change', function () {
        let visaType = switcher.parentNode.parentNode.parentNode.parentNode;
        let price = visaType.querySelector('.price .amount');
        if (switcher.checked) {
            visaType.className = 'visa-type express';
            let timer = setInterval(() => {
                if (price.innerHTML < price.getAttribute('data-express')) {
                    price.innerHTML++;
                }
                if (+price.innerHTML == +price.getAttribute('data-express')) {
                    clearInterval(timer);
                }
            }, 3);
        } else {
            visaType.className = 'visa-type regular';
            let timer = setInterval(() => {
                if (price.innerHTML > price.getAttribute('data-regular')) {
                    price.innerHTML--;
                }
                if (price.innerHTML == price.getAttribute('data-regular')) {
                    clearInterval(timer);
                }
            }, 3);
        }
    });
});

let container = document.querySelector(".visas .pop-visas .visa-info");
let isGrabbing = false;
let startX;
let scrollLeft;

function applyTextSelectionCSS(element, value) {
    element.style.userSelect = value;
    element.style.msUserSelect = value;
    element.style.webkitUserSelect = value;
}

container.addEventListener("mousedown", function (event) {
    isGrabbing = true;
    startX = event.clientX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = "grabbing";

    container.querySelectorAll("*").forEach(function (child) {
        applyTextSelectionCSS(child, "none");
    });
});

document.addEventListener("mousemove", function (event) {
    if (isGrabbing) {
        event.preventDefault();
        let x = event.clientX - container.offsetLeft;
        let walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    }
});

document.addEventListener("mouseup", function () {
    isGrabbing = false;
    container.style.cursor = "auto";

    container.querySelectorAll("*").forEach(function (child) {
        applyTextSelectionCSS(child, "auto");
    });
});



container.addEventListener("wheel", function (event) {
    if (window.innerWidth > 768) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
    }
});
