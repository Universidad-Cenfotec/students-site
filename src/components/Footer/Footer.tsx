import { Box, Typography, IconButton } from '@mui/material';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Link from '@mui/material/Link';

export const Footer = () => {
    const logoUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1716026565/students-site/student-affairs.png';
    return (
        <Box sx={ { mt: '2rem' } }>
            <Box sx={ { m: 'auto', p: '1.5rem', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', width: { xs: '100%', md: '60%' }, textAlign: { xs: 'center', md: 'left' } } }>
                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', height: '7.5rem' } }>
                    <Typography variant="h6" sx={ { color: 'primary.main', fontWeight: 400, fontSize: '1rem' } }>Administrado Por</Typography>
                    <img src={ logoUrl } alt="Student Affairs Logo" style={ { width: '9.375rem', marginTop: '1.25rem' } } />
                </Box>
                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', height: '7.5rem', mt: { xs: '1.5rem', md: 0 } } }>
                    <Typography variant="h6" sx={ { color: 'primary.main', fontWeight: 400, fontSize: '1rem' } }>Redes Sociales</Typography>
                    <Box sx={ { mt: '1.5rem', color: 'secondary.main' } }>
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
                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', height: '7.5rem', mt: { xs: '1.5rem', md: 0 } } }>
                    <Typography variant="h6" sx={ { color: 'primary.main', fontWeight: 400, fontSize: '1rem' } }>Portal Principal</Typography>
                    <Typography
                        component="a"
                        href="https://ucenfotec.ac.cr"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="h5"
                        sx={ {
                            color: 'secondary.main',
                            fontWeight: 600, mt: '1rem',
                            textDecoration: 'none', '&:hover': {
                                textDecoration: 'underline',
                            },
                            cursor: 'pointer',
                            fontSize: '1.25rem'
                        } }
                    >
                        ucenfotec.ac.cr
                    </Typography>
                </Box>
            </Box>
            <Box sx={ { mt: '2rem', p: '1rem', backgroundColor: 'primary.main', position: 'absolute', left: 0, color: 'white', width: '100%', display: 'flex', alignContent: 'center' } }>
                <Typography variant="body1" sx={ { width: '100%', textAlign: 'center', fontWeight: 600, fontSize: '1rem' } }>
                    © 2024 UCENFOTEC | Todos los derechos reservados
                </Typography>
            </Box>
        </Box>
    );
};
