/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Teal Ducks Brand Colors - Warm & Fresh Palette
        primary: {
          50: '#e6fffc',
          100: '#ccfff9',
          200: '#99fff3',
          300: '#66ffed',
          400: '#53efe6',
          500: '#40E0D0', // Ana vurgu - Turkuaz (Ferah)
          600: '#33b3a6',
          700: '#26867d',
          800: '#1a5a53',
          900: '#0d2d2a',
        },
        accent: {
          50: '#f5ede8',
          100: '#ebdbd1',
          200: '#d7b7a3',
          300: '#c39375',
          400: '#977361',
          500: '#6B4F3B', // Başlıklar, menü - Kahverengi (Sıcak)
          600: '#563f2f',
          700: '#402f23',
          800: '#2b2018',
          900: '#15100c',
        },
        gaming: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dfdf',
          300: '#66cfcf',
          400: '#33bfbf',
          500: '#009B9E', // Sekonder vurgu - Koyu Turkuaz (Derinlik)
          600: '#007c7e',
          700: '#005d5f',
          800: '#003e3f',
          900: '#001f20',
        },
        highlight: {
          50: '#fefcf5',
          100: '#fdf9eb',
          200: '#fbf3d7',
          300: '#f9edc3',
          400: '#e9d89b',
          500: '#D4AF37', // İkon, hover - Altın (Lüks)
          600: '#aa8c2c',
          700: '#7f6921',
          800: '#554616',
          900: '#2a230b',
        },
        background: {
          50: '#ffffff',
          100: '#fefdfb',
          200: '#fdfbf8',
          300: '#fcf9f5',
          400: '#faf8f4',
          500: '#E9D5B5', // Arka plan - Bej (Yumuşak)
          600: '#d4ba91',
          700: '#bf9f6d',
          800: '#aa8449',
          900: '#956925',
        },
        card: {
          50: '#ffffff',
          100: '#fefefe',
          200: '#fdfdfc',
          300: '#fcfbfa',
          400: '#faf9f6',
          500: '#F9F6F2', // Kart zeminleri - Krem (Ferah)
          600: '#e8e1d8',
          700: '#d7ccbe',
          800: '#c6b7a4',
          900: '#b5a28a',
        },
        text: {
          50: '#8b7d6b',
          100: '#7a6d5d',
          200: '#695d4f',
          300: '#584d41',
          400: '#473d33',
          500: '#362D25', // Metin - Koyu Kahve
          600: '#2b241e',
          700: '#201b16',
          800: '#15120f',
          900: '#0a0907',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #40E0D0 0%, #009B9E 100%)', // Turkuaz → Koyu Turkuaz
        'gradient-gaming': 'linear-gradient(135deg, #009B9E 0%, #6B4F3B 100%)', // Koyu Turkuaz → Kahve
        'gradient-hero': 'linear-gradient(135deg, #40E0D0 0%, #D4AF37 100%)', // Turkuaz → Altın
        'gradient-cyber': 'linear-gradient(135deg, #40E0D0 0%, #009B9E 50%, #D4AF37 100%)', // Turkuaz → Koyu Turkuaz → Altın
        'gradient-accent': 'linear-gradient(135deg, #6B4F3B 0%, #D4AF37 100%)', // Kahve → Altın
        'gradient-warm': 'linear-gradient(135deg, #E9D5B5 0%, #F9F6F2 100%)', // Bej → Krem
      },
      boxShadow: {
        'glow': '0 0 20px rgba(64, 224, 208, 0.4)', // Turkuaz glow
        'glow-lg': '0 0 40px rgba(64, 224, 208, 0.6)',
        'glow-accent': '0 0 20px rgba(212, 175, 55, 0.5)', // Altın glow
        'glow-gaming': '0 0 20px rgba(0, 155, 158, 0.5)', // Koyu Turkuaz glow
        'glow-warm': '0 0 15px rgba(107, 79, 59, 0.3)', // Kahve glow
        'neon': '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.600)',
        'neon-lg': '0 0 10px theme(colors.primary.400), 0 0 40px theme(colors.primary.600), 0 0 80px theme(colors.primary.700)',
      },
    },
  },
  plugins: [],
}
