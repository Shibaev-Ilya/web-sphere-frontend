function initModals() {
    const body = document.body;
    const modals = document.querySelectorAll(".js-modal");
    let currentModal = null;

    document.querySelectorAll(".js-open-modal:not(.modal-init)").forEach(btn => {
        btn.classList.add("modal-init");
        btn.addEventListener("click", e => {
            const modal = document.querySelector(`#${e.currentTarget.dataset.modalId}`);
            if (!modal) return;

            currentModal = modal;
            modal.classList.add("modal_open");
            body.classList.add("modal-open");

            modal.querySelector(".js-button-close")?.addEventListener("click", closeModal);
        });
    });

    function closeModal(e) {
        e?.stopPropagation();

        if (currentModal) {
            body.classList.remove("modal-open");
            currentModal.classList.remove("modal_open");
            currentModal.querySelector(".js-button-close")?.removeEventListener("click", closeModal);
            currentModal = null;
        }
    }

    modals.forEach(modal => {
        modal.addEventListener("click", e => e.target === modal && closeModal());
    });

    document.addEventListener("keydown", e => e.key === "Escape" && closeModal());
}

initModals();
