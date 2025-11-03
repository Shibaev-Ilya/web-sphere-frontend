'use client';
import { useEffect } from 'react';
import './marquee.scss';
import MarqueeEl from "app/ui/marqueeEl/marqueeEl";
export default function Marquee() {
    const countEl = ['', ''];
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
        }, {
            rootMargin: "0px 0px -70px 0px" // Элемент появится когда до него останется 50px
        });
        const marqueeTarget = document.querySelector(".marquee");
        observer.observe(marqueeTarget);
    }, []);

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