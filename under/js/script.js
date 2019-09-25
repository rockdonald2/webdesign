const trigger = document.querySelector('.menu-trigger');
const backdrop = document.querySelector('.backdrop');
const list = document.querySelector('.mobile--list');

function handleMenu(e) {
    trigger.classList.toggle('active');
    backdrop.classList.toggle('active');
    list.classList.toggle('active');
}

trigger.addEventListener('click', handleMenu);

const modules = document.querySelectorAll('.module');

function appear(e) {
    modules.forEach((module) => {
        if (window.scrollY + 200 >= module.offsetTop) {
            module.classList.add('appear');
        }
    })
}

window.addEventListener('scroll', appear);

