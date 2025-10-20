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
