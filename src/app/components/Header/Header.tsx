import './header.scss';
import TopNavigation from '../TopNavigation/TopNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export default function Header() {
  return (
    <header className="header light" id="header">
        <div className="container header__container">
            
            <span className="header__logo">
                    <img className="header__logo-img" src="/logo/logo.svg" alt="logo" width={200} height={200} />
                    <span className="header__logo-text">Web Sphere</span>
            </span>
            <BurgerMenu />
            <TopNavigation />
        </div>
    </header>
    );
}