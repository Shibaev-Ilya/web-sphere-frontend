'use client';
import './intro.scss';
import { useEffect } from 'react';
import { createSphereStructure } from './intro';

export default function Intro() {

    useEffect(() => {
        createSphereStructure();
    }, []);

  return (
    <section className="intro">
        <div className="container intro__inner">
            <div className="intro__text-block">
                <p className="intro__title focus-in-expand">Web <span className="brand-color">Sphere</span></p>
                <p className="text-focus-in intro__subtitle">we develop web-sites</p>
            </div>
            <div className="sphere-container" id="sphere"></div>
        </div>
    </section>
);
};