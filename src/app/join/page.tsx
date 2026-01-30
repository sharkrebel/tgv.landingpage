'use client';

import React from 'react';
import Image from 'next/image';

const BG_IMAGE = '/images/user_login_bg.jpg';
const LOGO = '/images/2_nobg-2.png';

export default function JoinPage() {
    return (
        <div className="min-h-screen flex items-center justify-center relative bg-slate-900">
            <Image src={BG_IMAGE} alt="Background" fill className="object-cover opacity-30" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-w-5xl mx-auto border border-white/20">

                    {/* Left Side: Branding */}
                    <div className="w-full md:w-1/2 p-12 flex flex-col items-center justify-center bg-black/20 text-center">
                        <div className="relative w-64 h-64 mb-6 animate-float">
                            <Image src={LOGO} alt="TGV Logo" fill className="object-contain" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Tam Giang Member</h2>
                        <p className="text-white/70">Kết nối cộng đồng, chia sẻ cơ hội.</p>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full md:w-1/2 p-12 bg-white text-slate-800">
                        <h1 className="text-3xl font-bold mb-2 text-slate-900">Đăng Ký Thành Viên</h1>
                        <p className="text-slate-500 mb-8">Gia nhập cộng đồng TGV ngay hôm nay!</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="Nhập họ tên của bạn" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Mật khẩu</label>
                                <input type="password" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all" placeholder="••••••••" />
                            </div>

                            <div className="bg-blue-50 text-blue-800 text-sm p-4 rounded-lg">
                                ℹ️ Kiểm tra email (bao gồm mục spam) để nhận thư xác nhận sau khi đăng ký.
                            </div>

                            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg hover:shadow-teal-500/30">
                                Đăng Ký Ngay
                            </button>
                        </form>

                        <div className="mt-8 text-center text-sm text-slate-500">
                            Đã có tài khoản? <a href="#" className="text-teal-600 hover:underline">Đăng nhập</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
