'use client';
import Image from "next/image";
import { acceptCookie } from "./index";

export default function CookieButton() {

    return (
        <button type="button" className="cookie__btn simple-button  js-cookie-accept" onClick={() => acceptCookie()}>
            <span>Приемлимо</span>
            <Image src="/icons/cookie.svg" alt="cookie policy accept." width={20} height={20} />
        </button>
    )
}