const slides = [
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

// Sélection des éléments du banner 

const banner = document.querySelector('#banner');
const bannerImages = banner.querySelectorAll('.banner-img');
const arrowLeft = banner.querySelector('.arrow_left');
const arrowRight = banner.querySelector('.arrow_right');
const tagline = banner.querySelector('.tagline');
const dots = banner.querySelectorAll('.dot');



// Fonction pour afficher l'image correspondant à l'index spécifié

function showImage(index) {

	bannerImages.forEach(image => image.style.display = 'none');

	dots.forEach(dot => dot.classList.remove('dot_selected'));

	currentIndex = index;

	bannerImages[currentIndex].style.display = 'block';

	dots[currentIndex].classList.add('dot_selected'); // Ajoute les bullet points sur la partie basse du slider

	tagline.innerHTML = slides[currentIndex].tagLine; // Insère la tagline correspondante à chaques images

}

// Écouteur d'événement pour le clic de la souris sur la flèche droite

arrowRight.addEventListener('click', function (event) {
	if (event.button === 0) {
		console.log("Clic sur la flèche droite"); // teste le fonctionnement des event listeners
		showNextImage();
	}
});

// Écouteur d'événement pour le clic de la souris sur la flèche gauche

arrowLeft.addEventListener('click', function (event) {
	if (event.button === 0) {
		console.log("Clic sur la flèche gauche"); // teste le fonctionnement des event listeners
		showPreviousImage();
	}
});

// Affiche l'image d'index 0 - Première image du slider

showImage(0);

function showNextImage() {

	if (currentIndex === bannerImages.length - 1) {

		showImage(0);
	} else {

		showImage(currentIndex + 1);
	}

}


function showPreviousImage() {

	if (currentIndex === 0) {

		showImage(bannerImages.length - 1);
	} else {

		showImage(currentIndex - 1);
	}

}




