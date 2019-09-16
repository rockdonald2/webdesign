/* Accordion drop-down submenu */
function handleSubmenu() {
    const panel = this.nextElementSibling;
    if (panel.style.height) {
        panel.style.height = null;
        panel.style.display = "none";
        panel.style.opacity = 0;
        panel.style.visibility = "hidden";
        this.style.transform = "rotate(0)";
    } else {
        panel.style.height = "initial";
        panel.style.display = "block";
        panel.style.opacity = 1;
        panel.style.visibility = "visible";
        this.style.transform = "rotate(180deg)";
    }
}

const caretDown = document.querySelectorAll('.icofont-caret-down.accordion');

caretDown.forEach(btn => btn.addEventListener("click", handleSubmenu));

/* Mobile nav */
const triggerOpen = document.querySelector('.btn--trigger__open');
const triggerClose = document.querySelector('.btn--trigger__close');
const mobileNav = document.querySelector(".mobile-nav");
const brand = document.querySelector(".brand h1 a");
const mainHeader = document.querySelector(".main-header");

function openNav() {
    mobileNav.style.display = "block";
    brand.style.color = "white";
    mainHeader.style.backgroundColor = "black";
    triggerOpen.style.display = "none";
    triggerOpen.style.width = null;
    triggerClose.style.display = "block";
    triggerClose.style.width = "initial";
}

function closeNav() {
    mobileNav.style.display = "none";
    brand.style.color = "black";
    mainHeader.style.backgroundColor = "rgba(255, 255, 255, .7)";
    triggerOpen.style.display = "block";
    triggerOpen.style.width = "initial";
    triggerClose.style.display = "close";
    triggerClose.style.width = null;
}

triggerOpen.addEventListener("click", openNav);
triggerClose.addEventListener("click", closeNav);