import './cookie.scss';
import CookieButton from "app/ui/cookieButton/cookieButton";
export default function CookiePolicy() {
    return (
        <div className="cookie" id="cookie-notification">
            <div className="container cookie__inner">
                <p className="cookie__text">
                    Сайт использует куки</p>
                <CookieButton />
            </div>
        </div>
    );
}