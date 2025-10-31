let currentModal = null;
const body = document.body;

function initModals() {
    const modals = document.querySelectorAll(".js-modal");

    document.querySelectorAll(".js-open-modal:not(.modal-init)").forEach(btn => {
        btn.classList.add("modal-init");
        btn.addEventListener("click", e => {
            openModal(e.currentTarget.dataset.modalId);
        });
    });

    modals.forEach(modal => {
        modal.addEventListener("click", e => e.target === modal && closeModal());
    });

    document.addEventListener("keydown", e => e.key === "Escape" && closeModal());
}

export function openModal(modalId, response = "", type = "success") {
    const modal = document.querySelector(`#${modalId}`);
    if (!modal) return;

    currentModal = modal;
    modal.classList.add("modal_open");
    body.classList.add("modal-open");

    modal.querySelector(".js-button-close")?.addEventListener("click", closeModal);

    if (response) {
        modal.querySelector(".js-modal-text").textContent = response;
        modal.classList.add(`modal_${type}`);
    }

}

export function closeModal(e) {
    e?.stopPropagation();

    if (currentModal) {
        body.classList.remove("modal-open");
        currentModal.classList.remove("modal_open");
        currentModal.querySelector(".js-button-close")?.removeEventListener("click", closeModal);
        currentModal = null;
    }
}

document.addEventListener("wpcf7mailsent", function(event) {
    const response = event.detail.apiResponse.message;
    openModal("popup", response, "success");

    setTimeout(() => {
        if (currentModal) {
            closeModal();
        }
    }, 5000);
}, false);

document.addEventListener("wpcf7mailfailed", function(event) {
    const response = event.detail.apiResponse.message;
    openModal("popup", response, "error");

    setTimeout(() => {
        if (currentModal) {
            closeModal();
        }
    }, 5000);
}, false);

initModals();
