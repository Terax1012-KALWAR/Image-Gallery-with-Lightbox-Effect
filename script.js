const modal = document.getElementById("lightbox-modal");
const modalImg = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = image.src;
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if(e.target === modal) {
        modal.style.display = "none";
    }
});