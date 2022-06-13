module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      white: "#ECEBEF",
      darkBlue: "#060608",
      primary:"#232F3E",
      otherBlue:"#37475A",
      orange:"#F15603",
      orange2:"#f08804",
      grey: "#B6B1AD",
    },
    fontFamily: {
      Roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}