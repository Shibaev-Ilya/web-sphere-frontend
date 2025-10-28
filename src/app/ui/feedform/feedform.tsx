'use client';
export default function FeedForm() {
    return (
        <form className="form">
                <input type="hidden" name="type" value="form" />
                <input type="hidden" name="form_id" value="callback" />
                <input type="hidden" name="form_name" value="Callback" />
                <label>
                    <input className="form__input" type="text" name="name" placeholder="Имя"/>
                </label>
                <label>
                    <input className="form__input" type="tel" name="phone" placeholder="Телефон*" />
                </label>
                <label>
                    <input className="form__input" type="email" name="email" placeholder="Email" />
                </label>
                <label>
                    <textarea className="form__input" name="message" cols={30} rows={5} placeholder="Дополнительная информация о проекте"></textarea>
                </label>
                <label className="form__checkbox-label">
                    <input className="form__checkbox" type="checkbox" name="agree" required />
                    <span>
                            Согласен на <a href="#" target="_blank">обработку персональных данных</a>
                        </span>
                </label>
                <label className="form__checkbox-label">
                    <input className="form__checkbox" type="checkbox" name="agree" required />
                    <span>
                        Ознакомлен с <a href="#" target="_blank" className="">политикой конфиденциальности</a>
                    </span>
                </label>
                <button type="submit" className="form__submit-button simple-button simple-button_light">Отправить</button>
            </form>
    );
}