'use client';

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";

export function Hero() {
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
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-xl md:text-2xl font-light mb-6 text-emerald-400 uppercase tracking-[0.2em]">
                        Kiến Tạo Giá Trị - Vững Bước Tương Lai
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight font-serif">
                        HỆ SINH THÁI <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">ĐA NGÀNH</span>
                    </h1>

                    <div className="text-lg md:text-2xl font-light text-gray-300 space-y-2 mb-10">
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
