'use client';
import { useEffect } from 'react';
export default function Sphere() {
    useEffect(() => {
        const canvas = document.getElementById("sphereCanvas") as HTMLCanvasElement;
        const ctx = canvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;
        const cx = w / 2;
        const cy = h / 2;

    // параметры сферы
    const radius = 210;
    const planes = 30;
    const spokes = 20;
    let angleX = 0;
    let angleY = 0;
    let paused = false;
    const speedX = 0.1;
    const speedY = 0.15;

    function rotate3D(x, y, z, ax, ay) {
        const cosY = Math.cos(ay);
        const sinY = Math.sin(ay);
        const cosX = Math.cos(ax);
        const sinX = Math.sin(ax);

        // вокруг Y
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;

        // вокруг X
        let y1 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        return [x1, y1, z2];
    }

    function draw() {
        ctx.clearRect(0, 0, w, h);

        // if (!paused) {
        //     angleX += speedX * 0.1;
        //     angleY += speedY * 0.2;
        // }

        const time = Date.now() * 0.002;
        angleX = time * 0.1;
        angleY = time * 0.2;

        ctx.fillStyle = "rgba(20,20,20, 0.8)";

        // рисуем точки на поверхности сферы
        for (let p = 0; p < planes; p++) {
            const phi = (p / planes) * Math.PI * 2;

            for (let s = 0; s <= spokes; s++) {
                const theta = (s / spokes - 0.5) * Math.PI;

                // координаты точки на сфере
                let x = radius * Math.cos(theta) * Math.cos(phi);
                let y = radius * Math.sin(theta);
                let z = radius * Math.cos(theta) * Math.sin(phi);

                // вращаем
                [x, y, z] = rotate3D(x, y, z, angleX, angleY);

                // перспектива
                const perspective = 400 / (400 + z);
                const X = cx + x * perspective;
                const Y = cy + y * perspective;

                // пульсация размера (только визуально)
                const pulsate = 1 + 0.3 * Math.sin(time * 2 + s * 0.4 + p * 0.3);
                const size = perspective * 1.8 * pulsate;

                // рисуем точку
                ctx.beginPath();
                ctx.arc(X, Y, size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        canvas.addEventListener("mouseenter", () => paused = true);
        canvas.addEventListener("mouseleave", () => paused = false);
        requestAnimationFrame(draw);
    }
        draw();
    }, []);
    return (
        <canvas className="sphere-canvas" id="sphereCanvas" width={600} height={600}></canvas>
    );
};