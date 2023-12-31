import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      colors: {
        pink: "#D434FE",
        lightPink: "rgba(212, 52, 254, 0.12)",
        darkPink: "#FF26B9",
        blue: "#903AFF",
        lightBlue: "rgba(144, 58, 255, 0.12)",
        border: "#d434fe14",
        bground: "#150e28",
        contactBg: "rgba(255, 255, 255, 0.03)"
      }
    },
  },
  plugins: [],
}
export default config
