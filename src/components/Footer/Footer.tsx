import { Box, Typography, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Link from '@mui/material/Link';

export const Footer = () => {
    const logoUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1716026565/students-site/student-affairs.png';
    return (
        <Box sx={ { mt: 4 } }>
            <Box sx={ { m: 'auto', p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '60%' } }>
                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', height: 120 } }>
                    <Typography variant="h6" sx={ { color: 'primary.main', fontWeight: 400 } }>Administrado Por</Typography>
                    <img src={ logoUrl } alt="Student Affairs Logo" style={ { width: 150, marginTop: 20 } } />
                </Box>
                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', height: 120 } }>
                    <Typography variant="h6" sx={ { color: 'primary.main', fontWeight: 400 } }>Redes Sociales</Typography>
                    <Box sx={ { mt: 3, color: 'secondary.main' } }>
                        <IconButton size='large' component={ Link } target="_blank" rel="noopener noreferrer" href="https://twitter.com/UCenfotec" color="inherit">
                            <XIcon fontSize='large' />
                        </IconButton>
                        <IconButton size='large' component={ Link } target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ucenfotec" color="inherit">
                            <InstagramIcon fontSize='large' />
                        </IconButton>
                        <IconButton size='large' component={ Link } target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/UCenfotec" color="inherit">
                            <FacebookOutlinedIcon fontSize='large' />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', height: 120 } }>
                    <Typography variant="h6" sx={ { color: 'primary.main', fontWeight: 400 } }>Portal Principal</Typography>
                    <Typography
                        component="a"
                        href="https://ucenfotec.ac.cr"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="h5"
                        sx={ {
                            color: 'secondary.main',
                            fontWeight: 600, mt: 4,
                            textDecoration: 'none', '&:hover': {
                                textDecoration: 'underline',
                            },
                            cursor: 'pointer'
                        } }
                    >
                        ucenfotec.ac.cr
                    </Typography>
                </Box>
            </Box>
            <Box sx={ { mt: 4, p: 4, backgroundColor: 'primary.main', color: 'white', position: 'absolute', width: '100%', left: 0, display: 'flex', alignContent: 'center' } }>
                <Typography variant="body1" sx={ { width: '100%', textAlign: 'center', fontWeight: 600, } }>
                    © 2024 UCENFOTEC | Todos los derechos reservados
                </Typography>
            </Box>
        </Box>
    );
};

