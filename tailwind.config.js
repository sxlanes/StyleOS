/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#101010', // Matte Black
                surface: '#1a1a1a', // Charcoal
                primary: '#c5a059', // Muted Gold
                'primary-hover': '#d4af37', // Bright Gold
                'text-main': '#ffffff',
                'text-muted': '#a0a0a0',
                'glass-border': 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(to right, #101010 0%, rgba(16,16,16,0.8) 100%)',
                'glass': 'rgba(26, 26, 26, 0.6)',
            }
        },
    },
    plugins: [],
}
