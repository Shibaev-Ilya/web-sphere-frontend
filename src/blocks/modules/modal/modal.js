let modalStack = []; // Стек для хранения открытых модальных окон
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
        modal.addEventListener("click", e => e.target === modal && closeTopModal());
    });

    document.addEventListener("keydown", e => e.key === "Escape" && closeTopModal());
}

export function openModal(modalId, response = "", type = "success") {
    const modal = document.querySelector(`#${modalId}`);
    if (!modal) return;

    modalStack.push({
        element: modal,
        id: modalId,
        response: response,
        type: type
    });

    modal.classList.add("modal_open");
    body.classList.add("modal-open");

    updateModalZIndex();

    modal.querySelector(".js-button-close")?.addEventListener("click", closeTopModal);

    if (response) {
        modal.querySelector(".js-modal-text").textContent = response;
        modal.classList.add(`modal_${type}`);
    }
}

export function closeTopModal() {
    if (modalStack.length === 0) return;

    const topModal = modalStack.pop();
    const modal = topModal.element;

    body.classList.remove("modal-open");
    modal.classList.remove("modal_open");
    modal.classList.remove(`modal_${topModal.type}`);
    modal.querySelector(".js-button-close")?.removeEventListener("click", closeTopModal);

    if (modalStack.length === 0) {
        body.classList.remove("modal-open");
    }
}

function updateModalZIndex() {
    modalStack.forEach((modal, index) => {
        modal.element.style.zIndex = (1000 + index).toString();
    });
}

document.addEventListener("wpcf7mailsent", function(event) {
    const response = event.detail.apiResponse.message;
    openModal("popup", response, "success");

    setTimeout(() => {
        if (modalStack.length > 0 && modalStack[modalStack.length - 1].id === "popup") {
            closeTopModal();
        }
    }, 5000);
}, false);

document.addEventListener("wpcf7mailfailed", function(event) {
    const response = event.detail.apiResponse.message;
    openModal("popup", response, "error");

    setTimeout(() => {
        if (modalStack.length > 0 && modalStack[modalStack.length - 1].id === "popup") {
            closeTopModal();
        }
    }, 5000);
}, false);

initModals();
