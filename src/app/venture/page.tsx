import React from 'react';
import Image from 'next/image';
import { Counter } from '@/components/ui/Counter';

const HERO_BG = '/images/home_finance_slider_bg.jpg';
const COUNTER_BG = '/images/counters-bg-image.jpg';
const VIDEO_BG = '/images/particle-video-dark.mp4';

export default function VenturePage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={HERO_BG}
                    alt="Finance Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 w-full overflow-hidden">
                    {/* Marquee Effect Approximation */}
                    <div className="whitespace-nowrap animate-marquee text-center">
                        <h1 className="text-[12vw] md:text-[8vw] font-bold text-white opacity-90 inline-block px-4">
                            Right People. <span className="text-emerald-500">Right Investments.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Tam Giang Venture</h2>
                        <div className="w-24 h-1 bg-emerald-500 mb-8"></div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Là "cánh tay nối dài" về tài chính của tập đoàn, <strong>Tam Giang Venture</strong> tập trung vào các cơ hội đầu tư
                            có khả năng sinh lời vượt trội trên thị trường chứng khoán và Startups.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Với phương châm <strong>"Quản trị rủi ro - Tối ưu lợi nhuận"</strong>, chúng tôi áp dụng các mô hình phân tích dữ liệu tiên tiến
                            để đưa ra các quyết định đầu tư chính xác, biến biến động thị trường thành cơ hội tăng trưởng tài sản.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Chúng tôi tin rằng: <strong className="text-emerald-600">Right People. Right Investments.</strong>
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/graph.jpg" alt="Graph" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 text-center max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Đánh Thức Tiềm Năng, Chinh Phục Thị Trường</h2>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto mb-12"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Quản lý tài sản", desc: "Tiết kiệm và Tăng trưởng", icon: "🌍" },
                            { title: "Đầu tư vốn chủ sở hữu", desc: "Niềm tin và cam kết", icon: "💎" },
                            { title: "Tài chính doanh nghiệp", desc: "Đầu tư chính xác", icon: "📈" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow border-t-4 border-emerald-500">
                                <div className="text-5xl mb-6">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-emerald-600 font-medium">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Numbers Section with BG */}
            <section className="relative py-24 text-white">
                <Image src={COUNTER_BG} alt="Counters BG" fill className="object-cover" />
                <div className="absolute inset-0 bg-emerald-900/80"></div>

                <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/3 text-center md:text-left pt-12">
                        <h3 className="text-sm font-bold tracking-widest uppercase mb-2">Cam Kết</h3>
                        <h2 className="text-4xl font-bold">Của Chúng Tôi</h2>
                    </div>

                    <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <Counter end={85} suffix="%" title="Vốn vào tài sản thanh khoản cao" className="text-left" />
                        <Counter end={75} suffix="%" title="Lợi nhuận tái đầu tư" className="text-left" />
                        <Counter end={15} suffix="%" title="Tăng trưởng hàng năm" className="text-left" />
                        <Counter end={100} suffix="%" title="Nhà đầu tư hài lòng" className="text-left" />
                    </div>
                </div>
            </section>

            {/* Ready to Talk Video Section */}
            <section className="relative py-32 flex items-center justify-center overflow-hidden">
                <video autoPlay loop muted playsInline className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0">
                    <source src={VIDEO_BG} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50 z-1"></div>

                <div className="relative z-10 text-center">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Ready to Talk?</h2>
                    <div className="space-y-4 text-emerald-200 text-xl font-light italic">
                        <p>"Tự do tài chính không phải là ước mơ xa vời"</p>
                        <p>"Hãy để tiền của bạn làm việc thay bạn!"</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
