'use client';
import { useEffect } from "react";
export default function Util() {
    useEffect(() => {
        function shouldShowNotification() {
            const lastShown = localStorage.getItem("cookieNotificationLastShown");
            if (!lastShown) return true;

            const lastShownDate = new Date(lastShown);
            const today = new Date();

            return lastShownDate.getDate() !== today.getDate() ||
                lastShownDate.getMonth() !== today.getMonth() ||
                lastShownDate.getFullYear() !== today.getFullYear();
        }
        function checkCookie() {
            const cookieNotification = document.getElementById("cookie-notification");

            if (cookieNotification) {
                const cookieAccept = cookieNotification.querySelector(".js-cookie-accept");

                if (shouldShowNotification()) {
                    cookieNotification.style.display = "block";

                    setTimeout( function () {
                        cookieNotification.classList.add("show");
                    }, 1000);
                }

                cookieAccept.addEventListener("click", function() {
                    localStorage.setItem("cookieNotificationLastShown", new Date().toISOString());
                    cookieNotification.style.display = "none";
                });
            }
        }

        checkCookie();
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