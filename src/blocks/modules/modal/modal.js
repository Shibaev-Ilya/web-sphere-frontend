function initModals() {
    const bodyElement = document.body;
    const modalButtons = document.querySelectorAll(".js-open-modal");
    let currentModal = null;

    modalButtons.forEach(button => {
        if (!button.classList.contains("modal-init")) {
            button.classList.add("modal-init");
            button.addEventListener("click", function (e) {
                const thisButton = e.currentTarget;
                const modalId = thisButton.getAttribute("data-modal-id");
                currentModal = document.querySelector(`#${modalId}`);

                currentModal.classList.add("modal_open");
                bodyElement.classList.add("modal-open");

                currentModal.querySelector(".js-button-close").addEventListener("click", onCloseButtonClick);
                currentModal.querySelector(".modal__wrapper").style.clipPath = "inset(0 0 0 0%)";
            });
        }
    });

    function closeModal() {
        if (currentModal) {
            bodyElement.classList.remove("modal-open");
            currentModal.querySelector(".modal__wrapper").removeAttribute("style");
            currentModal.classList.remove("modal_open");
            const closeButton = currentModal.querySelector(".js-button-close");
            if (closeButton) {
                closeButton.removeEventListener("click", onCloseButtonClick);
            }
            currentModal = null;

        }
    }

    function onCloseButtonClick() {
        closeModal();
    }

    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            closeModal();
        }
    });

    // modalBackground.addEventListener("click", function(e) {
    //     if (e.target === modalBackground) {
    //         closeModal();
    //     }
    // });
}

initModals();
