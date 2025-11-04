import Link from "next/link";
import CallButton from "app/ui/callButton/callButton";
export default function TopNavigation() {
    return (
        <nav className="header__menu js-menu">
                <ul className="header__menu-wrap">

                    <li>
                        <Link className="header__menu-item simple-link" rel="privacy-policy" href="https://web-sphere.site/policy/">Policy</Link>
                    </li>
                </ul>
                <CallButton />
            </nav>
    )
}