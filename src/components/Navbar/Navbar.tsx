import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';
import logo from '../../assets/images/logo.png';

export const Navbar = () => {

    const buttonStyle = {
        borderRadius: 2,
        paddingTop: 0.5,
        paddingBottom: 0.5,
        paddingLeft: 2,
        paddingRight: 2,
        fontWeight: 300,
        fontSize: 14,
    };

    return (
        <AppBar position="absolute" color="transparent" elevation={ 0 } sx={ { paddingY: 4 } }>
            <Container>
                <Toolbar disableGutters>
                    <Box sx={ { flexGrow: 0.1 } }>
                        {/* Link wrapped around the image for clicking the logo to navigate home */ }
                        {/* <RouterLink to="/"> */ }
                        <img src={ logo } alt="Logo" style={ { height: 50 } } />
                        {/* </RouterLink> */ }
                    </Box>
                    <nav>
                        <Button color="inherit" component="a" href="/" sx={ buttonStyle }>
                            Inicio
                        </Button>
                        <Button color="inherit" component="a" href="/about-us" sx={ buttonStyle }>
                            Sobre Nosotros
                        </Button>
                        <Button color="inherit" component="a" href="/academy" sx={ buttonStyle }>
                            Academia
                        </Button>
                        <Button color="inherit" component="a" href="/community" sx={ buttonStyle }>
                            Comunidad
                        </Button>
                        <Button color="inherit" component="a" href="/support" sx={ buttonStyle }>
                            Soporte
                        </Button>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
