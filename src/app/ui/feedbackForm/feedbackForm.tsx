'use client';
import './feedbackForm.scss';
export default function FeedbackForm() {
    return (
        <form className="form js-scroll-animate scroll-animate">
            <input type="hidden" name="type" value="form" />
            <input type="hidden" name="form_id" value="callback" />
            <input type="hidden" name="form_name" value="Callback" />
            <label>
                <input type="text" name="name" placeholder="Имя"/>
            </label>
            <label>
                <input type="tel" name="phone" placeholder="Телефон*" />
            </label>
            <label>
                <input type="email" name="email" placeholder="Email" />
            </label>
            <label>
                <textarea name="message" cols="30" rows="5" placeholder="Дополнительная информация о проекте"></textarea>
            </label>
            <label className="checkbox-label">
                <input type="checkbox" name="agree" required />
                <span>
                    Согласен на <a href="/agreement" target="_blank">обработку персональных данных</a>
                </span>
            </label>
            <label className="checkbox-label">
                <input type="checkbox" name="agree" required />
                <span>
                    Ознакомлен с <a href="/policy" target="_blank" className="">политикой конфиденциальности</a>
                </span>
            </label>
            <input type="submit" className="simple-button simple-button_light" value="Отправить" />
        </form>
    );
}