const modal = document.querySelector(".backdrop");
const closeBtnModal = document.querySelector(".modal-btn-close");
const openBtnModal = document.querySelector(".modal-btn-open");


const toggleHidden = () => {
    modal.classList.toggle("is-hidden");
}
closeBtnModal.addEventListener("click", toggleHidden);
openBtnModal.addEventListener("click", toggleHidden);