'use client';
import './modal.scss';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
export default function Modal() {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
    return null; // Не рендерим ничего на сервере
  }
  return (
    createPortal(
            <div className="modal" id="callback">
                <div className="modal__wrapper">
                    <button className="js-button-close modal__btn-close" title="Close" tabIndex={0}>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1">
                            <path d="M20 20L4 4m16 0L4 20"></path>
                        </svg> */}
                    </button>
                    <div className="modal__inner">
                        <div className="modal__title">Modal title</div>
                        <form className="form">
                            <input type="hidden" name="type" value="form" />
                            <input type="hidden" name="form_id" value="callback" />
                            <input type="hidden" name="form_name" value="Callback" />
                            <label>
                                <input className="form__input" type="text" name="name" placeholder="Name"/>
                            </label>
                            <label>
                                <input className="form__input" type="tel" name="phone" placeholder="Phone" />
                            </label>
                            <label>
                                <input className="form__input" type="email" name="email" placeholder="Email" />
                            </label>
                            <label>
                                <textarea className="form__input" name="message" cols={30} rows={5} placeholder="Additional info"></textarea>
                            </label>
                            <label className="form__checkbox-label">
                                <input className="form__checkbox"  type="checkbox" name="agree"/><span>I agree to the <a href="#">Terms of Service</a></span>
                            </label>
                            <button type="submit" className="form__submit-button simple-button simple-button_light">Send</button>
                        </form>
                    </div>
                </div>
            </div>,
        document.body
    )
  );
}