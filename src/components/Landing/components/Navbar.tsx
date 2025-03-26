"use client";

import {
    AppBar, Toolbar, Button, IconButton, useMediaQuery, useTheme, Box, Drawer, List, ListItem, ListItemText, Collapse
} from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

export const Navbar = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [hoveredMenu, setHoveredMenu] = useState(false);
    const [sublistOpen, setSublistOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleSublistToggle = () => {
        setSublistOpen(!sublistOpen);
    };

    const handleHoverMenu = () => {
        setHoveredMenu(true);
    };

    const handleLeaveMenu = () => {
        setHoveredMenu(false);
    };

    const buttonStyle = {
        borderRadius: '0.3rem',
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        fontWeight: 300,
        fontSize: '1rem',
        margin: '0 0.5rem',
        color: 'text.primary',
    };

    return (
        <>
            <AppBar position="static" sx={ { backgroundColor: 'white', boxShadow: 'none', paddingY: '1.5rem', paddingX: '2rem', height: '6rem' } }>
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
                            {/* Hoverable Submenu */ }
                            <Box
                                onMouseEnter={ handleHoverMenu }
                                sx={ { display: 'inline-block', position: 'relative' } }
                            >
                                <Button
                                    sx={ buttonStyle }
                                    endIcon={ hoveredMenu ? <ExpandLess /> : <ExpandMore /> }
                                >
                                    Comunidad
                                </Button>
                                { hoveredMenu && (
                                    <Box
                                        sx={ {
                                            position: 'absolute',
                                            backgroundColor: 'white',
                                            boxShadow: theme.shadows[2],
                                            borderRadius: '0.3rem',
                                            mt: '0.5rem',
                                            zIndex: 2000,
                                            minWidth: 'fit-content',
                                        } }
                                        onMouseLeave={ handleLeaveMenu }
                                    >
                                        <Link href="/community" passHref>
                                            <Button
                                                sx={ {
                                                    ...buttonStyle,
                                                    justifyContent: 'flex-start',
                                                    textAlign: 'left',
                                                    width: '90%',
                                                    paddingX: 2,
                                                    marginTop: 1,
                                                } }
                                            >
                                                Blog
                                            </Button>
                                        </Link>
                                        <Link href="/community/student-council" passHref>
                                            <Button
                                                sx={ {
                                                    ...buttonStyle,
                                                    justifyContent: 'flex-start',
                                                    textAlign: 'left',
                                                    width: '90%',
                                                    paddingX: 2,
                                                    marginBottom: 1,
                                                } }
                                            >
                                                Consejo Estudiantil
                                            </Button>
                                        </Link>
                                        <Link href="/community/clubs" passHref>
                                            <Button
                                                sx={ {
                                                    ...buttonStyle,
                                                    justifyContent: 'flex-start',
                                                    textAlign: 'left',
                                                    width: '90%',
                                                    paddingX: 2,
                                                    marginBottom: 1,
                                                } }
                                            >
                                                Clubes
                                            </Button>
                                        </Link>
                                    </Box>
                                ) }
                            </Box>
                            <Link href="/support" passHref><Button sx={ buttonStyle }>Soporte</Button></Link>
                        </Box>
                    ) : (
                            <IconButton onClick={ handleDrawerOpen } sx={ { color: 'text.primary' } }>
                            <MenuIcon />
                        </IconButton>
                    ) }
                </Toolbar>
            </AppBar>
            {/* Drawer for mobile */ }
            <Drawer
                anchor="left"
                open={ drawerOpen }
                onClose={ handleDrawerClose }
            >
                <List sx={ { width: '14rem' } }>
                    <ListItem component={ Link } href="/" sx={ buttonStyle } onClick={ handleDrawerClose } passHref>
                        <ListItemText primary="Inicio" />
                    </ListItem>
                    <ListItem component={ Link } href="/about" sx={ buttonStyle } onClick={ handleDrawerClose } passHref>
                        <ListItemText primary="Sobre Nosotros" />
                    </ListItem>
                    <ListItem component={ Link } href="/academy" sx={ buttonStyle } onClick={ handleDrawerClose } passHref>
                        <ListItemText primary="Academia" />
                    </ListItem>
                    {/* Clickable Submenu */ }
                    <ListItem button onClick={ handleSublistToggle } sx={ buttonStyle }>
                        <ListItemText primary="Comunidad" />
                        { sublistOpen ? <ExpandLess /> : <ExpandMore /> }
                    </ListItem>
                    <Collapse in={ sublistOpen } timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem component={ Link } href="/community" sx={ { ...buttonStyle, pl: 4 } } onClick={ handleDrawerClose } passHref>
                                <ListItemText primary="Blog" />
                            </ListItem>
                            <ListItem component={ Link } href="/community/clubs" sx={ { ...buttonStyle, pl: 4 } } onClick={ handleDrawerClose } passHref>
                                <ListItemText primary="Clubes" />
                            </ListItem>
                            <ListItem component={ Link } href="/community/student-council" sx={ { ...buttonStyle, pl: 4 } } onClick={ handleDrawerClose } passHref>
                                <ListItemText primary="Consejo Estudiantil" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <ListItem component={ Link } href="/support" sx={ buttonStyle } onClick={ handleDrawerClose } passHref>
                        <ListItemText primary="Soporte" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};
