// Effet smooth lors du chargement des pages
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.6s";
        document.body.style.opacity = 1;
    }, 100);
});

// Animation au clic sur un repas
const items = document.querySelectorAll(".item");
items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.add("clicked");
        setTimeout(() => {
            item.classList.remove("clicked");
        }, 300);
    });
});

// Contact WhatsApp automatique
function envoyerWhatsApp() {
    const numero = "237656942782";
    const message = encodeURIComponent("Salut ! Je veux commander au Foot Staff 🍽🔥");
    window.open(`https://wa.me/${numero}?text=${message}`, "_blank");
}

// Pour le bouton Contact
const btn = document.getElementById("whatsapp-btn");
if(btn){
    btn.addEventListener("click", envoyerWhatsApp);
}