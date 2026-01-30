import React from 'react';

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen py-20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Về Tam Giang Capital</h1>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-4">Chúng Tôi Là Ai?</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Tam Giang Capital là một tập đoàn đầu tư đa ngành tiên phong tại Việt Nam,
                            hướng tới việc xây dựng một hệ sinh thái kinh doanh bền vững bao gồm Công nghệ, Tài chính, Nông nghiệp và Dịch vụ.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Với tầm nhìn vươn ra biển lớn, chúng tôi không chỉ cung cấp nguồn vốn mà còn mang đến chiến lược quản trị và vận hành xuất sắc,
                            là đối tác tin cậy đồng hành cùng các doanh nghiệp khởi nghiệp và nhà đầu tư trên hành trình chinh phục những đỉnh cao mới.
                        </p>
                    </div>
                    <div className="h-80 bg-slate-200 rounded-2xl flex items-center justify-center">
                        <span className="text-slate-400 font-medium">Hình ảnh giới thiệu</span>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-emerald-600 mb-2">Sứ Mệnh</h3>
                        <p className="text-slate-600">Kiến tạo giá trị bền vững cho cổ đông và cộng đồng thông qua các khoản đầu tư chiến lược và đổi mới sáng tạo.</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-emerald-600 mb-2">Tầm Nhìn</h3>
                        <p className="text-slate-600">Trở thành cầu nối đầu tư uy tín hàng đầu, kết nối nguồn lực Việt Nam với nền kinh tế toàn cầu.</p>
                    </div>
                    <div className="p-8 bg-slate-50 rounded-xl hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-emerald-600 mb-2">Giá Trị Cốt Lõi</h3>
                        <p className="text-slate-600">Minh bạch - Đổi mới - Bền vững - Trách nhiệm xã hội.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
