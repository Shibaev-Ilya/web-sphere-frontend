import Image from "next/image";
import Link from "next/link";
import Logo from "app/ui/logo/logo";
import './footer.scss'

export default function Footer() {
    return (
        <footer className="footer">
    <div className="container">
        <div className="footer__container">
            <div className="footer__row footer__top">
                <div className="footer__logo footer__logo_link">
                    <Image className="footer__logo-img" src="/logo/logo.svg" alt="logo" width={49} height={49} />
                    <span className="footer__logo-text">Web Sphere</span>
                </div>
                <ul className="footer__menu-wrap" id="menu-main-menu-1">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-20">
                        <Link rel="privacy-policy" href="https://web-sphere.site/policy/">Policy</Link>
                    </li>
                </ul>
            </div>
            <div className="footer__row footer__contacts">
                <div className="footer__contacts-item">Телефон: <a href="tel:+79952525063">+7 (995) 252-50-63</a></div>
                <div className="footer__contacts-item">E-mail: <a href="mailto:websphere.site@yandex.com">websphere.site@yandex.com</a>
                </div>
            </div>
            <div className="footer__row footer__bottom">
                <div className="footer__copyright">© Web Sphere 2025, All Rights Reserved</div>
                <div className="footer__bottom-links">
                    <a className="footer__copyright" href="/policy" target="_blank" rel="noopener">Политика конфиденциальности</a>
                    <a className="footer__copyright" href="/agreement" target="_blank" rel="noopener">Согласие на обработку персональных данных</a>
                </div>
            </div>
        </div>
    </div>
</footer>
    )
}