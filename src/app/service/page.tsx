'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HERO_BG = '/images/slider_map.png'; // Using generic map or pattern if specific BG missing, or white.
// Fusion config says bg color white/light green.

export default function ServicePage() {
    return (
        <div className="bg-white min-h-screen font-sans">

            {/* Header Section */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
                    <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-6 font-serif">
                        Quỹ khởi nghiệp sáng tạo <br />
                        <strong>về dịch vụ</strong>
                    </h1>
                    <div className="text-xl md:text-3xl font-light text-slate-600 mt-8 max-w-4xl">
                        Sáng tạo và đổi mới trong các lĩnh vực dịch vụ truyền thống
                    </div>
                </div>
                {/* Decorative BG element if needed */}
            </section>

            {/* Features Grid */}
            <section className="py-0">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Feature 1: Convenience */}
                    <div className="bg-white p-12 border border-slate-100 flex flex-col justify-center min-h-[400px]">
                        <div className="text-orange-500 text-5xl mb-6">★</div>
                        <h3 className="text-3xl font-serif text-slate-800 mb-4">Tiện lợi</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Tam Giang cung cấp dịch vụ hoàn toàn online, giúp khách hàng tiết kiệm thời gian và công sức.
                            Hệ thống số hóa hiện đại đảm bảo trải nghiệm mượt mà, mọi lúc, mọi nơi.
                        </p>
                    </div>

                    {/* Feature 2: Simple */}
                    <div className="bg-teal-900 p-12 flex flex-col justify-center min-h-[400px] text-white">
                        <div className="text-orange-500 text-5xl mb-6">🕊️</div>
                        <h3 className="text-3xl font-serif mb-4">Đơn giản</h3>
                        <p className="text-lg leading-relaxed opacity-90">
                            Chúng tôi thiết kế thủ tục tối giản, dễ hiểu để khách hàng hoàn tất nhanh chóng.
                            Mọi quy trình tại Tam Giang đều được tối ưu hóa vì sự thuận tiện của bạn.
                        </p>
                    </div>

                    {/* Feature 3: Prestige */}
                    <div className="bg-slate-50 p-12 flex flex-col justify-center min-h-[400px]">
                        <div className="text-orange-500 text-5xl mb-6">✓</div>
                        <h3 className="text-3xl font-serif text-slate-800 mb-4">Uy tín</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Tam Giang luôn đặt uy tín và sự tận tâm lên hàng đầu, xây dựng niềm tin vững chắc với khách hàng.
                            Mỗi cam kết của chúng tôi đều được thực hiện với trách nhiệm cao nhất.
                        </p>
                    </div>

                    {/* Feature 4: Quality */}
                    <div className="bg-white p-12 border border-slate-100 flex flex-col justify-center min-h-[400px]">
                        <div className="text-orange-500 text-5xl mb-6">⚛</div>
                        <h3 className="text-3xl font-serif text-slate-800 mb-4">Chất lượng</h3>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Dịch vụ của Tam Giang đảm bảo tính bài bản, chuyên nghiệp và tuân thủ đúng quy định.
                            Chúng tôi mang đến giải pháp chuyên sâu, đáp ứng tiêu chuẩn cao nhất cho khách hàng.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects List Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row shadow-2xl rounded-3xl overflow-hidden bg-slate-50">
                    {/* Left: Titled List */}
                    <div className="w-full md:w-1/2 p-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-12">Dự án đã triển khai thực tế</h2>
                        <ul className="space-y-6">
                            {[
                                'dichvubhxh.vn',
                                'muabhyt.vn',
                                'congdichvubhxh.vn',

                            ].map((site, i) => (
                                <li key={i} className="flex items-center text-xl text-slate-700 hover:text-orange-600 transition-colors">
                                    <span className="bg-slate-200 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4 font-bold">{i + 1}</span>
                                    <a href={`https://${site}`} target="_blank" rel="noopener noreferrer">
                                        <strong>{site}</strong>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right: Logo */}
                    <div className="w-full md:w-1/2 bg-teal-900 flex items-center justify-center p-12">
                        <div className="bg-white p-8 rounded-full shadow-2xl w-64 h-64 flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                            <Image
                                src="/images/logo_-removebg-preview-300x300.png"
                                alt="Tam Giang Logo"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        {/* Circle 1 */}
                        <article className="flex flex-col items-center group">
                            <div className="w-48 h-48 rounded-full border-4 border-dashed border-emerald-200 flex items-center justify-center mb-6 group-hover:border-emerald-500 transition-all duration-500 bg-white/50 backdrop-blur-sm">
                                <span className="text-5xl font-bold text-emerald-900">5+</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide text-center">Năm kinh nghiệm xây dựng hệ thống</h3>
                        </article>

                        {/* Circle 2 */}
                        <article className="flex flex-col items-center group">
                            <div className="w-48 h-48 rounded-full border-4 border-dashed border-emerald-200 flex items-center justify-center mb-6 group-hover:border-emerald-500 transition-all duration-500 bg-white/50 backdrop-blur-sm">
                                <span className="text-5xl font-bold text-emerald-900">10+</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide text-center">Sản phẩm dịch vụ cung cấp</h3>
                        </article>

                        {/* Circle 3 */}
                        <article className="flex flex-col items-center group">
                            <div className="w-48 h-48 rounded-full border-4 border-dashed border-emerald-200 flex items-center justify-center mb-6 group-hover:border-emerald-500 transition-all duration-500 bg-white/50 backdrop-blur-sm">
                                <span className="text-5xl font-bold text-emerald-900">5+</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide text-center">Hệ sinh thái liên kết đa ngành</h3>
                        </article>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 blur-3xl bg-emerald-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Sẵn sàng hợp tác cùng Tam Giang Capital?</h2>
                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                            Chúng tôi luôn chào đón các đối tác chiến lược có cùng tầm nhìn và khát khao kiến tạo giá trị đột phá.
                        </p>
                        <a
                            href="mailto:contact@tamgiangcapital.com"
                            className="inline-flex items-center px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20"
                        >
                            Liên hệ hợp tác ngay
                        </a>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
