import React from 'react';

const services = [
    {
        title: "Dịch Vụ BHXH (Cash Cow)",
        description: "Hệ thống dịch vụ Bảo hiểm xã hội số hóa: Đăng ký BHYT, hỗ trợ rút BHXH 1 lần. Nền tảng tạo dòng tiền ổn định và bền vững.",
        icon: "🏥"
    },
    {
        title: "Hệ Sinh Thái Esports",
        description: "Xây dựng tương lai thể thao điện tử với nền tảng giao dịch tự động và tổ chức giải đấu chuyên nghiệp.",
        icon: "🎮"
    },
    {
        title: "Đầu Tư Mạo Hiểm (Venture)",
        description: "Tam Giang Venture đầu tư vào các chứng khoán và startup tiềm năng, biến rủi ro thành cơ hội lợi nhuận cao.",
        icon: "📈"
    },
    {
        title: "Nông Nghiệp & Sản Xuất",
        description: "Nông nghiệp công nghệ cao và sản xuất bền vững, ứng dụng AI và công nghệ sinh học.",
        icon: "🌱"
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-slate-50 min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Lĩnh Vực Hoạt Động</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Giải pháp toàn diện đa ngành, thiết kế cho sự tăng trưởng và phát triển bền vững.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-4xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
