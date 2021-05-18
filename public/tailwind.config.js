module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
          bounce: 'bounce 1s ease-out 1',
          drop: 'drop 2s ease-in-out 1',
        },
        keyframes: {
          drop: {
            '0%': {transform: 'translateX(-100vw)'},
            '100%': {transform: 'translateX(0vw)'},
          },
        },
        backgroundImage: theme => ({
         'main-bg': "url('images/new.svg')",
        })    
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}


//npm run build:css // used to run config file