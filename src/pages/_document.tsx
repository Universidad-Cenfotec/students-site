import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render () {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/din-alternate" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" />
                    <link rel="icon" href="/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
