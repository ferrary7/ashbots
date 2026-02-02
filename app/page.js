import Button from '@/components/Button'

export default function Home() {
    return (
        <div className="bg-glow-blue font-sans">
            {/* Hero Section */}
            <section className="relative pt-64 pb-32 px-6 lg:px-12 overflow-hidden bg-soft-mesh min-h-screen flex flex-col justify-center border-b border-slate-50">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="max-w-4xl space-y-12 animate-fade-in">
                        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-ashbots-blue/5 rounded-full border border-ashbots-blue/10 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ashbots-blue opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-ashbots-blue"></span>
                            </span>
                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ashbots-blue">Based in Ottawa, Ontario</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl leading-[1.1] font-display text-slate-900">
                            You&apos;ll Never <br />
                            <span className="text-ashbots-blue italic opacity-90">Miss a Lead Again</span>
                        </h1>

                        <p className="text-lg md:text-xl font-light text-slate-500 max-w-2xl leading-loose">
                            AshBots, AI Chatbots that work while you don&apos;t.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 pt-4 items-center">
                            <Button href="/contact" variant="primary">Get Started</Button>
                            <span className="text-xs font-light text-slate-400 tracking-wide border-l border-slate-100 pl-6 h-10 flex items-center">No contracts. Cancel anytime.</span>
                        </div>
                    </div>
                </div>

                {/* Relatable Chatbot Preview */}
                <div className="absolute top-1/2 right-0 hidden lg:block w-[450px] h-[500px]">
                    <div className="absolute inset-0 bg-ashbots-blue/5 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="relative glass w-full h-full rounded-[3rem] border-slate-100 p-8 flex flex-col justify-between -rotate-3 shadow-premium overflow-hidden">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center space-x-4 border-b border-slate-100 pb-6">
                                <div className="w-10 h-10 rounded-full bg-ashbots-blue/10 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-ashbots-blue"></div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Assistant</p>
                                    <p className="text-xs font-medium text-slate-800 tracking-tight">AshBot for your business</p>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4">
                                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-2xl rounded-tl-none max-w-[80%] border border-slate-100 shadow-sm">
                                    <p className="text-[11px] font-light text-slate-600 leading-relaxed">Hi! I noticed you were looking at our pricing. Would you like a custom quote?</p>
                                </div>
                                <div className="p-4 bg-ashbots-blue text-white rounded-2xl rounded-tr-none ml-auto max-w-[70%] shadow-glow-blue/20">
                                    <p className="text-[11px] font-medium leading-relaxed italic">Yes, please. I have a small team.</p>
                                </div>
                                <div className="p-4 bg-white/50 backdrop-blur-sm rounded-2xl rounded-tl-none max-w-[85%] border border-slate-100 animate-pulse">
                                    <p className="text-[11px] font-light text-slate-600 leading-relaxed">Perfect. Let me collect a few details to get that started for you...</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 p-6 bg-white/40 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-between shadow-sm">
                            <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                    <svg className="w-4 h-4 text-ashbots-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-[10px] font-medium text-slate-600">New lead captured successfully</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-48 px-6 lg:px-12 bg-white relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.01] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-32 items-start">
                        <div className="space-y-12">
                            <div className="space-y-4">
                                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">Our Expertise</span>
                                <h2 className="text-4xl md:text-6xl font-display text-slate-900 leading-tight">
                                    Reducing <br />
                                    <span className="text-slate-400">Administrative weight.</span>
                                </h2>
                            </div>
                            <p className="text-lg font-light text-slate-500 leading-loose">
                                AshBots reduces administrative workload by handling common customer inquiries automatically.
                            </p>
                            <p className="text-sm font-light text-slate-400 leading-relaxed max-w-lg border-l-2 border-ashbots-blue/5 pl-8 italic">
                                At AshBots, we build custom AI chatbots that help businesses reply to customers instantly, capture leads, and handle bookings 24/7, so no inquiry is missed and administrative workload is reduced.
                            </p>
                        </div>

                        <div className="bg-slate-50/50 backdrop-blur-sm rounded-[4rem] p-16 space-y-8 border border-slate-100/50 shadow-premium group">
                            <p className="text-sm font-light text-slate-500 leading-loose group-hover:text-slate-600 transition-colors">
                                Each chatbot is trained specifically on your business, delivering clear and accurate responses without sounding generic or robotic.
                            </p>
                            <div className="h-px w-12 bg-slate-200"></div>
                            <p className="text-sm font-light text-slate-500 leading-loose group-hover:text-slate-600 transition-colors">
                                When you work with us, you don&apos;t work with a sales team, you work directly with the developer who builds it, ensuring your assistant is tailored precisely to your business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-48 px-6 lg:px-12 bg-slate-50/20 relative border-t border-slate-50">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="mb-24 space-y-4 text-center">
                        <h2 className="text-3xl font-display text-slate-900">What Your AI Assistant Handles</h2>
                        <div className="h-0.5 w-12 bg-ashbots-blue/20 mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { t: 'Answer Customer Questions', d: 'Your chatbot replies instantly to common or complicated questions about your services, pricing, hours and general inquiry.' },
                            { t: 'Capture Leads', d: 'It collects names, email, and messages from visitors so you don\'t lose potential customers.' },
                            { t: 'Book Appointments', d: 'Customers can book calls or appointments directly through the chatbot, even when you\'re offline.' },
                            { t: 'Built for Your Business', d: 'Every chatbot is set up based on your business, not a generic template.' }
                        ].map((f, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 hover:shadow-premium transition-all duration-700 hover:-translate-y-2 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-[0.03] transition-opacity pointer-events-none"></div>
                                <h3 className="relative z-10 text-lg font-medium text-slate-800 mb-6 leading-snug">{f.t}</h3>
                                <p className="relative z-10 text-xs font-light text-slate-400 leading-loose">{f.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-48 px-6 lg:px-12">
                <div className="max-w-3xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-6xl font-display text-slate-900 leading-tight">
                        Ready to <br /> automate the noise?
                    </h2>
                    <div className="pt-6">
                        <Button href="/contact" variant="primary">Start the process</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
