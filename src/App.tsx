import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { HeroSection } from './pages/LandingPage';
import { Navbar } from './components';
import theme from './themes/theme';

function App () {
    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Navbar />
            <HeroSection />
        </ThemeProvider>
    );
}

export default App;
