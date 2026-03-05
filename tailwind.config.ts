import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                paper: '#E8E4DD',
                'signal-red': '#E63B2E',
                'off-white': '#F5F3EE',
                black: '#111111',
                charcoal: '#2A2A2A',
                'mid-grey': '#6B6B6B',
                'light-border': '#D1CCC4',
            },
            fontFamily: {
                heading: ['var(--font-heading)', 'sans-serif'],
                drama: ['var(--font-drama)', 'serif'],
                mono: ['var(--font-mono)', 'monospace'],
            },
            animation: {
                marquee: 'marquee 60s linear infinite',
                'marquee-reverse': 'marquee-reverse 60s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-50%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
            borderRadius: {
                '2xl-custom': '2rem',
                '3xl-custom': '3rem',
                '4xl-custom': '4rem',
            },
        },
    },
    plugins: [],
};
export default config;
