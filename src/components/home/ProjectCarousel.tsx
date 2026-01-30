'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Dịch vụ Bảo Hiểm Xã Hội",
        description: "Giải pháp tư vấn BHXH toàn diện, rút BHXH 1 lần, gộp sổ, và làm lại sổ BHXH.",
        image: "/images/og-image-static.png",
        link: "https://dichvubhxh.vn",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Trang Dịch Vụ BHXH",
        description: "Cổng dịch vụ bảo hiểm xã hội: Dịch vụ hoàn thiện hồ sơ BHXH, rút BHXH 1 lần, Đại lý thu BHYT online.",
        image: "/images/Hon-ca-su-quan-tam-1.png",
        link: "https://congdichvubhxh.vn",
        color: "from-blue-600 to-indigo-600"
    },
    {
        title: "Shop acc FC Online",
        description: "Đơn vị cung cấp dịch vụ FC Online số 1 Việt Nam.",
        image: "/images/banner-4Z.webp",
        link: "https://accfco.com",
        color: "from-blue-800 to-blue-900"
    },
    {
        title: "Tam Giang Food",
        description: "CTCP Hàng tiêu dùng Tam Giang - Nông nghiệp bền vững.",
        image: "/images/Tam-Giang-Food-scaled.jpg",
        link: "https://tamgiangfood.com",
        color: "from-green-500 to-emerald-600"
    },
    {
        title: "Trang đăng ký BHYT Online",
        description: "Trang mua Bảo hiểm y tế online và Nộp BHXH tự nguyện online.",
        image: "/images/ogimgtgv.png",
        link: "https://muabhyt.vn",
        color: "from-teal-500 to-cyan-600"
    }
];

export function ProjectCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 5000 })]);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6 font-serif">
                        Hệ Sinh Thái Tam Giang Capital
                    </h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="container mx-auto px-4 overflow-hidden" ref={emblaRef}>
                    <div className="flex -ml-4">
                        {projects.map((project, index) => (
                            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                                <div className="group relative h-[450px] rounded-3xl overflow-hidden shadow-xl transition-all hover:shadow-2xl border border-slate-100">
                                    {/* Background Image */}
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80 md:opacity-0 md:group-hover:opacity-90 transition-opacity duration-300`}></div>

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white translate-y-4 md:translate-y-[60%] md:group-hover:translate-y-0 transition-transform duration-300">
                                        <h3 className="text-2xl font-bold mb-3 translate-y-0 md:-translate-y-12 md:group-hover:translate-y-0 transition-transform duration-300 font-serif">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm md:text-base mb-8 opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 delay-75 font-light">
                                            {project.description}
                                        </p>

                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="inline-flex items-center text-sm font-bold uppercase tracking-widest hover:text-emerald-300 transition-colors md:opacity-0 md:group-hover:opacity-100 duration-300 delay-100"
                                        >
                                            Khám phá <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
