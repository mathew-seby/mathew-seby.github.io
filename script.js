function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle("open");
    icon.classList.toggle("open");
} 
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const img = card.querySelector("img");
    if (img && img.src) {
      // Opens the image in a new browser tab
      window.open(img.src, "_blank");
    }
  });
});

