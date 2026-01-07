
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
