const modal = document.querySelector(".backdrop");
const closeBtnModal = document.querySelector(".modal-btn-close");
const openBtnModal = document.querySelector(".modal-btn-open");


const toggleHidden = () => {
    modal.classList.toggle("is-hidden");
}
openBtnModal.addEventListener("click", toggleHidden);
closeBtnModal.addEventListener("click", toggleHidden);
