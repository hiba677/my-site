const articles = document.querySelectorAll(".article");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");

const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");

articles.forEach(article => {
article.addEventListener("click", () => {
modalTitle.textContent = article.dataset.title;
modalPrice.textContent = article.dataset.price;
modalDescription.textContent = article.dataset.description;
modalImage.src = article.dataset.image;

modal.style.display = "block";
});
});

closeBtn.addEventListener("click", () => {
modal.style.display = "none";
});

window.addEventListener("click", (e) => {
if (e.target === modal) {
modal.style.display = "none";
}
});