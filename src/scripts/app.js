document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar__link');
    const toggle = document.querySelector('.navbar__toggle');
    const menu = document.querySelector('.navbar__menu');
    const lines = document.querySelectorAll('.navbar__line'); // Sélectionne toutes les lignes

    // Fonction pour supprimer la classe active de tous les liens et l'ajouter au lien cliqué
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            // Ferme le menu burger automatiquement
            if (menu.classList.contains('is-active')) {
                menu.classList.remove('is-active');
                toggle.classList.remove('is-active'); // Réinitialise l'animation du burger
                lines.forEach(line => line.classList.remove('is-active')); // Réinitialise les lignes
            }

            // Scroll smooth vers la section cliquée
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });

            e.preventDefault(); // Empêche le comportement par défaut du lien
        });
    });

    // Toggle menu burger
    toggle.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        this.classList.toggle('is-active'); // Ajoute l'animation du burger
        lines.forEach(line => line.classList.toggle('is-active')); // Ajoute l'animation aux lignes
    });
});
