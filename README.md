# Projet-0.0.0.1







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="Zona_New.001.css">
    <title>Zona_New</title>
</head>
<body>
  <h1> Zona_New </h1>
    <div class="image-container">
        <div class="image-group">
        <a href=" https://s.click.aliexpress.com/e/_EykGNP3"> 
        <img src="i/1.jpg" alt="Data Engineer">
        <img src="i/1..jpg" alt="s  " >
        <img src="i/1...jpg" alt="Data Manager">
        <img src="i/1....jpg" alt="Data Manager">
    
        <div class="title">% En Promo</div>
        </a>
    </div>

    <div class="image-group">
        <a href=" https://s.click.aliexpress.com/e/_EISfvvn">
        <img src="i/2.jpg" alt="Data Manager">
        <img src="i/2..jpg" alt="Data Manager">
        <img src="i/2...jpg" alt="Data Manager">
        <img src="i/2....jpg" alt="Data Manager">
        
        <div class="title"> % En Promo</div>
        </a>
    </div>

    <div class="image-group middle">
        <a href=" https://s.click.aliexpress.com/e/_EJ9Q3Tb">
        <img src="i/3.jpg" alt="Growth Hacker">
        <img src="i/3..jpg" alt="Data Manager">
        <img src="i/3...jpg" alt="Data Manager">
        <img src="i/3....jpg" alt="Data Manager">
        
        <div class="title"> % En Promo</div>
        </a>
    </div>

    <div class="image-group">
        <a href=" https://s.click.aliexpress.com/e/_EymKmJf">
        <img src="i/4.jpg" alt="Data Protection Officer">
        <img src="i/4..jpg" alt="Data Manager">
        <img src="i/4...jpg" alt="Data Manager">
        <img src="i/4....jpg" alt="Data Manager">
        
        <div class="title"> % En Promo </div>
        </a>
    </div>

    <div class="image-group">
        <a href=" https://s.click.aliexpress.com/e/_EvaiX0N">
        <img src="i/5.jpg" alt="Data Product Manager">
        <img src="i/5..jpg" alt="Data Manager">
        <img src="i/5...jpg" alt="Data Manager">
        <img src="i/5....jpg" alt="Data Manager">
        <div class="title"> % En Promo  </div>
        </a>
    </div>

    <div class="image-group">
        <a href=" https://s.click.aliexpress.com/e/_EIT8Zx7">
        <img src="i/6.jpg" alt="Data Architect">
        <img src="i/6..jpg" alt="Data Manager">
        <img src="i/6...jpg" alt="Data Manager">
        <img src="i/6....jpg" alt="Data Manager">
        <div class="title"> % En Promo</div>
        </a>
    </div>

    <div class="image-group">
        <a href=" https://s.click.aliexpress.com/e/_EJYUXuN">
        <img src="i/7.jpg" alt="Data Marketing">
        <img src="i/7..jpg" alt="Data Manager">
        <img src="i/7...jpg" alt="Data Manager">
        <img src="i/7....jpg" alt="Data Manager">
        <div class="title"> % En Promo</div>
        </a>
    </div>

    <div class="image-group middle">
        <a href=" https://s.click.aliexpress.com/e/_EwbwzKZ">
        <img src="i/8.jpg" alt="Big Data">
        <img src="i/8..jpg" alt="Data Manager">
        <img src="i/8...jpg" alt="Data Manager">
        <img src="i/8....jpg" alt="Data Manager">
        <div class="title"> % En Promo</div>
        </a>
    </div>

    <div class="image-group">
        <a href=" https://s.click.aliexpress.com/e/_EQ4KSA9">
        <img src="i/9.jpg" alt="Data Scientist">
        <img src="i/9..jpg" alt="Data Manager">
        <img src="i/9...jpg" alt="Data Manager">
        <img src="i/9....jpg" alt="Data Manager">
        
        <div class="title"> % En Promo</div>
        </a>
    </div>

    <div class="image-group">
        <a href=" https://s.click.aliexpress.com/e/_EGKkE1b">
        <img src="i/10.jpg" alt="Data Ops Orchestrator">
        <img src="i/10..jpg" alt="Data Manager">
        <img src="i/10...jpg" alt="Data Manager">
        <img src="i/10....jpg" alt="Data Manager">
    
        <div class="title"> % En Promo</div>
        </a>
    </div>

  </div>
  

  <script src="Zona_New.001.js"></script>
</body>
</html>


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url('imag.jpg') no-repeat center / cover;
    overflow: hidden;
    box-sizing: border-box;
}

h1 {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: 20px;
    color: #fff;
    font-weight: 700;
    background: rgba(7, 1, 1, 0.966);
    padding: 5px 5px;
    margin-bottom: 15px; /* Pour séparer le titre du conteneur d'images */

}

.image-container {

    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 5 colonnes pour les 10 blocs */
    grid-template-rows: repeat(2, 1fr); /* 2 rangées */
    gap: 10px; /* Espacement entre les blocs */
    width: 80vw; /* Largeur ajustée pour centrer dans le cadre */
    height: calc(80vh - 40px); /* Hauteur ajustée pour le cadre noir */
    box-shadow: 0 0 0 8px #ff7200, 0 0 0 12px #000; /* Double encadrement */
    padding: 10px;
    background-color: black; /* Couleur de fond du cadre noir */
}
    
.image-group {
    position: relative;
    overflow: hidden; /* Masque les images au-delà des limites du conteneur */
    width: 100%; /* S'adapte à la largeur du conteneur */
    aspect-ratio: 1/1; /* Maintient un carré */
    border: 8px double #ff7200;
}

.image-group img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1s ease-in-out;
}

.image-group img:nth-child(1) { animation: slide 8s infinite 0s; }
.image-group img:nth-child(2) { animation: slide 8s infinite 2s; }
.image-group img:nth-child(3) { animation: slide 8s infinite 4s; }
.image-group img:nth-child(4) { animation: slide 8s infinite 6s; }

@keyframes slide {
    0%, 25% { opacity: 1; }
    50%, 100% { opacity: 0; }
}

.title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 65%;
    background-color: rgba(208, 73, 6, 0.7);
    color: #fff;
    padding: 4px;
    text-align: center;
    font-size: 10px;
}

.btn-container {
    margin-top: 10px;
}

.btn {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #2dcad0;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn:hover {
    background-color: #1976b3;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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




