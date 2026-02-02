import Button from '@/components/Button'

export default function Pricing() {
    const tiers = [
        {
            name: 'Standard',
            price: '$149 setup + $19.99/ month',
            desc: 'A fully managed AI virtual assistant for your business.',
            features: [
                'Trained on your business information',
                'Handles customer conversations, questions, bookings, and lead capture',
                'Website integration included',
                'Monitoring, updates, and ongoing improvements'
            ],
            note: 'Best for businesses that want hands off support'
        },
        {
            name: 'Premium',
            price: '$299 one-time',
            desc: 'A long-term virtual assistant with no recurring fees.',
            features: [
                'Everything in Standard',
                'Lifetime updates and improvements',
                'Priority support',
                'No monthly fees'
            ],
            note: 'Best for businesses that want long-term simplicity.'
        }
    ]

    return (
        <div className="bg-white min-h-screen">
            <section className="pt-64 pb-32 px-6 lg:px-12 bg-soft-mesh relative border-b border-slate-50">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto text-center space-y-8 animate-fade-in relative z-10">
                    <h1 className="text-4xl md:text-7xl font-display text-slate-900 leading-tight">
                        Simple pricing for <br />
                        <span className="text-ashbots-blue italic opacity-90">AI chatbots</span>
                    </h1>
                    <p className="text-lg font-light text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Unlock the potential of your online presence with AshBots. We offer tailored pricing plans designed to suit small businesses looking to grow and succeed.
                    </p>
                    <div className="pt-4 p-8 bg-ashbots-blue/5 rounded-3xl border border-ashbots-blue/10 max-w-xl mx-auto backdrop-blur-sm shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-[0.05] transition-opacity pointer-events-none"></div>
                        <p className="relative z-10 text-xs font-light text-ashbots-blue tracking-wide italic">
                            "Discover our cost-effective solutions that provide exceptional value and help you make money in your sleep."
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-32 px-6 lg:px-12 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.01] pointer-events-none"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl mb-24 space-y-4">
                        <h2 className="text-3xl font-display text-slate-900">Pricing plans</h2>
                        <p className="text-sm font-light text-slate-400 leading-relaxed">
                            All plans include the same core chatbot features. The difference is how setup, updates, and ongoing support are handled.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {tiers.map((tier, idx) => (
                            <div key={idx} className="group p-12 rounded-[3rem] border border-slate-100 bg-white transition-all duration-700 hover:shadow-premium-hover hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden">
                                <div className="absolute inset-0 bg-grid-pattern opacity-0 group-hover:opacity-[0.02] transition-opacity pointer-events-none"></div>
                                <div className="relative z-10 space-y-10">
                                    <div className="space-y-4">
                                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ashbots-blue">{tier.name}</span>
                                        <h3 className="text-3xl font-display text-slate-900 leading-tight">{tier.price}</h3>
                                    </div>

                                    <p className="text-sm font-light text-slate-500 leading-relaxed italic border-l border-slate-100 pl-6">{tier.desc}</p>

                                    <div className="space-y-5">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-300">Inclusions</span>
                                            <div className="h-px flex-grow bg-slate-50"></div>
                                        </div>
                                        {tier.features.map(f => (
                                            <div key={f} className="flex items-start space-x-3 text-sm font-light text-slate-500">
                                                <div className="w-1 h-1 rounded-full bg-ashbots-blue/40 mt-2 flex-shrink-0"></div>
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="relative z-10 pt-12 space-y-6">
                                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest text-center border-t border-slate-50 pt-8">{tier.note}</p>
                                    <Button href="/contact" variant={idx === 1 ? "primary" : "outline"} className="w-full shadow-sm">
                                        View demo
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Note */}
            <section className="py-32 bg-slate-50/[0.15] relative">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
                    <div className="inline-flex items-center space-x-2 text-slate-300">
                        <div className="h-px w-8 bg-slate-200"></div>
                        <span className="text-[10px] uppercase tracking-widest font-semibold">The AshBots Approach</span>
                        <div className="h-px w-8 bg-slate-200"></div>
                    </div>
                    <p className="text-sm font-light text-slate-500 leading-loose">
                        We focus on long-term partnerships. No matter the plan, you get the same high-quality intelligence engine trained specifically on your data.
                    </p>
                </div>
            </section>
        </div>
    )
}
