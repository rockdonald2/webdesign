let modal = document.querySelector(".modal");
let modalBackdrop = document.querySelector(".modal-backdrop");

let buttons = document.querySelectorAll('.btn--cta');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        modal.classList.remove('hide');
        modalBackdrop.classList.remove('hide');
    });
}

modalBackdrop.addEventListener("click", () => {
    modal.classList.add('hide');
    modalBackdrop.classList.add('hide');
});

window.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode == 27) {
        modal.classList.add('hide');
        modalBackdrop.classList.add('hide');
    }
});