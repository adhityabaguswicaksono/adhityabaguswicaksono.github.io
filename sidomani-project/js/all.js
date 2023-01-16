window.addEventListener('load', function () {
    const preloader = document.querySelector('.preloader');

    setTimeout(function () {
        setInterval(function () {
            if (!preloader.style.opacity) {
                preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
                preloader.style.opacity -= 0.01;
            } else {
                clearInterval(this);
                preloader.remove();
            }
        }, 1);
    }, 1000);
});

function showMenu(x) {
    x.classList.toggle("klik");

    let menu = document.getElementById("navigation-menu");
    if (menu.className === "navigation-list") {
        menu.className += " responsif";
    } else {
        menu.className = "navigation-list";
    }
}

window.addEventListener('click', function (e) {
    if (!document.getElementById("navigation-menu").contains(e.target)) {
        document.getElementById("navigation-menu").className = "navigation-list";
        document.getElementById("bar-menu").className = "toggle-menu";
    }
});