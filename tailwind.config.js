module.exports = {
  important: true,
  content: ["./dist/**/*.{html,js}"],
  darkMode: false,
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  colors: {
    gray: {
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#ff0000',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}