import React from 'react';
import Image from 'next/image';
import { Counter } from '@/components/ui/Counter';

const HERO_BG = '/images/science-hero.jpg';
const FACTS_BG = '/images/Facts_background.jpg';

export default function ManufacturePage() {
    return (
        <div className="bg-white min-h-screen">

            {/* Hero Section */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={HERO_BG}
                    alt="Manufacture Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                    <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest mb-4 opacity-90">Tam Giang Manufacture</h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">
                        Nông Nghiệp Công Nghệ Cao <br /> <span className="text-green-400">& Bền Vững (ESG)</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed text-slate-200">
                        Tiên phong ứng dụng AI & Biotech vào sản xuất nông nghiệp,
                        chúng tôi cam kết tạo ra chuỗi giá trị xanh, đáp ứng tiêu chuẩn quốc tế và mang lại lợi nhuận bền vững.
                    </p>
                </div>
            </section>

            {/* Intro / Technology Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold text-slate-800 mb-8 leading-tight">
                            Công Nghệ Sinh Học & AI <br /> Chìa Khóa Của Nông Nghiệp 4.0
                        </h2>
                        <div className="w-20 h-1 bg-green-500 mb-8"></div>
                        <p className="text-lg text-slate-600 mb-8">
                            Chúng tôi tin rằng công nghệ là chìa khóa bước vào tương lai của nông nghiệp Việt:
                        </p>
                        <ul className="space-y-6">
                            {[
                                "Dự báo chính xác nhu cầu thị trường giúp tối ưu hóa thu mua",
                                "Áp dụng công nghệ sinh học tiên tiến cho chất lượng xuất khẩu",
                                "Tự động hóa thông minh giảm chi phí chế biến"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start text-slate-700 text-lg">
                                    <span className="text-green-500 mr-4 mt-1">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/CTA_background.jpg" alt="Agri Tech" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Features 2x2 Grid */}
            <section className="bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {[
                        { title: "Innovation (Đổi mới)", icon: "research_icon.png", desc: "Tiên phong ứng dụng công nghệ hiện đại tối ưu hóa sản xuất.", bg: "bg-white" },
                        { title: "Optimization (Tối ưu hóa)", icon: "Disocver_icon.png", desc: "Tinh chỉnh chuỗi cung ứng từ thu mua đến phân phối.", bg: "bg-slate-100" },
                        { title: "Sustainability (Bền vững)", icon: "Analysis_icon.png", desc: "Xây dựng hệ sinh thái nông nghiệp xanh và bảo vệ môi trường.", bg: "bg-slate-100" },
                        { title: "Impact (Tác động)", icon: "Testing_icon.png", desc: "Cầu nối giữa nông dân, nhà đầu tư và cộng đồng.", bg: "bg-white" },
                    ].map((item, i) => (
                        <div key={i} className={`${item.bg} p-20 flex flex-col items-center text-center`}>
                            <div className="w-32 h-32 relative mb-8">
                                <Image src={`/images/${item.icon}`} alt={item.title} fill className="object-contain" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-800 mb-4">{item.title}</h3>
                            <p className="text-slate-600 text-lg max-w-md">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Facts Section */}
            <section className="relative py-32 text-slate-800">
                {/* Background Overlay trick */}
                <div className="absolute inset-0 z-0">
                    <Image src={FACTS_BG} alt="Facts BG" fill className="object-cover opacity-20" />
                </div>

                <div className="relative z-10 container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                        {[
                            { val: 100, label: "Nông sản Việt bền vững" },
                            { val: 100, label: "Hiệu quả sản xuất" },
                            { val: 95, label: "Nông dân được nâng cao thu nhập" },
                            { val: 90, label: "Nhà đầu tư đánh giá cao" }
                        ].map((item, i) => (
                            <div key={i}>
                                <div className="relative w-40 h-40 mx-auto border-8 border-green-500 rounded-full flex items-center justify-center mb-6 bg-white shadow-lg">
                                    <span className="text-4xl font-bold text-slate-900">{item.val}%</span>
                                </div>
                                <p className="text-lg font-bold text-slate-700 uppercase">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners / Certificates */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12">Luôn cải tiến và cập nhật</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Using generic names for placeholders if file names are complex */}
                        {['Thiet-ke-Logo-ISO-220002018.png', 'haccp-la-gi-4.jpg', 'logo-ocop-5-4441.jpg.webp'].map((img, i) => (
                            <div key={i} className="relative w-32 h-32">
                                <Image src={`/images/${img}`} alt="Cert" fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="relative py-40 flex items-center justify-center text-center text-white bg-teal-900">
                <Image src="/images/asia_gallery_2-1.jpg" alt="Footer BG" fill className="object-cover opacity-40" />
                <div className="relative z-10 px-4">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">Cùng Tam Giang Capital <br /> Kiến Tạo Tương Lai Xanh</h2>
                    <p className="text-xl md:text-2xl text-green-300">Cách mạng nông nghiệp, gieo mầm thịnh vượng</p>
                </div>
            </section>

        </div>
    );
}
