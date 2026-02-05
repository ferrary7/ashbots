import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    const links = [
        { label: 'Home', href: '/' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'About', href: '/about-us' },
        { label: 'Contact', href: '/contact' },
    ]

    return (
        <footer className="bg-white border-t border-slate-50 pt-32 pb-16 px-6 lg:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8">
                <div className="max-w-xs space-y-6">
                    <Link href="/">
                        <Image src="/logo.png" alt="AshBots" width={110} height={32} className="h-8 w-auto transition-opacity hover:opacity-80 rounded-full shadow-sm" />
                    </Link>
                    <p className="text-slate-600 text-sm font-light leading-relaxed">
                        AI Chatbots that work while you don't. <br />
                        Based in Ottawa, Ontario.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-20">
                    <div className="space-y-6">
                        <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Company</h4>
                        <div className="flex flex-col space-y-4">
                            {links.map(l => (
                                <Link key={l.href} href={l.href} className="text-sm font-light text-slate-600 hover:text-ashbots-blue transition-colors">
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</h4>
                        <div className="flex flex-col space-y-4 text-sm font-light text-slate-600">
                            <a href="mailto:ayman@ashbots.com" className="hover:text-ashbots-blue transition-colors">ayman@ashbots.com</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-xs font-light text-slate-500 tracking-wider">
                    &copy; {new Date().getFullYear()} AshBots. All rights reserved.
                </span>
                <div className="flex space-x-8 text-[10px] font-medium uppercase tracking-widest text-slate-400">
                    <Link href="#" className="hover:text-slate-600">Privacy</Link>
                    <Link href="#" className="hover:text-slate-600">Terms</Link>
                </div>
            </div>
        </footer>
    )
}
