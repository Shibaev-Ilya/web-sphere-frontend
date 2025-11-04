export function acceptCookie() {
    const cookieNotification = document.getElementById("cookie-notification");
    localStorage.setItem("cookieNotificationLastShown", new Date().toISOString());
    cookieNotification.style.display = "none";
}