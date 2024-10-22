const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');
const lines = document.querySelectorAll('.navbar__line');

toggle.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    toggle.classList.toggle('is-active');
    lines.forEach((line, index) => {
        line.classList.toggle('is-active');
    });
});
