import { AppBar, Toolbar, Button, IconButton, useMediaQuery, useTheme, Box, Drawer, List, ListItemText, ListItemButton } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';

export const Navbar = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const buttonStyle = {
        borderRadius: '0.3rem',
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        fontWeight: 300,
        fontSize: '0.85rem',
        margin: '0 0.5rem',
        color: 'text.primary',
    };

    return (
        <>
            <AppBar position="static" sx={ { backgroundColor: 'white', boxShadow: 'none', padding: '2rem' } }>
                <Toolbar sx={ { justifyContent: { xs: 'space-between', xl: 'start' } } }>
                    <Box sx={ { flexGrow: 0.1 } }>
                        {/* Link wrapped around the image for clicking the logo to navigate home */ }
                        <Link to="/">
                            <img src={ logo } alt="Logo" style={ { height: '3.5rem' } } /> {/* Convertido a rem */ }
                        </Link>
                    </Box>
                    { isLargeScreen ? (
                        <Box>
                            <Button component="a" href="/" sx={ buttonStyle }>Inicio</Button>
                            <Button component="a" href="/about" sx={ buttonStyle }>Sobre Nosotros</Button>
                            <Button component="a" href="/academy" sx={ buttonStyle }>Academia</Button>
                            <Button component="a" href="/community" sx={ buttonStyle }>Comunidad</Button>
                            <Button component="a" href="/support" sx={ buttonStyle }>Soporte</Button>
                        </Box>
                    ) : (
                        <IconButton onClick={ handleDrawerToggle } sx={ { color: 'text.primary' } }>
                            <MenuIcon />
                        </IconButton>
                    ) }
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={ drawerOpen } onClose={ handleDrawerToggle }>
                <List>
                    <ListItemButton href='/'>
                        <ListItemText primary="Inicio" />
                    </ListItemButton>
                    <ListItemButton href='/about'>
                        <ListItemText primary="Sobre Nosotros" />
                    </ListItemButton>
                    <ListItemButton href='/academy'>
                        <ListItemText primary="Academia" />
                    </ListItemButton>
                    <ListItemButton href='/community'>
                        <ListItemText primary="Comunidad" />
                    </ListItemButton>
                    <ListItemButton href='/support'>
                        <ListItemText primary="Soporte" />
                    </ListItemButton>
                </List>
            </Drawer>
        </>
    );
};
