export default function MarqueeEl({reverse}) {
    return (
        <div className={`marquee__items ${reverse ? `${reverse}` : ''}`}>
                <div className="marquee__item">Get best offer!</div>
                <div className="marquee__item">Web Sphere</div>
                <div className="marquee__item">Get best offer!</div>
                <div className="marquee__item">Web Sphere</div>
                <div className="marquee__item">Get best offer!</div>
                <div className="marquee__item">Web Sphere</div>
                <div className="marquee__item">Get best offer!</div>
        </div>
    )
}