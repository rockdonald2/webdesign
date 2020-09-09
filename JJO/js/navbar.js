if (window.innerWidth > 750) {
    window.onscroll = checkLimit;

    const navbar = document.querySelector('.header');
    const stickyLimit = navbar.offsetTop;

    function checkLimit() {
        if (window.pageYOffset >= stickyLimit) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }
}