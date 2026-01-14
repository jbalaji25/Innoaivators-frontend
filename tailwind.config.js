const config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-black': '#000000',
        'secondary-silver': '#C0C0C0',
        'primary-purple': '#5B21B6',
        'secondary-indigo': '#312E81',
        'border-purple': '#6D28D9',
      },
    },
  },
  plugins: [],
};

export default config;
