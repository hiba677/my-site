// Hero Slider full-screen
const heroImages = ["hero1.jpg", "hero2.jpg", "hero3.jpg"];
let currentHero = 0;
const heroImgElement = document.getElementById("heroImage");

setInterval(() => {
    currentHero = (currentHero + 1) % heroImages.length;
    heroImgElement.src = heroImages[currentHero];
}, 3000);

// Boutons "Voir tout"
document.querySelectorAll('.section-header button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("Vous avez cliqué sur 'Voir tout'");
    });
});

// Bouton Subscribe
document.querySelector('.subscription-form button').addEventListener('click', () => {
    const email = document.querySelector('.subscription-form input').value;
    if(email) {
        alert(`Merci de vous être inscrit avec l'email: ${email}`);
    } else {
        alert("Veuillez entrer votre email");
    }
});