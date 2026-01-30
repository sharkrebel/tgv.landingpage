'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils'; // Ensure lib/utils exists or create it

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Venture', href: '/venture' },
    { name: 'Esport', href: '/esport' },
    { name: 'Service', href: '/service' },
    { name: 'Manufacture', href: '/manufacture' },
    { name: 'Join', href: '/join' },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-300',
                isScrolled
                    ? 'bg-[#0a1f1a]/95 backdrop-blur-md border-b border-emerald-500/20 shadow-lg py-4'
                    : 'bg-[#0a1f1a]/40 backdrop-blur-sm py-6'
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="relative h-14 w-52">
                        <Image
                            src="/logo-new.png"
                            alt="Tam Giang Capital"
                            fill
                            sizes="200px"
                            className="object-contain object-left transition-all duration-300"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-emerald-400",
                                isScrolled ? "text-slate-200" : "text-white/90 hover:text-white"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        isScrolled ? "text-emerald-400" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#0a1f1a] border-t border-emerald-500/10 shadow-lg py-4 px-4 flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-slate-200 font-medium hover:text-emerald-400"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
