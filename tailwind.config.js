/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
      },
      colors: {
        'terminal-black': '#0d1117',
        'terminal-green': '#00ff41',
        'terminal-blue': '#2f81f7',
        'terminal-gray': '#8b949e',
      }
    },
  },
  plugins: [],
}
