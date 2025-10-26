import './intro.scss';
import Sphere from '../../ui/sphere/sphere';
export default function Intro() {

    return (
    <section className="intro">
        <div className="container intro__inner">
            <div className="intro__text-block">
                <p className="intro__title focus-in-expand">Web <span className="brand-color">Sphere</span></p>
                <p className="text-focus-in intro__subtitle">we develop web-sites</p>
            </div>
            <Sphere />
        </div>
    </section>
);
};