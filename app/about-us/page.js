import Button from '@/components/Button'

export default function AboutUs() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-64 pb-32 px-6 lg:px-12 overflow-hidden bg-soft-mesh min-h-screen flex flex-col justify-center border-b border-slate-50">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto w-full relative z-10">
                    <div className="max-w-3xl space-y-12 animate-fade-in text-left">
                        <div className="inline-flex items-center space-x-3 px-4 py-2 bg-ashbots-blue/5 rounded-full border border-ashbots-blue/10 backdrop-blur-sm">
                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ashbots-blue">The Mission</span>
                        </div>

                        <h1 className="text-5xl md:text-8xl leading-[1.1] font-display text-slate-900">
                            Meet the founder <br />
                            <span className="text-ashbots-blue italic opacity-90">of AshBots</span>
                        </h1>

                        <p className="text-lg md:text-xl font-light text-slate-700 max-w-2xl leading-relaxed">
                            Hi, I&apos;m Ayman. <br />
                            <span className="text-slate-600 text-base md:text-lg">My name is Ayman Ashraf. I am an Electrical Engineering student and the founder of AshBots.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-48 px-6 lg:px-12 relative bg-white">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.01] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-32 items-start">
                        <div className="space-y-24">
                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-6xl font-display text-slate-900 leading-tight">Why I started <br /><span className="text-slate-500">AshBots</span></h2>
                                <p className="text-lg font-light text-slate-700 leading-loose border-l-2 border-ashbots-blue/5 pl-10 italic">
                                    I started AshBots out of pure curiosity. I&apos;ve always been drawn to building technology that feels smart, useful, and genuinely impressive.
                                    I did not set out to build a chatbot company. I stumbled into the concept, noticed how lifeless most business websites feel, and decided to fix it.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <h2 className="text-4xl md:text-6xl font-display text-slate-900 leading-tight">The problem <br /><span className="text-slate-500">I saw</span></h2>
                                <p className="text-lg font-light text-slate-700 leading-loose border-l-2 border-ashbots-blue/5 pl-10 italic">
                                    Many company websites sound robotic, scripted, and fake. Even with modern AI, most solutions still lack personality and context.
                                    I wanted to create something different. A virtual assistant that sounds human, understands nuance, and is trained entirely around one thing: the business it represents.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-20">
                            <div className="bg-slate-50/50 backdrop-blur-sm rounded-[4rem] p-16 space-y-12 border border-slate-100/50 shadow-premium group">
                                <div className="space-y-6">
                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ashbots-blue">The Result</span>
                                    <p className="text-2xl font-light text-slate-900 leading-tight italic">
                                        "A high quality AI assistant that works faster, more consistently, and at a fraction of the cost of a human while maintaining a premium experience."
                                    </p>
                                </div>
                                <div className="h-px w-12 bg-slate-200"></div>
                                <p className="text-sm font-light text-slate-700 leading-loose group-hover:text-slate-800 transition-colors">
                                    What began as a personal project quickly became an opportunity to help small and growing businesses automate customer interactions, bookings, and support without expensive enterprise software.
                                </p>
                            </div>

                            <div className="p-12 border-l border-slate-100 space-y-8">
                                <h2 className="text-3xl font-display text-slate-900 italic">It&apos;s personal.</h2>
                                <p className="text-sm font-light text-slate-700 leading-relaxed max-w-md">
                                    AshBots is not a generic tool I resell. It is something I design, customize, and stand behind personally.
                                    When you work with AshBots, you work directly with the developer who built it.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-48 px-6 lg:px-12 bg-slate-50/20 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-display text-slate-900 leading-tight">
                        Let&apos;s build <br /> <span className="text-ashbots-blue italic opacity-90">your voice.</span>
                    </h2>
                    <div className="pt-12">
                        <Button href="/contact" variant="primary">Work with AshBots</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
