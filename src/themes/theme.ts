import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#006AEA',
        },
        secondary: {
            main: '#00479B',
        },
        text: {
            primary: '#7C7B75',
        }
    },
    typography: {
        // Title font for h1
        h1: {
            fontFamily: '"DIN Alternate", sans-serif',
        },

        h2: {
            fontFamily: '"CircularStd", sans-serif',
        },

        h3: {
            fontFamily: '"CircularStd", sans-serif',
        },

        h4: {
            fontFamily: '"CircularStd", sans-serif',
        },

        // Default text font for body1
        body1: {
            fontFamily: '"CircularStd", sans-serif',
        }
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: '"CircularStd", sans-serif',
                    textTransform: 'none',
                    borderRadius: 10,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 36,
                    paddingRight: 36,
                },
            },
        },
    },
});

export default theme;
