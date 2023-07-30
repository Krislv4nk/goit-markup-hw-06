(() => {
  const refs = {
    openModalBtn: document.querySelector("[mobile-open]"),
    closeModalBtn: document.querySelector("[mobile-close]"),
    modal: document.querySelector("[mobile]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();