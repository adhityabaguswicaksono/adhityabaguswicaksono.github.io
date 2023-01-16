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

window.addEventListener('click', function (e) {
    if (!document.getElementById("navigation-menu").contains(e.target)) {
        document.getElementById("navigation-menu").className = "navigation-list";
        document.getElementById("ikon-header").className = "ikon-header";
    }
});

// Membuat menu navigation bar di highlight ketika di klik
const menu = document.querySelector(".menu");
menu.addEventListener("click", function (menu) {
    const targetMenu = menu.target;

    if (targetMenu.classList.contains('link')) {
        const menuActive = document.querySelector("nav .menu a.active");

        if (menuActive !== null && targetMenu.getAttribute('onClick') !== menuActive.getAttribute('onClick')) {
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

window.addEventListener("scroll", function () {
    const menuArray = Array.prototype.slice.call(document.querySelectorAll(".menu a"));

    let sectionBeranda = document.getElementById("beranda");
    let sectionTentangKami = document.getElementById("tentang-kami");
    let sectionBerita = document.getElementById("berita");
    let sectionDonasi = document.getElementById("donasi");
    let sectionKontakKami = document.getElementById("kontak-kami");

    let diffBerandaTop = sectionBeranda.offsetTop - window.pageYOffset;
    let diffBerandaHeight = diffBerandaTop + sectionBeranda.offsetHeight;
    let diffTentangKamiTop = sectionTentangKami.offsetTop - window.pageYOffset;
    let diffTentangKamiHeight = diffTentangKamiTop + sectionTentangKami.offsetHeight;
    let diffBeritaTop = sectionBerita.offsetTop - window.pageYOffset;
    let diffBeritaHeight = diffBeritaTop + sectionBerita.offsetHeight;
    let diffDonasiTop = sectionDonasi.offsetTop - window.pageYOffset;
    let diffDonasiHeight = diffDonasiTop + sectionDonasi.offsetHeight;
    let diffKontakKamiTop = sectionKontakKami.offsetTop - window.pageYOffset;
    let diffKontakKamiHeight = diffKontakKamiTop + sectionKontakKami.offsetHeight;

    for (let i = 0; i < menuArray.length; i++) {
        if (diffBerandaTop < 2 && diffBerandaHeight > 102) {
            if (i == 0) {
                menuArray[i].classList.add('active');
            } else {
                menuArray[i].classList.remove('active');
            }
        } else if (diffTentangKamiTop < 102 && diffTentangKamiHeight > 102) {
            if (i == 1) {
                menuArray[i].classList.add('active');
            } else {
                menuArray[i].classList.remove('active');
            }
        } else if (diffBeritaTop < 102 && diffBeritaHeight > 102) {
            if (i == 2) {
                menuArray[i].classList.add('active');
            } else {
                menuArray[i].classList.remove('active');
            }
        } else if (diffDonasiTop < 102 && diffDonasiHeight > 102) {
            if (i == 3) {
                menuArray[i].classList.add('active');
            } else {
                menuArray[i].classList.remove('active');
            }
        } else if (diffKontakKamiTop < 102 && diffKontakKamiHeight > 102) {
            if (i == 4) {
                menuArray[i].classList.add('active');
            } else {
                menuArray[i].classList.remove('active');
            }
        }
    }
});

function scrollSmoothTo(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
}