import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AshBots - Custom AI Chatbots for Your Business',
    description: 'Build custom AI chatbots that help businesses reply to customers instantly, capture leads, and handle bookings 24/7. Work directly with the developer who builds it.',
    keywords: 'AI chatbot, custom chatbot, business automation, lead capture, customer service, 24/7 support',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
