import './footer.scss';
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
        <div className="footer__container">
            <div className="footer__row footer__top">

                
                <div className="footer__logo">
                    <span className="footer__logo-text">Web Sphere</span>
                </div>
                
                <ul className="footer__menu-wrap">

                    
                    <li>
                        <a className="footer__menu-item" href="#best">Best</a>
                    </li>
                    <li>
                        <a className="footer__menu-item" href="#contact-us">Contacts</a>
                    </li>
                </ul>
            </div>
            <div className="footer__row footer__contacts">
                <div className="footer__contacts-item">Phone: <a href="tel:+79952525063">+7 (995) 252-50-63</a></div>
                <div className="footer__contacts-item">E-mail: <a href="mailto:websphere.site@yandex.com">websphere.site@yandex.com</a></div>
            </div>
            <div className="footer__row footer__bottom">
                <div className="footer__copyright">© Web Sphere 2025, All Rights Reserved</div>
                <div className="footer__bottom-links">
                    <a href="privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>
                    <a href="terms-conditions.html" target="_blank" rel="noopener">Terms of Use</a>
                </div>
            </div>
        </div>
    </div>
        </footer>
    );
}