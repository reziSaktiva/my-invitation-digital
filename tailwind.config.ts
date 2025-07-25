import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config = {
    darkMode: "class" as const,
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                'brand-background': '#FBFff6EE',
                'brand-primary': '#5C4033',
                'brand-accent': '#D3738D',
                'brand-soft': '#F9EAE1',
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                glow: {
                    "0%, 100%": {
                        boxShadow: "0 0 10px -5px theme(colors.brand-accent)",
                    },
                    "50%": {
                        boxShadow: "0 0 15px 5px theme(colors.brand-accent)",
                    },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "spin-slow": "spin 3s linear infinite",
                glow: "glow 2.5s ease-in-out infinite",
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config

export default config 