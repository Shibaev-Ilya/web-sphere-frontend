import './header.scss';
import TopNavigation from '../TopNavigation/TopNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import HeaderLogo from '../../ui/logo/logo';

export default function Header() {
  return (
    <header className="header light" id="header">
        <div className="container header__container">
            <HeaderLogo />
            <BurgerMenu />
            <TopNavigation />
        </div>
    </header>
    );
}