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


const mobileNavOpen = document.querySelector('.mobile-nav--open');
const mobileNavClose = document.querySelector('.mobile-nav--close');
const mobileNav = document.querySelector('.mobile-nav');

function toggleMobileNav() {
	mobileNavOpen.style.opacity = 0;
	mobileNavClose.style.display = 'block';
	mobileNav.style.zIndex = 50;
	mobileNav.style.opacity = 1;
	mobileNav.style.visibility = 'visible';
}

function hideMobileNav() {
	mobileNavOpen.style.opacity = 1;
	mobileNavClose.style.display = 'none';
	mobileNav.style.opacity = 0;
	setTimeout(() => {
		mobileNav.style.zIndex = -2;
		mobileNav.style.visibility = 'hidden'
	}, 500);
}

mobileNavOpen.addEventListener('click', toggleMobileNav);
mobileNavClose.addEventListener('click', hideMobileNav);

const header = document.querySelector('.main-header');
const hero = document.querySelector('.container-home')

var scrollPos = 0;
window.addEventListener('scroll', debounce(function () {

	if ((document.body.getBoundingClientRect()).top > scrollPos) {
		// UP
		header.style.transform = "translateY(0)";

		if (Math.abs(scrollPos) > hero.offsetHeight) {
			header.classList.add('fixed-nav');
		} else {
			header.classList.remove('fixed-nav');
		}
	} else {
		// DOWN
		header.style.transform = `translateY(-${header.offsetHeight}px)`;
	}
	// saves the new position for iteration.
	scrollPos = (document.body.getBoundingClientRect()).top;
}));