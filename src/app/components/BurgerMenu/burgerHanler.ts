const toggleMenu = () => {
    document.querySelector(".js-menu").classList.toggle("open");
    document.querySelector(".js-burger").classList.toggle("open");
    document.body.classList.toggle("no-scroll");
}

export const handlerMenu = (open, setOpen) => {
    
    if (open) {
        toggleMenu();
        setOpen(prev => !prev);
    } else {
        toggleMenu();
        setOpen(prev => !prev);
    }
};

