const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor-black");

// const textArray = ["Adhitya Bagus Wicaksono"];
const textHome = "Adhitya Bagus Wicaksono";
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function typeTextHome() {
    if (charIndex < textHome.length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textHome.charAt(charIndex);
        charIndex++;
        setTimeout(typeTextHome, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(eraseTextHome, newTextDelay);
    }
}

function eraseTextHome() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textHome.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseTextHome, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textHome.length) textArrayIndex = 0;
        setTimeout(typeTextHome, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textHome.length) setTimeout(typeTextHome, newTextDelay + 250);
});


let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
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