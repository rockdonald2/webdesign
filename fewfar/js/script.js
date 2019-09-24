const triggerOpen = document.querySelector('.sidebar--open');
const triggerClose = document.querySelector('.sidebar--close');
const items = document.querySelectorAll('.sidebar--item a');
const list = document.querySelector('.sidebar--list');
const backdrop = document.querySelector('.sidebar--backdrop');
const sidebar = document.querySelector('.sidebar');

function handleMenu() {
    triggerOpen.classList.add('hide--open');
    triggerClose.classList.add('show--close');
    backdrop.classList.add('show--backdrop');
    list.classList.add('show--sidebar');
    setTimeout(() => list.classList.add('show--sidebar__enter'), 150);
    items[0].classList.add('show--item');
    setTimeout(() => items[1].classList.add('show--item'), 50);
    setTimeout(() => items[2].classList.add('show--item'), 50);
    setTimeout(() => items[3].classList.add('show--item'), 50);
}

function hideMenu() {
    triggerOpen.classList.remove('hide--open');
    triggerClose.classList.remove('show--close');
    backdrop.classList.remove('show--backdrop');
    list.classList.remove('show--sidebar__enter');
    setTimeout(() => list.classList.remove('show--sidebar'), 150);
    items[0].classList.remove('show--item');
    setTimeout(() => items[1].classList.remove('show--item'), 50);
    setTimeout(() => items[2].classList.remove('show--item'), 50);
    setTimeout(() => items[3].classList.remove('show--item'), 50);
}

triggerOpen.addEventListener('click', handleMenu);
triggerClose.addEventListener('click', hideMenu);
window.addEventListener('keydown', hideMenu);