module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
          
      // 'libros1-pattern': "url('../assests/Slider/images/im1.jpg')",
      // 'libros2-pattern': "url('../assests/Slider/images/im2.jpg')",
      // 'libros3-pattern': "url('../assests/Slider/images/im3.jpg')",
      // 'aleph': "url('../assests/images/aleph.jpg')",
      // 'loque': "url('../assests/images/loque.jpg')",
      // 'miedo': "url('../assests/images/miedo.jpg')",
      // 'lasmil': "url('../assests/images/lasmil.jpg')",
      // 'asi': "url('../assests/images/asi.jpg')",
      // 'peste': "url('../assests/images/peste.jpg')",
      // 'nausea': "url('../assests/images/nausea.jpg')",
      // 'loboes': "url('../assests/images/loboes.jpg')",
      // 'dosto': "url('../assests/images/dosto.jpg')",
     
    },

    screens:{
      'xsm': '320px'
    }

    },
    
    fontFamily: { 

      'rale': ['Raleway', 'sans-serif']

    }

},


  variants: {
    extend: {},
  },
  plugins: [],
}
