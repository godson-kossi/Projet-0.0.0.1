document.addEventListener("DOMContentLoaded", function () {
    // Sélectionne tous les groupes d'images
    const imageGroups = document.querySelectorAll('.image-group');

    imageGroups.forEach(group => {
        // Récupère toutes les images à l'intérieur de chaque groupe
        const images = group.querySelectorAll('img');
        let currentIndex = 0; // Index de l'image courante

        // Fonction pour faire défiler les images
        function showNextImage() {
            // Masque l'image courante
            images[currentIndex].style.opacity = 0;

            // Calcule l'index de la prochaine image
            currentIndex = (currentIndex + 1) % images.length;

            // Affiche la prochaine image
            images[currentIndex].style.opacity = 1;
        }

        // Initialisation : affiche la première image
        images[currentIndex].style.opacity = 1;

        // Change d'image toutes les 2 secondes
        setInterval(showNextImage, 2000);
    });
});
