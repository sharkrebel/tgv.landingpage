'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
    title?: string;
    className?: string;
}

export function Counter({ end, duration = 2000, suffix = '', prefix = '', title, className = '' }: CounterProps) {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(end * percentage));

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <div ref={countRef} className={`text-center ${className}`}>
            <div className="text-4xl md:text-5xl font-bold text-emerald-500 mb-2">
                {prefix}{count.toLocaleString()}{suffix}
            </div>
            {title && <div className="text-lg text-slate-600 font-medium uppercase tracking-wide">{title}</div>}
        </div>
    );
}
