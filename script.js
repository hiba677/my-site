// Hero Slider full-screen
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
document.querySelectorAll('.product button').forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.parentElement.querySelector('img').alt;
        alert(`Vous avez cliqué pour voir plus de détails sur : ${productName}`);
    });
});


// Boutons "Voir les détails"
document.querySelectorAll('.product button').forEach(btn => {
    btn.addEventListener('click', () => {
        const productName = btn.parentElement.querySelector('img').alt;
        alert(`Vous avez cliqué pour voir plus de détails sur : ${productName}`);
    });
});
// Exemple: filtre catégorie
        // Exemple: filtre catégorie
        const filterButtons = document.querySelectorAll('.filters button');
        const products = document.querySelectorAll('.product-card');

    filterButtons.forEach(btn => {
     btn.addEventListener('click', () => {
     const category = btn.textContent.toLowerCase();
    products.forEach(p => {
   if (p.querySelector('h4').textContent.toLowerCase().includes(category) || category === 'tous') {
    p.style.display = 'block';
    } else {
     p.style.display = 'none';
   }
   });
   });
  });
// ===== MODAL PRODUIT =====
const modal = document.getElementById("productModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const closeBtn = document.querySelector(".close");

// Tous les boutons "Plus de détails"
const detailButtons = document.querySelectorAll(".details-btn");

detailButtons.forEach(button => {
    button.addEventListener("click", () => {
        modalImg.src = button.dataset.image;
        modalTitle.textContent = button.dataset.title;
        modalPrice.textContent = button.dataset.price;

        modal.style.display = "flex";
    });
});

// Fermer avec X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fermer en cliquant dehors
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
