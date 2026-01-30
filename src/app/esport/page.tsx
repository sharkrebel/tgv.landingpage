import React from 'react';
import Image from 'next/image';
import { Counter } from '@/components/ui/Counter';

// Images (mapped from JSON/analysis)
const HERO_BG = '/images/organisation-slider-1-background-scaled.jpg';
const PROJECTS_BG = '/images/livestream-block-background-1-scaled.jpg';

export default function EsportPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <Image
                    src={HERO_BG}
                    alt="Esport Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-md">
                        Hệ Sinh Thái Thể Thao Điện Tử
                    </h1>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <p className="text-xl md:text-2xl text-slate-700 leading-relaxed">
                        Với tầm nhìn tiên phong trong kỷ nguyên giải trí số, <strong>Tam Giang Esports</strong> đang khẳng định vị thế dẫn đầu
                        trong thị trường giao dịch tài khoản game tự động (FC Online).
                        Chúng tôi xây dựng nền tảng công nghệ <strong>Scalable (Mở rộng)</strong> và quy trình vận hành tối ưu,
                        mở ra cơ hội tăng trưởng doanh thu vượt bậc và hướng tới tổ chức các giải đấu Esports chuyên nghiệp quy mô lớn.
                    </p>
                </div>
            </section>

            {/* Partners Gallery */}
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders/Actuals from JSON */}
                        {['2512_2.jpg', 'vnggames_logo_orange_black_stacked_ed2de4ce30.webp', 'B88STM.png', 'riot_games-brandlogo.net_.png'].map((img, i) => (
                            <div key={i} className="relative h-24 w-full">
                                <Image src={`/images/${img}`} alt="Partner" fill className="object-contain" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Game Grid */}
            <section className="py-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {[
                        'FC-ONLINE-SON.jpg',
                        'lien-minh-huyen-thoai-game-moba-pho-bien-nhat-the-gioi-21-05-2020-2.jpg',
                        'dota2_social.jpg'
                    ].map((img, i) => (
                        <div key={i} className="relative h-80 group overflow-hidden">
                            <Image src={`/images/${img}`} alt="Game" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Team Logos Grid */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        {['games-destiny-logo.png', 'games-csgo-logo.png', 'games-fortnite-logo.png', 'games-pubg-logo.png', 'games-apex-logo.png'].map((img, i) => (
                            <div key={i} className="flex justify-center items-center">
                                <Image src={`/images/${img}`} width={120} height={120} alt="Game Logo" className="opacity-70 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Table & Background */}
            <section className="relative py-24 text-white">
                <Image src={PROJECTS_BG} alt="Projects BG" fill className="object-cover" />
                <div className="absolute inset-0 bg-slate-900/80"></div>

                <div className="relative z-10 container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {/* Left Image */}
                        <div className="flex justify-center items-center">
                            <div className="relative w-full max-w-sm h-96">
                                <Image src="/images/dedicated-server.png" alt="Server" fill className="object-contain animate-float" />
                            </div>
                        </div>

                        {/* Right Table */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-4">Dự án đã triển khai:</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/20">
                                            <th className="py-2">STT</th>
                                            <th className="py-2">Tên miền</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-slate-300">
                                        {[
                                            { id: 1, url: 'accfco.com' },
                                            { id: 2, url: 'accfco.net' },
                                            { id: 3, url: 'accfco.com.vn' },
                                            { id: 4, url: 'accfco.vn' },
                                            { id: 5, url: 'accfconline.com.vn' },
                                            { id: 6, url: 'accfconline.vn' },
                                            { id: 7, url: 'accfco2.com' },
                                            { id: 8, url: 'accfconline2.com' },
                                            { id: 9, url: 'fcoshop.com.vn' },
                                            { id: 10, url: 'thienbaofco.com' },
                                            { id: 11, url: 'shopfc.online' },
                                            { id: 12, url: 'fconline.shop' },
                                        ].map((item) => (
                                            <tr key={item.id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                                <td className="py-2">{item.id}</td>
                                                <td className="py-2">
                                                    <a href={`http://${item.url}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                                                        {item.url}
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Counters */}
            <section className="py-20 bg-slate-800">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-700 pt-12">
                        <Counter end={4500} suffix="+" title="Khách hàng" />
                        <Counter end={10} suffix="+" title="Danh mục sản phẩm" />
                        <Counter end={9999} suffix="+" title="Sản phẩm đã bán" />
                    </div>
                </div>
            </section>

        </div>
    );
}
