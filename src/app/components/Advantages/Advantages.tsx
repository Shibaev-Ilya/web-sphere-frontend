import "./advantages.scss";
import Image from "next/image";
const svgAwardPath = [
    "/sprites/award.svg",
];
const advantagesData = [
    {
        title: "Никакой абонентской платы",
        description:
            "За простые проекты — только единоразовая оплата. Вы платите за результат, а не за 'место в интернете'.",
        icon: svgAwardPath[0],
    },
    {
        title: "Честные сроки и гарантии",
        description:
            "Четко прописываем сроки в договоре и даем гарантию 1 год на все работы.",
        icon: svgAwardPath[0],
    },
    {
        title: "Говорим на одном языке",
        description:
            "Объясняем все процессы просто и понятно. Вы всегда в курсе этапов разработки.",
        icon: svgAwardPath[0],
    },
    {
        title: "Скорость и оптимизация",
        description:
            "Наши сайты быстро загружаются, что важно для SEO и удобства пользователей.",
        icon: svgAwardPath[0],
    },
];
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