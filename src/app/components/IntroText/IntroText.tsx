import './introText.scss';
export default function IntroText() {
    return (
        <section className="intro-text">
            <div className="container">
                <h1 className="header-2">Сайты <span className="brand-color">для бизнеса</span>, которые приносят заявки</h1>
                <p>Разрабатываем современные сайты на WordPress, MODX и быстрые лендинги. От идеи до результата.</p>
                <div className="intro-text__buttons">
                    <button className="button js-open-modal" data-modal-id="callback">
                        <span>Обсудить проект</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                            <path d="M2.375 1.5L8.375 7.5L2.375 13.5" stroke="#111111" strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}