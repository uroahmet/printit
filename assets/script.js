// script.js
const slides = [ // Tableau contenant des objets représentant chaque diapositive du carrousel
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const bannerImg = document.querySelector('.banner-img'); // Sélectionne l'élément HTML qui a la classe CSS .banner-img.
const arrowLeft = document.querySelector('.arrow_left'); // Sélectionne l'élément HTML qui a la classe CSS .arrow_left
const arrowRight = document.querySelector('.arrow_right'); // Sélectionne l'élément HTML qui a la classe CSS .arrow_right
const dots = document.querySelectorAll('.dot'); // Les flèches de navigation et les éléments d'image sont sélectionnés

let currentIndex = 0; // Variable qui met à jour l'index de la diapositive actuellement visible.

// Fonction pour mettre à jour les points indicateurs
function updateDots(index) {
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected'); // Ajoutez la classe pour le point actuel
        } else {
            dot.classList.remove('dot_selected'); // Supprimez la classe pour les autres points
        }
    });
}

// Fonction pour mettre à jour les points indicateurs, l'image et le texte
function updateCarousel(index, direction) {
      //correction du bug pour la première et la dernière image
      if (currentIndex === -1 && direction === 'left') {
        currentIndex = slides.length - 1;
    } else if (currentIndex === slides.length && direction === 'right') {
        currentIndex = 0;
    }

    // Mettre à jour l'image
    const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
    bannerImg.src = imagePath;
    bannerImg.alt = `Slide ${currentIndex + 1}`;

    // Mettre à jour le texte
    const tagLine = slides[currentIndex].tagLine;
    document.querySelector('p').innerHTML = tagLine;

    console.log(`Clic sur la flèche ${direction}`);
}

// Event listener
arrowLeft.addEventListener('click', function () {
    currentIndex = (currentIndex - 1); // On recule de -1
    updateCarousel(currentIndex, 'left');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});

// Gestionnaire d'événement pour le clic sur la flèche droite
arrowRight.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) ; // On passe à l'image suivante
    updateCarousel(currentIndex, 'right');
    updateDots(currentIndex); // Mettez à jour les points indicateurs
});


// Afficher la première diapositive au chargement de la page
updateCarousel(currentIndex, 'démarrage');
updateDots(currentIndex); // màj des points indicateurs pour la première diapositive