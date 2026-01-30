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
                isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="relative h-12 w-48">
                        <Image
                            src="/logo.png"
                            alt="Tam Giang Capital"
                            fill
                            sizes="200px"
                            className={cn(
                                "object-contain object-left transition-all duration-300",
                                isScrolled && "invert brightness-0" // Turn white logo to black on scroll
                            )}
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
                                "text-sm font-medium transition-colors hover:text-emerald-500",
                                isScrolled ? "text-gray-900" : "text-white/90 hover:text-white"
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
                        isScrolled ? "text-gray-900" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-900 font-medium hover:text-emerald-600"
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
