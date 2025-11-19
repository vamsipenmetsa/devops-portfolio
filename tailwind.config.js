/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dracula Theme Colors
        dracula: {
          bg: '#282a36',
          current: '#44475a',
          fg: '#f8f8f2',
          comment: '#6272a4',
          cyan: '#8be9fd',
          green: '#50fa7b',
          orange: '#ffb86c',
          pink: '#ff79c6',
          purple: '#bd93f9',
          red: '#ff5555',
          yellow: '#f1fa8c',
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'monospace'],
        sans: ['"Fira Code"', '"JetBrains Mono"', 'monospace'], // Defaulting to mono for terminal feel
      },
      boxShadow: {
        'terminal': '0 0 0 1px #6272a4, 0 0 20px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}