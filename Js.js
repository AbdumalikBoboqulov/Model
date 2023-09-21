const openModelButton = document.querySelector(".btn_openModel");
const modelContainer = document.querySelector(".OpenModel");
const closeModalButton = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

function openModal() {
  modelContainer.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modelContainer.classList.add("hidden");
  overlay.classList.add("hidden");
}

openModelButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
