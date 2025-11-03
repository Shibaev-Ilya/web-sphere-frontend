import CallButton from "app/ui/callButton/callButton"
export default function TopNavigation() {
    return (
        <nav className="header__menu js-menu">
                <ul className="header__menu-wrap">

                    <li>
                        <a className="header__menu-item simple-link" href="#">Policy</a>
                    </li>
                </ul>
                <CallButton />
            </nav>
    )
}