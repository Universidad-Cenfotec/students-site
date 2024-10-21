// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import theme from '@/themes/theme';
import { Footer, Navbar } from '@/components';
import '../styles/globals.css';

function StudentsSite ({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Students Site</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={ theme }>
                <CssBaseline />
                <Box sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',  // Ensures the container is at least as tall as the viewport
                } }>
                    <Box sx={ {
                        position: 'sticky',
                        top: 0,  // Keeps the navbar at the top of the viewport
                        zIndex: 1100,  // Ensures the navbar stays on top of other content
                        width: '100%',
                    } }>
                        <Navbar />
                    </Box>
                    <Box component="main" sx={ { flexGrow: 1 } }>
                        <Component { ...pageProps } />
                    </Box>
                    <Footer />
                </Box>
            </ThemeProvider>
        </>
    );
}

export default StudentsSite;
