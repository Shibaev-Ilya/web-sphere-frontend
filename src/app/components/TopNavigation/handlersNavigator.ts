export const closeMenu = () => {
    document.querySelector(".js-menu").classList.remove("open");
    document.querySelector(".js-burger").classList.remove("open");
    document.body.classList.remove("no-scroll");
};