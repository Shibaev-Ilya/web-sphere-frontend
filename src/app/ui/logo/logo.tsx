import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link className="header__logo" href={'/'}>
                <Image className="header__logo-img" src="/logo/logo.svg" alt="logo" width={49} height={49} />
                <span className="header__logo-text">Web Sphere</span>
            </Link>
    );
}