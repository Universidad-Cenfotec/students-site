import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LandingPage } from './pages';
import { Footer, Navbar } from './components';
import theme from './themes/theme';

function App () {
    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Navbar />
            <LandingPage />
            <Footer />
        </ThemeProvider>
    );
}

export default App;
