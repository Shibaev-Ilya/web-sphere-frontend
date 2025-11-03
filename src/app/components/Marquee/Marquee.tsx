import './marquee.scss';
import MarqueeEl from "app/ui/marqueeEl/marqueeEl";
export default function Marquee() {
    const countEl = new Array(2);
    console.log(countEl)
    return (
        <section className="marquee js-scroll-animate scroll-animate">
            <div className="container">
                {
                    countEl.map(() => {
                        return (
                            <div className="marquee__inner">
                                <MarqueeEl />
                                <MarqueeEl />
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}