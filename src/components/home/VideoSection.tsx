'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function VideoSection() {
    return (
        <section className="py-24 bg-slate-950 text-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 text-center"
            >
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif tracking-tight">
                        Tầm Nhìn <span className="text-emerald-400">Tam Giang</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-12"></div>

                    <div className="aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)] border border-emerald-500/20 bg-black">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/XHOmBV4js_E"
                            title="Tam Giang Capital Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
