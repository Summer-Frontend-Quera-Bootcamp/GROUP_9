/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    /* ============= Color ============= */
    colors: {
      Black: '#1E1E1E',
      White: '#FFFFFF',

      /* ===== Gray ===== */
      Gray: {
        Primary: '#868E96',
        Secondary: '#F1F3F5',
        Darker: '#343A40',
      },

      /* ===== Cyan ===== */
      Cyan: {
        Primary: '#15AABF',
        Secondary: '#C5F6FA',
      },

      /* ===== Red ===== */
      Red: {
        Primary: '#FA5252',
        Secondary: '#FFE3E3',
      },

      /* ===== Teal ===== */
      Teal: {
        Primary: '#12B886',
        Secondary: '#C3FAE8',
      },

      /* ===== Pink ===== */
      Pink: {
        Primary: '#E64980',
        Secondary: '#FFDEEB',
      },

      /* ===== Brand ===== */
      Brand: {
        Primary: '#208D8E',
        Secondary: '#C2F7FA',
      },

      /* ===== Grape ===== */
      Grape: {
        Primary: '#BE4BDB',
        Secondary: '#F3D9FA',
      },

      /* ===== Green ===== */
      Green: {
        Primary: '#40C057',
        Secondary: '#D3F9D8',
      },

      /* ===== Violet ===== */
      Violet: {
        Primary: '#7950F2',
        Secondary: '#E5DBFF',
      },

      /* ===== Lime ===== */
      Lime: {
        Primary: '#82C91E',
        Secondary: '#E9FAC8',
      },

      /* ===== Indigo ===== */
      Indigo: {
        Primary: '#4C6EF5',
        Secondary: '#DBE4FF',
      },

      /* ===== Yellow ===== */
      Yellow: {
        Primary: '#FAB005',
        Secondary: '#FFF3BF',
      },

      /* ===== Blue ===== */
      Blue: {
        Primary: '#228BE6',
        Secondary: '#D0EBFF',
      },

      /* ===== Orange ===== */
      Orange: {
        Primary: '#FD7E14',
        Secondary: '#FFE8CC',
      }

      /* ===== Others ===== */
      //++
    },


    /* ============= Spacing ============= */
    spacing: {
      xs: '8px',
      s: '16px',
      m: '24px',
      l: '32px',
      xl: '40px',
    },

    extend: {
      /* ============= Font ============= */
      fontFamily: {
        IranYekan300: "'IRANYekanThin', sans-serif",
        IranYekan400: "'IRANYekanRegular', sans-serif",
        IranYekan500: "'IRANYekanMedium', sans-serif",
        IranYekan700: "'IRANYekanBold', sans-serif",
        IranYekan800: "'IRANYekanExtraBold', sans-serif",
      },


      /* ============= Font-Size ============= */
      fontSize: {
        /* ===== Heading ===== */
        HeadingL: '2em',
        HeadingM: '1.75em',
        HeadingS: '1.5em',
        HeadingXS: '1.25em',

        /* ===== Body ===== */
        BodyXL: '1.5em',
        BodyL: '1.25em',
        BodyM: '1em',
        BodyS: '0.88em',
        BodyXS: '0.75em',

        /* ===== Body ===== */
        BoldXL: '1.5em',
        BoldL: '1.25em',
        BoldM: '1em',
        BoldS: '0.88em',
        BoldXS: '0.75em',
      },


      /* ============= Box-Shadow ============= */
      boxShadow : {
        '3xl': '0px 50px 100px -20px rgba(50, 50, 93, 0.25)',
        '4xl': '0px 30px 60px -30px rgba(0, 0, 0, 0.30)',
      }
    },
  },
  plugins: [],
};
