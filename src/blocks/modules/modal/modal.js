function initModals() {
    const bodyElement = document.body;
    const modalButtons = document.querySelectorAll(".js-open-modal");
    const modalBackground = document.createElement("div");

    modalBackground.classList.add("modal-background");

    modalButtons.forEach(button => {
        if (!button.classList.contains("modal-init")) {
            button.classList.add("modal-init");
            button.addEventListener("click", function (e) {
                const thisButton = e.currentTarget;
                const modalId = thisButton.getAttribute("data-modal-id");
                const modal = document.querySelector(`#${modalId}`);
                const cloneModal = modal.cloneNode(true);

                cloneModal.classList.add("modal_open");
                modalBackground.appendChild(cloneModal);
                bodyElement.appendChild(modalBackground);
                bodyElement.classList.add("modal-open");

                cloneModal.querySelector(".js-button-close").addEventListener("click", onCloseButtonClick);
                setTimeout(function () {
                    cloneModal.style.transform = "translateY(0)";
                    modalBackground.style.opacity = "1";
                }, 200);
            });
        }
    });

    function closeModal() {
        const openModal = document.querySelector(".modal_open");
        if (openModal) {

            openModal.style.opacity = "0";
            setTimeout(function () {
                modalBackground.style.opacity = "0";
            }, 200);

            setTimeout(function () {
                openModal.classList.remove("modal_open");
                const closeButton = openModal.querySelector(".js-button-close");
                if (closeButton) {
                    closeButton.removeEventListener("click", onCloseButtonClick);
                }
                modalBackground.innerHTML = "";
                if (bodyElement.contains(modalBackground)) {
                    bodyElement.removeChild(modalBackground);
                }
                bodyElement.classList.remove("modal-open");
            }, 400);

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

    modalBackground.addEventListener("click", function(e) {
        if (e.target === modalBackground) {
            closeModal();
        }
    });
}

initModals();
