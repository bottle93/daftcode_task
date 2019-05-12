window.addEventListener('DOMContentLoaded', () => {

    const btnOpen = document.getElementById("openModal");
    const btnClose = document.getElementById("closeModal");
    const modal = document.getElementById("modalWindow");
    const modalContainer = document.getElementById("modalContainer");

    if(btnClose && btnOpen) {
        btnOpen.addEventListener("mousedown", () => {
            modal.classList.add('visible');
            modalContainer.classList.add('overlay')
        });

        btnClose.addEventListener("mousedown", () => {
            modal.classList.remove('visible');
            modalContainer.classList.remove('overlay')
        });
    }
});
