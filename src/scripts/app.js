const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar__menu');
const lines = document.querySelectorAll('.navbar__line');

toggle.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    toggle.classList.toggle('is-active');
    lines.forEach((line) => {
        line.classList.toggle('is-active');
    });

    // Désactive ou active le défilement
    if (menu.classList.contains('is-active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});
