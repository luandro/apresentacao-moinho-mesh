import createTheme from "../../createTheme";

const colors = {
  primary: "#C5C6B6",
  secondary: "#3C3530", // almost black w/ blueish tint
  tertiary: "#F16B6F", // pink
  quaternary: "#AACD6E" // green
};

const theme = createTheme(colors, {
    primary: "Montserrat",
    secondary: "Helvetica"
  }, {
    progress: {
      pacmanTop: {
        background: colors.primary
      },
      pacmanBottom: {
        background: colors.primary
      },
      point: {
        borderColor: colors.primary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: '4rem',
          textTransform: 'uppercase'
        },
        h2: {
          fontSize: '3.5rem',
          textTransform: 'uppercase'
        },
        h3: {
          fontSize: '3rem',
          textTransform: 'uppercase'
        },
        h4: {
          fontSize: '2.5rem',
          textTransform: 'uppercase'
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase'
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  });

export default theme;