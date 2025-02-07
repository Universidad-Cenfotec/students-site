import './styles/globals.css';

export const metadata = {
    title: 'Students Site',
    description: 'A site for students',
};

export default function RootLayout ({ children }: { children: React.ReactNode; }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/din-alternate" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" />
                <link rel="icon" href="/favicon.png" />
            </head>
            <body>
                <main>{ children }</main>
            </body>
        </html>
    );
}
