module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.vue'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1921px',
      // => @media (min-width: 1921px) { ... }
      hd: '1280px',
    },
    maxWidth: {
      'max-w-screen-lg': '1000px',
      'max-w-screen-xl': '1200px',
      'max-w-screen-2xl': '1400px',
    },
    extend: {
      fontSize: {
        hd_section_1_title: ['2.45rem', '1.35'],
        hd_section_2_title: ['30px', '1.3'],
        hd_section_3_title: ['28px', ''],
        '26': '26px',
        '40': '40px',
        '18': '18px',
      },
      margin: {
        hd_section_2_margin: ' 135px',
        p20: '20px',
        p60: '60px',
        p70: '70px',
        p135: ' 135px',
      },
      lineHeight: {
        's-2-content': '1.65rem',
      },
      padding: {
        '40': '40px',
        '70': '70px',
        '100': '100%',
      },
      letterSpacing: {
        '1': '1px',
      },
    },
  },
  variants: {},
  plugins: [],
}
