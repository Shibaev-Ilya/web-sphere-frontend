import './marquee.scss';
import MarqueeEl from "app/ui/marqueeEl/marqueeEl";
export default function Marquee() {
    const countEl = ['', ''];

    return (
        <section className="marquee js-scroll-animate scroll-animate">
            <div className="container">
                {
                    countEl.map((s, i) => {
                        return (
                            <div className="marquee__inner" key={i}>
                                {i == 1 ? <MarqueeEl /> : <MarqueeEl reverse={'marquee__items_reverse'} />}
                                {i == 1 ? <MarqueeEl /> : <MarqueeEl reverse={'marquee__items_reverse'} />}
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}