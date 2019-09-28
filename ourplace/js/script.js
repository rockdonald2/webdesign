const backdrop = document.querySelector('.site--backdrop');
const mobileNav = document.querySelector('.mobile--nav');
const mobileTriggers = document.querySelectorAll('.mobile--trigger');

function toggleNav() {
  backdrop.classList.toggle('backdrop--active');
  mobileNav.classList.toggle('nav--active');
}

mobileTriggers.forEach(trigger => trigger.addEventListener('click', toggleNav));
backdrop.addEventListener('click', toggleNav);

const dots = document.querySelectorAll('.color');
const pan = document.querySelector('.site--pan');

function toggleFirst() {
  pan.classList.add('first');
  if (pan.classList.contains('second')) {
    pan.classList.remove('second');
  }
  if (pan.classList.contains('third')) {
    pan.classList.remove('third');
  }
}

function toggleSecond() {
  pan.classList.add('second');
  if (pan.classList.contains('first')) {
    pan.classList.remove('first');
  }
  if (pan.classList.contains('third')) {
    pan.classList.remove('third');
  }
}

function toggleThird() {
  pan.classList.add('third');
  if (pan.classList.contains('first')) {
    pan.classList.remove('first');
  }
  if (pan.classList.contains('second')) {
    pan.classList.remove('second');
  }
}

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});


slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

const header = document.querySelector('.site--navbar');
const hero = document.querySelector('.site--hero');

var scrollPos = 0;
window.addEventListener('scroll',function () {

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
});