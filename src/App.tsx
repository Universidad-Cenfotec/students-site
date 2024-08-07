import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, AboutPage, AcademyPage, CommunityPage, SupportPage } from './pages';
import { Footer, Navbar } from './components';
import theme from './themes/theme';

function App () {
    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <LandingPage /> } />
                    <Route path="/about" element={ <AboutPage /> } />
                    <Route path="/academy" element={ <AcademyPage /> } />
                    <Route path='/community' element={ <CommunityPage /> } />
                    <Route path='/support' element={ <SupportPage /> } />
                </Routes>
                <Footer />
            </Router>
        </ThemeProvider>
    );
}

export default App;
