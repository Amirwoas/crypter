/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        BlueRibbon: {
          50: '#D3DCFD',
          100: '#B5C5FC',
          200: '#90A7FA',
          300: '#6B8AF8',
          400: '#466DF7',
          500: '#2150F5',
          600: '#1C43CC',
          700: '#1635A3',
          800: '#0B1B52',
          900: '#071031',
        },
        Pomegranate: {
          50: '#FDD8D3',
          100: '#FCBDB5',
          200: '#FA9C90',
          300: '#F87C6B',
          400: '#F75B46',
          500: '#F53A21',
          600: '#A32716',
          700: '#7B1D11',
          800: '#52130B',
          900: '#310C07',
        },
        Foam: {
          50: '#FAFDFF',
          100: '#F2FAFE',
          200: '#EEF8FE',
          300: '#E9F7FD',
          400: '#E5F5FD',
          500: '#BFCCD3',
          600: '#99A3A9',
          700: '#737B7F',
          800: '#4C5254',
          900: '#2E3133',
        },
        BlueCharcoal: '#000517',
        FuelYellow: '#FFD770',
        Malachite: '#18CE2A',
      },
      backgroundImage: {
        'footer': "url('https://s8.uupload.ir/files/3d-illustration-blue-purple-futuristic-sci-fi-techno-lights-cool-background_1_mobile_1jwi.png')",
      }
    },
  },
  plugins: [],
};
