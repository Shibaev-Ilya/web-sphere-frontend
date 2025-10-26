'use client';
import { useEffect } from 'react';
import { createSphereStructure } from './index';
export default function Sphere() {
    useEffect(() => {
        createSphereStructure();
    }, []);
    return (
        <div className="sphere-container" id="sphere"></div>
    );
};