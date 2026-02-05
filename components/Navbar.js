'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/about-us', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-premium' : 'py-6 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center text-slate-800">
                <Link href="/" className="transition-opacity hover:opacity-80">
                    <Image src="/logo.png" alt="AshBots" width={120} height={36} className="h-9 w-auto object-contain rounded-full shadow-sm" />
                </Link>

                {/* Desktop */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-light tracking-wide text-slate-600 hover:text-ashbots-blue transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="text-xs font-medium tracking-[0.1em] uppercase border border-slate-200 px-8 py-3 rounded-full hover:bg-slate-900 hover:text-white transition-all duration-500"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl shadow-premium animate-fade-in border-t border-slate-100/50">
                    <div className="px-6 py-10 flex flex-col space-y-6 items-center">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-xl font-light text-slate-700">
                                {link.label}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-sm font-medium tracking-widest uppercase border border-slate-200 px-10 py-4 rounded-full">
                            Get Started
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    )
}
