const animationStandard = document.querySelectorAll(".animasi-standar");
const animationCard = document.querySelectorAll(".animasi-kartu");
let throttleTimer = false;

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    let mybutton = document.getElementById("myBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function throttle(callback, time) {
    if (throttleTimer) {
        return;
    } else {
        throttleTimer = true;
        setTimeout(() => {
            callback();
            throttleTimer = false;
        }, time);
    }
}

function elementInView(element, dividend) {
    const elementTop = element.getBoundingClientRect().top;
    return (
        elementTop <= document.documentElement.clientHeight / dividend
    );
}

function elementOutofView(element) {
    const elementTop = element.getBoundingClientRect().top;
    return (
        elementTop > document.documentElement.clientHeight
    );
}

function handleScrollAnimation() {
    animationStandard.forEach((element) => {
        if (elementInView(element, 1)) {
            element.classList.add("gulir-standar");
        } else if (elementOutofView(element)) {
            element.classList.remove("gulir-standar");
        }
    });
    animationCard.forEach((element) => {
        if (elementInView(element, 1.4)) {
            element.classList.add("gulir-kartu");
        } else if (elementOutofView(element)) {
            element.classList.remove("gulir-kartu");
        }
    });
}

window.addEventListener("scroll", () => {
    throttle(() => {
        handleScrollAnimation();
    }, 250);
});

window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');
    const contentHome = document.querySelector('.content-home-page');
    setTimeout(function () {
        setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            } else if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.1;
            } else {
                clearInterval(this);
                setTimeout(function () {
                    preloader.remove();
                }, 250);
                contentHome.classList.add("animasi-beranda");
            }
        }, 50);
    }, 2000);
});