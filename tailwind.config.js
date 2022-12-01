module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xlg: '1150px',
        xl: '1440px',
      },
      colors: {
        primary: '#F28500',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '5': 'repeat(5, minmax(100px, 1fr))',
        '2': 'repeat(2, minmax(70px, 1fr))',

      }
    },
  },
  plugins: [],
};
