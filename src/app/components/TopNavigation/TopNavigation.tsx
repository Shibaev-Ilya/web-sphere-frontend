export default function TopNavigation() {
    return (
        <nav className="header__menu js-menu">
                <ul className="header__menu-wrap">

                    <li>
                        <a className="header__menu-item simple-link" href="#">Home</a>
                    </li>
                    <li>
                        <a className="header__menu-item simple-link" href="#">Link 1</a>
                    </li>
                    <li>
                        <a className="header__menu-item simple-link js-header-link" href="#">Anchor 1</a>
                    </li>
                </ul>
                <button className="header__button simple-button js-open-modal" data-modal-id="callback">
                    <span>Обратный звонок</span>
                </button>
            </nav>
    )
}