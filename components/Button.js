import Link from 'next/link'

export default function Button({ children, href, variant = 'primary', className = '', ...props }) {
    const base = "inline-flex items-center justify-center px-10 py-4 rounded-full transition-all duration-700 font-normal tracking-wide text-sm whitespace-nowrap"

    const variants = {
        primary: "bg-slate-900 text-white hover:bg-ashbots-blue hover:shadow-glow-blue",
        secondary: "bg-white text-slate-800 border border-slate-100 shadow-premium hover:shadow-premium-hover",
        ghost: "text-slate-500 hover:text-ashbots-blue bg-transparent border border-transparent hover:border-ashbots-blue/20 px-6",
        outline: "border border-slate-200 text-slate-700 hover:border-ashbots-blue hover:text-ashbots-blue",
    }

    const classes = `${base} ${variants[variant]} ${className}`

    if (href) return <Link href={href} className={classes} {...props}>{children}</Link>
    return <button className={classes} {...props}>{children}</button>
}
