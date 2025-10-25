'use client';
import { useState } from "react";
import { handlerMenu } from "./burgerHanler";

export default function BurgerMenu() {
    const [open, setOpen] = useState(false);
    return (
        <button onClick={() => handlerMenu(open, setOpen)} className="header__burger js-burger" aria-label="menu">
            <span className="icon"></span>
        </button>
    );
}