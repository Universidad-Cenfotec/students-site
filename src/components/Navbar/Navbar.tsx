// import { AppBar, Toolbar, Container, Box, Button } from '@mui/material';
// import logo from '../../assets/images/logo.png';

// export const Navbar = () => {

//     const buttonStyle = {
//         borderRadius: 2,
//         paddingTop: 0.5,
//         paddingBottom: 0.5,
//         paddingLeft: 2,
//         paddingRight: 2,
//         fontWeight: 300,
//         fontSize: 14,
//     };

//     return (
//         <AppBar position="absolute" color="transparent" elevation={ 0 } sx={ { paddingY: 4, marginRight: '10rem' } }>
//             <Container>
//                 <Toolbar>
//                     <Box sx={ { flexGrow: 0.1 } }>
//                         {/* Link wrapped around the image for clicking the logo to navigate home */ }
//                         {/* <RouterLink to="/"> */ }
//                         <img src={ logo } alt="Logo" style={ { height: 50 } } />
//                         {/* </RouterLink> */ }
//                     </Box>
//                     <nav>
//                         <Button color="inherit" component="a" href="/" sx={ buttonStyle }>
//                             Inicio
//                         </Button>
//                         <Button color="inherit" component="a" href="/about-us" sx={ buttonStyle }>
//                             Sobre Nosotros
//                         </Button>
//                         <Button color="inherit" component="a" href="/academy" sx={ buttonStyle }>
//                             Academia
//                         </Button>
//                         <Button color="inherit" component="a" href="/community" sx={ buttonStyle }>
//                             Comunidad
//                         </Button>
//                         <Button color="inherit" component="a" href="/support" sx={ buttonStyle }>
//                             Soporte
//                         </Button>
//                     </nav>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// };

import { AppBar, Toolbar, Button, IconButton, useMediaQuery, useTheme, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
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
                        {/* <RouterLink to="/"> */ }
                        <img src={ logo } alt="Logo" style={ { height: '3.5rem' } } /> {/* Convertido a rem */ }
                        {/* </RouterLink> */ }
                    </Box>
                    { isLargeScreen ? (
                        <Box>
                            <Button component="a" href="/" sx={ buttonStyle }>Inicio</Button>
                            <Button component="a" href="/about-us" sx={ buttonStyle }>Sobre Nosotros</Button>
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
                    <ListItem button>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Sobre Nosotros" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Academia" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Comunidad" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Soporte" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};
