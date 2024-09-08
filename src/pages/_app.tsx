// src/pages/_app.tsx
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css';
import { Footer, Navbar } from '@/components';
import theme from '@/themes/theme';

function StudentsSite ({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Students Site</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            <ThemeProvider theme={ theme }>
                <CssBaseline />
                <Navbar />
                <main>
                    <Component { ...pageProps } />
                </main>
                <Footer />
            </ThemeProvider>
        </>
    );
}

export default StudentsSite;
