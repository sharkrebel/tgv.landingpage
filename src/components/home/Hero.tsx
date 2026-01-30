'use client';

import { useCallback, useState, useEffect } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
    "Nếu muốn đi xa, hãy đi cùng nhau",
    "Hành trình vạn dặm, khởi đầu từ một bước chân",
    "Kiến Tạo Giá Trị - Vững Bước Tương Lai",
    "Hợp tác chiến lược, kiến tạo thịnh vượng",
    "Hệ sinh thái đa ngành - Vươn tầm vóc mới"
];

const keywords = ["ĐA NGÀNH", "BỀN VỮNG", "ĐỘT PHÁ", "KỸ THUẬT SỐ"];

export function Hero() {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);

    useEffect(() => {
        const phraseInterval = setInterval(() => {
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 4500);

        const keywordInterval = setInterval(() => {
            setCurrentKeywordIndex((prev) => (prev + 1) % keywords.length);
        }, 3000);

        return () => {
            clearInterval(phraseInterval);
            clearInterval(keywordInterval);
        };
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image & Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: 'url(/images/background-1.jpg)' }}
            >
                <div className="absolute inset-0 bg-black/60" /> {/* Dark Overlay */}
            </div>

            {/* World Map Overlay */}
            <div
                className="absolute inset-0 bg-[length:90%] bg-no-repeat bg-center z-5 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'url(/images/world-map.png)' }}
            />

            {/* Particles */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0 z-10"
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: { enable: true, mode: "push" },
                            onHover: { enable: true, mode: "grab" },
                            resize: true,
                        },
                        modes: {
                            grab: { distance: 140, line_linked: { opacity: 1 } },
                            push: { quantity: 4 },
                        },
                    },
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            direction: "none",
                            outModes: { default: "bounce" },
                            speed: 2,
                        },
                        number: { density: { enable: true, area: 800 }, value: 80 },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
            />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto flex flex-col items-center"
                >
                    {/* Welcome Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="mb-6 px-4 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm"
                    >
                        <span className="text-xs md:text-sm font-medium tracking-[0.3em] text-emerald-400 uppercase">
                            Welcome to Tam Giang Capital
                        </span>
                    </motion.div>

                    <div className="h-12 mb-6 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.h2
                                key={currentPhraseIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="text-xl md:text-2xl font-light text-slate-300 uppercase tracking-[0.2em]"
                            >
                                {phrases[currentPhraseIndex]}
                            </motion.h2>
                        </AnimatePresence>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-serif h-[1em] flex items-center justify-center gap-x-4">
                        <span className="shrink-0">HỆ SINH THÁI</span>
                        <div className="relative inline-block overflow-hidden h-full min-w-[5em] text-left">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentKeywordIndex}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -40 }}
                                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                    className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 whitespace-nowrap"
                                >
                                    {keywords[currentKeywordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </h1>

                    <div className="text-lg md:text-2xl font-light text-gray-400 space-y-2 mb-10">
                        <p>Dịch vụ số • Esports • Đầu tư • Nông nghiệp công nghệ cao</p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <a
                            href="/join"
                            className="inline-block px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 hover:-translate-y-1"
                        >
                            Trở Thành Nhà Đầu Tư
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
