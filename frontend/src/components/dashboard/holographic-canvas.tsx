'use client';

import { useEffect, useRef } from 'react';

export interface HolographicCanvasProps {
  className?: string;
}

/**
 * Lightweight particle field rendered on canvas to emulate holographic depth.
 */
export function HolographicCanvas({ className }: HolographicCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Array<{ x: number; y: number; z: number }>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    const resize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    particles.current = Array.from({ length: 42 }, () => ({
      x: Math.random(),
      y: Math.random(),
      z: Math.random(),
    }));

    let animationFrame: number;

    const render = () => {
      if (!context) return;
      const { width, height } = canvas;
      context.clearRect(0, 0, width, height);
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.2)');
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0.1)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      particles.current.forEach((particle) => {
        particle.z += 0.003;
        if (particle.z > 1) particle.z = 0;
        const depth = particle.z * 1.8;
        const px = particle.x * width;
        const py = particle.y * height;
        const size = 1.6 + depth * 2.2;
        context.beginPath();
        context.fillStyle = `rgba(0, 255, 160, ${0.2 + depth * 0.5})`;
        context.shadowColor = 'rgba(0, 255, 160, 0.6)';
        context.shadowBlur = 12;
        context.arc(px, py, size, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = requestAnimationFrame(render);
    };

    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}
