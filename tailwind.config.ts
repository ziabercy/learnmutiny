import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      boxShadow: {
        'orange': '0 0px 30px #FFA800',
        'green': '0 0px 30px #70FF00',
        'blue': '0 0px 30px #00D1FF',
        'red': '0 0px 30px #E40000',
        'purple': '0 0px 30px #8803B7',
        'yellow': '0 0px 30px #FFF500',
        'orange2': '0 0px 8px 3px #FFA800',
        'green2': '0 0px 8px 3px #70FF00',
        'blue2': '0 0px 8px 3px #00D1FF',
        'grey': '0 0px 8px 3px #CCC4C8',
        'red2': '0 0px 8px 3px #E40000',
        'purple2': '0 0px 8px 3px #8803B7',
        'yellow2': '0 0px 8px 3px #FFF500',
        'green3': '0 0px 25px 8px #70FF00',
        'blue3': '0 0px 25px 10px #00D1FF',
        'red3': '0 0px 15px 4px #E40000',
        'pink': '0 0px 20px 8px #FF007A',
        'purple3': '0 0px 15px 7px #4600DB',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    fontFamily: {
      custom: ["Montserrat"],
      custom2: ["Inter"],
    }
  },
  plugins: [],
}
export default config
