  /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: {
        5: '#151105',
        20: '#564419',
        30: '#806626',
        40: '#AA8935',
        55: '#D6AA42',
        60: '#DDBC60',
        70: '#E6CC85',
        DEFAULT: '#EBD69D',
        85: '#F2E6C0',
        90: '#F6EED6',
        95: '#FBF6EA',
        100: '#FEFCF7'
      },
      neutrals: {
        10: '#191C1D',
        20: '#2D3131',
        30: '#444748',
        40: '#5C5F5F',
        50: '#747878',
        60: '#A9ACAC',
        70: '#C4C7C7',
        80: '#E0E3E3',
        90: '#EFF1F1',
        95: '#FAFDFD',
        100: '#FFFFFF'
      },
      red: {
        10: '#AE4203',
        20: '#C64F0A',
        30: '#D4560D',
        40: '#E15D12',
        50: '#EB6316',
        60: '#EE783C',
        70: '#F18E60',
        80: '#F18E60',
        90: '#F9CDBA',
        100: '#F9E9E6'
      },
      blue: {
        5: '#071115',
        10: '#0F2029',
        20: '#18313E',
        25: '#204253',
        30: '#295268',
        40: '#4383A5',
        60: '#61AED4',
        70: '#80BFDE',
        80: '#A2D1E6',
        85: '#C7E4F0',
        90: '#DAECF5' 
      },
      green: {
        5: '#007E1A',
        10: '#00A22F',
        20: '#00B739',
        25: '#26CC44',
        30: '#3CDD4C',
        40: '#65E369',
        50: '#87E986',
        60: '#ADF0AA',
        70: '#CEF6CC',
        80: '#ECFCEB',
        90: '#F6FEF9'
      },
      grid: '#B3885F',
      accent: '#DBFF00',
      cardbg: '#141D21',
    },
    effects: {
      1: 'background: var(--gradient-1, linear-gradient(90deg, #060405 0%, #040304 25%, rgba(0, 0, 0, 0.45) 73.96%, rgba(4, 4, 4, 0.00) 100%));'
    },
    fontFamily: {
      body: ['Sorts Mill Goudy', 'serif'],
      heading: ['Cinzel', 'serif'],
    },
    spacing: {
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      32: '8rem',
      40: '10rem',
      48: '12rem',
      56: '14rem',
      64: '16rem'
    }
  },
  plugins: [],
}

