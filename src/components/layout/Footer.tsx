import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        {/* Assuming we might use the icon here or just text if logo is too big */}
                        <span className="text-2xl font-serif font-bold text-white tracking-tight">TGV Capital</span>
                    </div>
                    <p className="text-sm leading-relaxed max-w-xs text-slate-400">
                        Pioneering the future of investment and multi-industry ecosystems in Vietnam. Building sustainable value for generations.
                    </p>
                    <div className="flex space-x-4 pt-2">
                        {/* Social placeholders */}
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors cursor-pointer"></div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors cursor-pointer"></div>
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Company</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
                        <li><Link href="/careers" className="hover:text-emerald-500 transition-colors">Careers</Link></li>
                        <li><Link href="/news" className="hover:text-emerald-500 transition-colors">News & Insights</Link></li>
                        <li><Link href="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Ecosystem */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Ecosystem</h3>
                    <ul className="space-y-3 text-sm">
                        <li><Link href="/service" className="hover:text-emerald-500 transition-colors">Services</Link></li>
                        <li><Link href="/venture" className="hover:text-emerald-500 transition-colors">Venture Capital</Link></li>
                        <li><Link href="/esport" className="hover:text-emerald-500 transition-colors">Esports & Entertainment</Link></li>
                        <li><Link href="/manufacture" className="hover:text-emerald-500 transition-colors">Manufacture</Link></li>
                    </ul>
                </div>

                {/* Office */}
                <div>
                    <h3 className="text-white font-semibold mb-6">Office</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start">
                            <span className="mr-2 mt-1 block w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                            <span>Ho Chi Minh City, Vietnam</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1 block w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                            <span>contact@tamgiangcapital.com</span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 mt-1 block w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                            <span>(+84) 999 999 999</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
                <p>&copy; {new Date().getFullYear()} Tam Giang Capital. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
