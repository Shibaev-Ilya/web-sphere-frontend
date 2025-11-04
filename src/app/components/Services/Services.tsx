import './services.scss';
import Image from "next/image";
import { dataServices } from './data';

export default function Services() {
  return (
    <section className="services">
        <div className="container">
            <h2 className="header-2 js-scroll-animate scroll-animate">Какие <span className="brand-color bold">сайты</span> мы делаем?</h2>

            <div className="services__list">

                {
                  dataServices.map(({ id, title, description, imageSrc }) => (

                    <div key={id} className={`services__item ${id === 1 ? 'services__item_wide' : ''} js-open-modal js-scroll-animate scroll-animate ${id === 1 ? 'scroll-animate_top' : id === 2 ? 'scroll-animate_left' : 'scroll-animate_right'}`} data-modal-id="callback">

                      <div className="services__image">
                          <Image className="services__landings-img" src={imageSrc} alt="service" width={396} height={360}/>
                      </div>

                      <div className="services__item-inner">
                          <h3 className="header-3">{title}</h3>
                          <p>{description}</p>
                      </div>
                    </div>
                  ))
                }
            </div>
        </div>
    </section>

    );
}