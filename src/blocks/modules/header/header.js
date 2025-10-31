document.addEventListener("DOMContentLoaded", function () {
    const burgerButton = document.querySelector(".js-burger");
    const menuBlock = document.querySelector(".js-menu");
    const menuLinks = document.querySelectorAll(".js-header-link");

    if (!burgerButton) return;
    const onBurgerClick = (e) => {
        if (e.currentTarget.classList.contains("open")) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    const openMenu = () => {
        menuBlock.classList.add("open");
        burgerButton.classList.add("open");
        document.body.classList.add("no-scroll");
    };
    const closeMenu = () => {
        menuBlock.classList.remove("open");
        burgerButton.classList.remove("open");
        document.body.classList.remove("no-scroll");
    };

    burgerButton.addEventListener("click", onBurgerClick);

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            closeMenu();
        });
    });

    window.addEventListener("resize", () => {
        if (burgerButton.classList.contains("open")) {
            closeMenu();
        }
    });

});
