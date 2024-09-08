import { AppBar, Toolbar, Button, IconButton, useMediaQuery, useTheme, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const Navbar = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));
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
                <Toolbar sx={ { justifyContent: { xs: 'space-between', lg: 'start' }, zIndex: '100' } }>
                    <Box sx={ { flexGrow: 0.1 } }>
                        <Link href="/" passHref>
                            <img src='/images/logo.png' alt="Logo" style={ { height: '3.5rem' } } />
                        </Link>
                    </Box>
                    { isLargeScreen ? (
                        <Box>
                            <Link href="/" passHref><Button sx={ buttonStyle }>Inicio</Button></Link>
                            <Link href="/about" passHref><Button sx={ buttonStyle }>Sobre Nosotros</Button></Link>
                            <Link href="/academy" passHref><Button sx={ buttonStyle }>Academia</Button></Link>
                            <Link href="/community" passHref><Button sx={ buttonStyle }>Comunidad</Button></Link>
                            <Link href="/support" passHref><Button sx={ buttonStyle }>Soporte</Button></Link>
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
                    <ListItem component={ Link } href='/' passHref><ListItemText primary="Inicio" /></ListItem>
                    <ListItem component={ Link } href='/about' passHref><ListItemText primary="Sobre Nosotros" /></ListItem>
                    <ListItem component={ Link } href='/academy' passHref><ListItemText primary="Academia" /></ListItem>
                    <ListItem component={ Link } href='/community' passHref><ListItemText primary="Comunidad" /></ListItem>
                    <ListItem component={ Link } href='/support' passHref><ListItemText primary="Soporte" /></ListItem>
                </List>
            </Drawer>
        </>
    );
};
