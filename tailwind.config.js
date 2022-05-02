module.exports = {
  content: [
    './pages/**/*.{html,js,jsx,tsx,ts}',
    './styles/*.css'
  ],
  theme: {
    extend: {
      backgroundColor: {
        'newmaroon': '#8E3200',
        'newbrown': '#A64B2A',
        'newbeige': '#D7A86E',
        'newwhite': '#FFEBC1',
      },
      textColor: {
        'newmaroon': '#8E3200',
        'newbrown': '#A64B2A',
        'newbeige': '#D7A86E',
        'newwhite': '#FFEBC1',

      },
      borderColor: {
        'newmaroon': '#8E3200',
        'newbrown': '#A64B2A',
        'newbeige': '#D7A86E',
        'newwhite': '#FFEBC1',
      },
      width: {
        '.10': '10%',
        '.20': '20%',
        '.30': '30%',
        '.40': '40%',
        '.45': '45%',
        '.50': '50%',
        '.55': '55%',
        '.60': '60%',
        '.70': '70%',
        '.80': '80%',
        '.90': '90%',
        '.100': '100%',
      },
      height: {
        '.10': '10%',
        '.20': '20%',
        '.30': '30%',
        '.40': '40%',
        '.45': '45%',
        '.50': '50%',
        '.55': '55%',
        '.60': '60%',
        '.70': '70%',
        '.80': '80%',
        '.90': '90%',
        '.100': '100%',
      },
      fontSize: {
        '.1': '10%',
        '.2': '20%',
        '.3': '30%',
        '.4': '40%',
        '.5': '50%',
        '.6': '60%',
        '.7': '70%',
        '.8': '80%',
        '.9': '90%',
        '.10': '100%',
      },
      inset: {
        '.35': '35%',
        '.40': '40%',
      }


    },
    fontFamily: {
      'poppins': ['Poppins', 'sans serif'],
      'tapestry' : ['Tapestry', 'cursive'],
      'quicksand' : ['Quicksand', 'sans-serif']
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      top: ['hover', 'focus', 'group-hover'],
      bottom: ['hover', 'focus'],
      left: ['hover', 'focus'],
      right: ['hover', 'focus', 'group-hover'],
      inset: ['hover', 'focus', 'group-hover'],
      transform: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus',],
      transformOrigin: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      transitionDelay: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      transitionDuration: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      transitionProperty: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      transitionTimingFunction: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      transition: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      translate: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
      animation: ['hover', 'focus', 'group-hover'],
      display: ['hover', , 'focus', 'group-hover'],
      fontSize: ['hover', 'focus'],
      position: ['hover', 'focus'],

    },
  },
  plugins: [],
}
