// Membuat Navigation Bar menjadi responsif
function showMenu(x) {
    x.classList.toggle("klik");

    var menu = document.getElementById("navigation-menu");
    if (menu.className === "navigation-list") {
        menu.className += " responsif";
    } else {
        menu.className = "navigation-list";
    }
}

// Membuat menu navigation bar di highlight ketika di klik
const menu = document.querySelector(".menu");
menu.addEventListener("click", function (menu) {
    const targetMenu = menu.target;

    if (targetMenu.classList.contains('link')) {
        const menuActive = document.querySelector("nav .menu a.active");
        if (menuActive !== null && targetMenu.getAttribute('href') !== menuActive.getAttribute('href')) {
            menuActive.classList.remove('active');
        }
        targetMenu.classList.add('active');
    }
})

// Membuat scolling animation untuk setiap elemen
const animation = document.querySelectorAll(".animasi");
var throttleTimer = false;

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
    animation.forEach((element) => {
        if (elementInView(element, 1.25)) {
            element.classList.add("gulir");
        } else if (elementOutofView(element)) {
            element.classList.remove("gulir");
        }
    });
}

window.addEventListener("scroll", () => {
    throttle(() => {
        handleScrollAnimation();
    }, 250);
});