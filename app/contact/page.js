'use client'

import { useState } from 'react'
import Button from '@/components/Button'

export default function Contact() {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')

        const subject = encodeURIComponent(`AshBots Inquiry from ${name}`)
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

        window.location.href = `mailto:ayman@ashbots.com?subject=${subject}&body=${body}`

        setSubmitted(true)
    }

    return (
        <div className="bg-white min-h-screen">
            <section className="pt-64 pb-32 px-6 lg:px-12 bg-soft-mesh text-center relative border-b border-slate-50">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
                <div className="max-w-3xl mx-auto space-y-8 animate-fade-in relative z-10">
                    <h1 className="text-4xl md:text-7xl font-display text-slate-900 leading-[1.1]">
                        Contact <br />
                        <span className="text-ashbots-blue italic opacity-90">AshBots</span>
                    </h1>
                    <p className="text-xl font-light text-slate-500 leading-loose">
                        Have a question or want to see if Ashbots is a good fit for your business?
                    </p>
                </div>
            </section>

            <section className="py-32 px-6 lg:px-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32">
                    {/* Info Side */}
                    <div className="space-y-16">
                        <div className="space-y-8">
                            <h2 className="text-2xl font-display text-slate-800 leading-relaxed">
                                The best way to get started is by using the chatbot on this website or checking out the demos on the pricing page.
                            </h2>
                            <p className="text-sm font-light text-slate-500 leading-loose">
                                You can book a free, no-pressure meeting directly through the chat after testing the product yourself.
                            </p>
                        </div>

                        <div className="p-12 rounded-[3rem] bg-ashbots-blue/[0.02] border border-slate-100 space-y-6 relative overflow-hidden group shadow-sm">
                            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
                            <div className="relative z-10 space-y-6">
                                <h4 className="text-[10px] uppercase tracking-[0.2em] text-ashbots-blue font-bold">Direct Inquiries</h4>
                                <p className="text-lg font-light text-slate-600 border-b border-slate-100 pb-6">
                                    ayman@ashbots.com
                                </p>
                                <p className="text-xs font-light text-slate-400">
                                    If you&apos;d rather skip the demos and contact us directly, feel free to reach out via email.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white">
                        {submitted ? (
                            <div className="py-24 text-center space-y-6 animate-fade-in border border-slate-50 rounded-[3rem]">
                                <div className="w-16 h-16 bg-ashbots-blue/5 text-ashbots-blue rounded-full flex items-center justify-center mx-auto mb-8">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-display text-slate-900">Message Received</h3>
                                <p className="text-sm font-light text-slate-500">I will review your inquiry personally and reach out.</p>
                                <Button onClick={() => setSubmitted(false)} variant="ghost" className="mt-8">Send another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className="space-y-2 border-b border-slate-100 pb-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold">Your Name *</label>
                                    <input type="text" name="name" placeholder="Full name" className="w-full bg-transparent text-sm font-light focus:outline-none text-slate-700" required />
                                </div>
                                <div className="space-y-2 border-b border-slate-100 pb-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold">Email address *</label>
                                    <input type="email" name="email" placeholder="email@address.com" className="w-full bg-transparent text-sm font-light focus:outline-none text-slate-700" required />
                                </div>
                                <div className="space-y-2 border-b border-slate-100 pb-4">
                                    <label className="text-[10px] uppercase tracking-[0.2em] text-slate-300 font-semibold">What questions do you have? *</label>
                                    <textarea name="message" rows={4} placeholder="Describe your needs or questions..." className="w-full bg-transparent text-sm font-light focus:outline-none text-slate-700 resize-none" required />
                                </div>

                                <div className="pt-8">
                                    <Button type="submit" variant="primary" className="w-full px-16">
                                        Contact Us
                                    </Button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
