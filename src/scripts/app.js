document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar__link');
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');
    const lines = document.querySelectorAll('.navbar__line'); 

  
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

        
            if (menu.classList.contains('is-active')) {
                menu.classList.remove('is-active');
                toggle.classList.remove('is-active');
                lines.forEach(line => line.classList.remove('is-active')); 
            }

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            e.preventDefault(); 
        });
    });

    toggle.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        this.classList.toggle('is-active'); 
        lines.forEach(line => line.classList.toggle('is-active')); 
    });
});
