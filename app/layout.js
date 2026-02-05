import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AshBots - Custom AI Chatbots for Your Business',
    description: 'Build custom AI chatbots that help businesses reply to customers instantly, capture leads, and handle bookings 24/7. Work directly with the developer who builds it.',
    keywords: 'AI chatbot, custom chatbot, business automation, lead capture, customer service, 24/7 support',
    icons: {
        icon: '/logo.png',
        apple: '/logo.png',
    }
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
                <script type="text/javascript" dangerouslySetInnerHTML={{
                    __html: `
                        (function(d, t) {
                            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
                            v.onload = function() {
                                window.voiceflow.chat.load({
                                    verify: { projectID: '698438a4d0bdb5fd8f94f4a6' },
                                    url: 'https://general-runtime.voiceflow.com',
                                    versionID: 'production',
                                    voice: {
                                        url: "https://runtime-api.voiceflow.com"
                                    }
                                });
                            }
                            v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript";
                            s.parentNode.insertBefore(v, s);
                        })(document, 'script');
                    `
                }} />
            </body>
        </html>
    )
}
