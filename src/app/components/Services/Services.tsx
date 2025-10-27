import './services.scss';
import Image from "next/image";
import { dataServices } from './data';

export default function Services() {
  return (
    <section className="services">
        <div className="container">
            <h2 className="header-2">Какие <span className="brand-color bold">сайты</span> мы делаем?</h2>
            <div className="services__list">
                {dataServices.map(({ id, title, description, imageSrc }) => (
                  <div key={id} className={`services__item ${id === 1 ? 'services__item_wide' : ''}`}>
                    <div className="services__item-number">{id}</div>
                    <div className="services__image">
                        <Image src={imageSrc} alt="service" width={100} height={100}/>
                    </div>
                    <div className="services__item-inner">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </section>

    );
}