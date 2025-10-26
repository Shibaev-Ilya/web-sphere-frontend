import "./advantages.scss";
import Image from "next/image";
import { advantagesData } from "./data";

export default function Advantages() {
    return (
        <section className="advantages">
            <div className="container">
            <div className="advantages__inner">
                <h2 className="header-2">Почему <span className="brand-color">с нами</span> работают?</h2>

                <ul className="advantages__list">
                    {advantagesData.map((item, index) => (
                        <li key={index}>
                            <p className="advantages__item-title">
                                <Image src={item.icon} alt="award" width={26} height={26} />
                                <b>{item.title}</b>
                            </p>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
    );
}