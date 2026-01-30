'use client';
import React from 'react';
import { motion } from 'framer-motion';

export function AboutSection() {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    {/* No animation needed here strictly, but could add generic fade in */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-serif">
                        Quỹ đầu tư Tập đoàn Tam Giang
                    </h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Animate this card coming up */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-100"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-emerald-800 mb-6 font-serif">Tầm Nhìn & Sứ Mệnh</h3>
                                <p className="text-lg text-slate-600 leading-relaxed text-justify mb-6 font-light">
                                    <strong>Tam Giang Capital</strong> không chỉ đơn thuần là một doanh nghiệp, mà là một
                                    <strong className="text-emerald-700 font-semibold"> hệ sinh thái đầu tư toàn diện</strong>.
                                    Chúng tôi kết hợp hoàn hảo giữa <strong className="text-blue-700 font-semibold">sự ổn định dòng tiền</strong> từ mảng Dịch vụ,
                                    <strong className="text-purple-700 font-semibold"> tiềm năng tăng trưởng đột phá</strong> từ Esports & Venture, và
                                    <strong className="text-green-700 font-semibold"> giá trị bền vững</strong> từ Nông nghiệp công nghệ cao.
                                </p>
                                <p className="text-lg text-slate-600 leading-relaxed text-justify font-light">
                                    Với triết lý <strong>"Bệ phóng cho sự thịnh vượng"</strong>, chúng tôi mở ra cơ hội hợp tác chiến lược cho các nhà đầu tư thiên thần,
                                    cùng nhau kiến tạo những giá trị vượt trội và chia sẻ thành quả của sự phát triển thần tốc nhưng chắc chắn.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="p-6 bg-blue-50/50 border-l-4 border-blue-500 rounded-r-xl transition-all hover:bg-blue-50 hover:shadow-md"
                                >
                                    <h4 className="text-lg font-bold text-blue-900 mb-1">Tam Giang Service</h4>
                                    <p className="text-slate-600">Hệ thống dịch vụ công & BHYT số hóa - "Cash Cow" mang lại dòng tiền ổn định mỗi ngày.</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="p-6 bg-purple-50/50 border-l-4 border-purple-500 rounded-r-xl transition-all hover:bg-purple-50 hover:shadow-md"
                                >
                                    <h4 className="text-lg font-bold text-purple-900 mb-1">Esports & Venture</h4>
                                    <p className="text-slate-600">Đi đầu xu hướng giải trí số và đầu tư tài chính với tỷ suất lợi nhuận cao.</p>
                                </motion.div>
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="p-6 bg-green-50/50 border-l-4 border-green-500 rounded-r-xl transition-all hover:bg-green-50 hover:shadow-md"
                                >
                                    <h4 className="text-lg font-bold text-green-900 mb-1">Tam Giang Manufacture</h4>
                                    <p className="text-slate-600">Nền tảng sản xuất & nông nghiệp xanh - Cam kết cho tương lai bền vững (ESG).</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
