/** @type {import('tailwindcss').Config} */
console.log('Tailwind config is being loaded');
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                'ashbots-blue': {
                    DEFAULT: '#3b82f6',
                    'soft': 'rgba(59, 130, 246, 0.05)',
                    'light': '#eff6ff',
                },
                'ashbots-purple': {
                    DEFAULT: '#a855f7',
                    'soft': 'rgba(168, 85, 247, 0.05)',
                    'light': '#faf5ff',
                },
            },
            backgroundImage: {
                'premium-gradient': 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
                'soft-mesh': 'radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.03) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(168, 85, 247, 0.03) 0px, transparent 50%)',
                'grid-pattern': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M60 60H0V0h60v60zM1 59h58V1H1v58z\' fill=\'%23000\' fill-opacity=\'0.02\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
                'dot-grid': 'radial-gradient(#000000 1px, transparent 1px)',
            },
            boxShadow: {
                'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.05)',
                'premium-hover': '0 20px 50px -12px rgba(0, 0, 0, 0.08)',
                'tactile': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
        },
    },
    plugins: [],
}
