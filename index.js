// Initialize
const openModalContainer = document.querySelector(".open-modal-container");
const modalContainer = document.querySelector(".modal-container");
const openBtn = document.querySelector(".opn-btn");

openBtn.addEventListener("click", function(){
    openModalContainer.style.display = "none";
    modalContainer.style.display = "flex";
    document.body.style.background = "none";
    document.body.style.backgroundColor = "blue";
});