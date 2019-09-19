function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}


const menuTrigger = document.querySelector('.navbar--right');
const menu = document.querySelector('.navbar--menu');
const navbar = document.querySelector('.navbar');

function handleMenu(e) {
    if (e.clientX >= document.body.offsetWidth - (4 * menuTrigger.offsetWidth) && e.clientY <= 200) {
        navbar.classList.add('active');
    } else {
        if (!(e.clientX >= document.body.offsetWidth - menu.offsetWidth && navbar.classList.contains('active'))) {
            navbar.classList.remove('active');
        }
    }
}

document.addEventListener('mousemove', debounce(handleMenu));


const logo = document.querySelector('.navbar--left svg path');
const hero = document.querySelector('.hero');
const brand = document.querySelector('.navbar--brand');
const bottomOfHero = hero.offsetTop + hero.offsetHeight;
const footer = document.querySelector('.footer');
const topOfFooter = footer.offsetTop;

function changeNav(e) {
    if (Math.abs((document.body.getBoundingClientRect()).top) >= bottomOfHero && Math.abs((document.body.getBoundingClientRect()).top) < topOfFooter) {
        logo.style.fill = "#000";
        menuTrigger.style.color = "#000";
        navbar.style.backgroundColor = "#fff";
        brand.style.color = "#000";
    } else if (Math.abs((document.body.getBoundingClientRect()).top) >= topOfFooter){
        logo.style.fill = "#fff";
        menuTrigger.style.color = "#fff";
        navbar.style.backgroundColor = "transparent";
        brand.style.color = "#fff";
    } else if (Math.abs((document.body.getBoundingClientRect()).top) < bottomOfHero){
        logo.style.fill = "#fff";
        menuTrigger.style.color = "#fff";
        navbar.style.backgroundColor = "transparent";
        brand.style.color = "#fff";
    }
}

window.addEventListener('scroll', debounce(changeNav));
