/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
 theme: {
    extend: {
      colors: {
        'oxford-blue': 'var(--oxford-blue)',
        'iron': 'var(--iron)',
        'hoki': 'var(--hoki)',
        'pine-cone': 'var(--pine-cone)',
        'beaver': 'var(--beaver)',
        'nepal': 'var(--nepal)',
        'natural-gray': 'var(--natural-gray)',
        'mongoose': 'var(--mongoose)',
        'hit-gray': 'var(--hit-gray)',
        'fountain-blue': 'var(--fountain-blue)',
        'background': 'var(--background)',
        'heading': 'var(--heading)',
        'text': 'var(--text)',
      },
    },
  },
  plugins: [],
};
