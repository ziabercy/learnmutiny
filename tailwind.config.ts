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
