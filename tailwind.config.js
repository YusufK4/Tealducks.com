/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Teal Ducks Brand Colors
        primary: {
          50: '#e6fffd',
          100: '#ccfffb',
          200: '#99fff7',
          300: '#66fff3',
          400: '#33ffef',
          500: '#00E5E0', // Ana renk - Turkuaz
          600: '#00b8b4',
          700: '#008a87',
          800: '#005c5a',
          900: '#002e2d',
        },
        accent: {
          50: '#ffe6e6',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff5959',
          500: '#FF5252', // CTA - Kırmızı
          600: '#cc4242',
          700: '#993131',
          800: '#662121',
          900: '#331010',
        },
        gaming: {
          50: '#f3e5f9',
          100: '#e1bee7',
          200: '#ce93d8',
          300: '#ba68c8',
          400: '#ab47bc',
          500: '#9C27B0', // Vurgu - Mor
          600: '#8e24aa',
          700: '#7b1fa2',
          800: '#6a1b9a',
          900: '#4a148c',
        },
        highlight: {
          50: '#fffef5',
          100: '#fffde6',
          200: '#fffacc',
          300: '#fff799',
          400: '#fff466',
          500: '#FFEB3B', // Hover - Sarı
          600: '#fdd835',
          700: '#fbc02d',
          800: '#f9a825',
          900: '#f57f17',
        },
        dark: {
          50: '#1a2332',
          100: '#141d2b',
          200: '#0f1724',
          300: '#0d1420',
          400: '#0b111c',
          500: '#0A192F', // Arka plan - Koyu Lacivert
          600: '#081426',
          700: '#06101d',
          800: '#040b13',
          900: '#02060a',
        },
        light: {
          50: '#ffffff',
          100: '#fafafa',
          200: '#f7f7f7',
          300: '#f5f5f5',
          400: '#f3f3f3',
          500: '#F5F5F5', // İçerik alanı - Açık Gri
          600: '#e0e0e0',
          700: '#bdbdbd',
          800: '#9e9e9e',
          900: '#757575',
        },
        text: {
          50: '#757575',
          100: '#616161',
          200: '#424242',
          300: '#303030',
          400: '#282828',
          500: '#212121', // Metin - Koyu Gri
          600: '#1a1a1a',
          700: '#141414',
          800: '#0d0d0d',
          900: '#070707',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #00E5E0 0%, #9C27B0 100%)', // Turkuaz → Mor
        'gradient-gaming': 'linear-gradient(135deg, #FF5252 0%, #9C27B0 100%)', // Kırmızı → Mor
        'gradient-hero': 'linear-gradient(135deg, #00E5E0 0%, #FF5252 100%)', // Turkuaz → Kırmızı
        'gradient-cyber': 'linear-gradient(135deg, #00E5E0 0%, #9C27B0 50%, #FF5252 100%)', // Turkuaz → Mor → Kırmızı
        'gradient-accent': 'linear-gradient(135deg, #9C27B0 0%, #FF5252 100%)', // Mor → Kırmızı
      },
      boxShadow: {
        'glow': '0 0 20px rgba(0, 229, 224, 0.5)', // Turkuaz glow
        'glow-lg': '0 0 40px rgba(0, 229, 224, 0.7)',
        'glow-accent': '0 0 20px rgba(255, 82, 82, 0.5)', // Kırmızı glow
        'glow-gaming': '0 0 20px rgba(156, 39, 176, 0.5)', // Mor glow
        'neon': '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.600)',
        'neon-lg': '0 0 10px theme(colors.primary.400), 0 0 40px theme(colors.primary.600), 0 0 80px theme(colors.primary.700)',
      },
    },
  },
  plugins: [],
}
