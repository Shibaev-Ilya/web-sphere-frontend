'use client';
import { useEffect } from "react";
export default function Util() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            rootMargin: "0px 0px -70px 0px" // Элемент появится когда до него останется 50px
        });
        document.querySelectorAll(".scroll-animate").forEach(el => {
            observer.observe(el);
        });
        // const marqueeTarget = document.querySelector(".util");
        // observer.observe(marqueeTarget);
    }, [] );
    return (
        <div className="util"></div>
    );
}