import Image from "next/image";
export default function HeaderLogo() {
    return (
        <span className="header__logo">
            <Image className="header__logo-img" src="/logo/logo.svg" alt="logo" width={200} height={200} />
            <span className="header__logo-text">Web Sphere</span>
        </span>
    );
}