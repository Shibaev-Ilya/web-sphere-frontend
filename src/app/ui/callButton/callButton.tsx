'use client';
import { modalInit } from "app/components/Modal";
export default function CallButton() {
    return (
        <button onClick={() => modalInit()} className="header__button simple-button js-open-modal modal-init" data-modal-id="callback">
            <span>Обратный звонок</span>
        </button>
    )
}