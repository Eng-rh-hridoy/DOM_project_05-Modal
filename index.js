// Initialize
const openModalContainer = document.querySelector(".open-modal-container");
const modalContainer = document.querySelector(".modal-wrapper");
const openBtn = document.querySelector(".opn-btn");
const closeBtn = document.querySelector(".close-modal")

openBtn.addEventListener("click", function(){
    modalContainer.style.display = "flex";
    document.body.style.backgroundImage = 'linear-gradient(rgb(31 193 255 / 40%), rgb(17 154 206 / 50%)), url(images/background.jpg)';
});

closeBtn.addEventListener("click", function(){
    modalContainer.style.display = "none";
    document.body.style.backgroundImage = 'url("images/background.jpg")';
});