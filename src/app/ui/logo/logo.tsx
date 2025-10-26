'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function HeaderLogo() {
    const pathName =usePathname();
    return (
        <>
        {pathName === '/' ? (
            <span className="header__logo">
                <Image className="header__logo-img" src="/logo/logo.svg" alt="logo" width={200} height={200} />
                <span className="header__logo-text">Web Sphere</span>
            </span>
        ) : (
            <Link className="header__logo" href={'/'}>
                <Image className="header__logo-img" src="/logo/logo.svg" alt="logo" width={200} height={200} />
                <span className="header__logo-text">Web Sphere</span>
            </Link>
        )}
        </>
    );
}