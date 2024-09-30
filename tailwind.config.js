/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        'primary-txt': '#344054',
        description: '#888FA7',
        disabled: '#f2f2f2',
        'secondary-btn': '#f2f2f2',
        'disabled-txt': '#bfc2cc',
        background: '#fafbff',
        error: '#ff0000',
        'color-border': '#aeaeae',
        'sky-blue': '#92D8F6',
        'main-project-blue': '#11ABEC',
        'color-shadow': '#919eab33',
        'light-blue': '#E5ECFF',
        'light-blue-linear': '#F4FDFF',
        'lighter-blue-linear': '#E5ECFF',
        'progress-background': '#EAEAEA',
        'bar-txt': '#8E8E8F',
      },
    },
  },
  plugins: [],
};
