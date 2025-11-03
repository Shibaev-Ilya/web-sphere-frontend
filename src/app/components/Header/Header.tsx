import './header.scss';
import TopNavigation from '../TopNavigation/TopNavigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../../ui/logo/logo';

export default function Header() {
  return (
    <header className="header light" id="header">
        <div className="container header__container">
            <Logo />
            <BurgerMenu />
            <TopNavigation />
        </div>
    </header>
    );
}