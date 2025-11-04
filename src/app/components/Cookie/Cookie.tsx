import Image from "next/image";
import './cookie.scss';
export default function CookiePolicy() {
    return (
        <div className="cookie" id="cookie-notification">
            <div className="container cookie__inner">
                <p className="cookie__text">
                    Сайт использует куки</p>
                <button className="cookie__btn simple-button  js-cookie-accept">
                    <span>Приемлимо</span>
                    <Image src="/icons/cookie.svg" alt="cookie policy accept." width={20} height={20} />
                </button>
            </div>
        </div>
    );
}