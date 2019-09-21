const menuOpen = document.querySelector('.navbar--trigger');
const menuClose = document.querySelector('.menu--trigger');
const menu = document.querySelector('.menu');
const navBrand = document.querySelector('.navbar--brand');

function toggleMenu() {
    if (document.body.getBoundingClientRect().width > 1000) {
        menu.style.transform = "translateY(0)";
    } else if (document.body.getBoundingClientRect().width <= 1000) {
        menu.style.display = "flex";
        window.setTimeout(() => {
            menu.style.opacity = 1;
            menu.style.zIndex = 0;
        }, 250);
    }
}

function hideMenu(e) {
    if (event.isComposing || event.keyCode === 229) {
        return;
    }
    if (document.body.getBoundingClientRect().width > 1000) {
        if (e.keycode == 27) {
            menu.style.transform = "translateY(-20rem)";
        }

        menu.style.transform = "translateY(-20rem)";
    } else if (document.body.getBoundingClientRect().width <= 1000) {
        if (e.keycode == 27) {
            menu.style.opacity = 0;
            menu.style.zIndex = -1;
        }

        menu.style.opacity = 0;
        menu.style.zIndex = -1;
        window.setTimeout(() => {
            menu.style.display = "none";
        }, 400);
    }
}

function handleBrand(e) {
    if (window.scrollY > navBrand.offsetTop) {
        navBrand.classList.add('hideBrand');
    } else {
        navBrand.classList.remove('hideBrand');
    }
}

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', hideMenu);
document.addEventListener('keydown', hideMenu);
window.addEventListener('scroll', handleBrand);