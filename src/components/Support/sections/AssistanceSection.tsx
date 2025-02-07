import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const AssistanceSection: React.FC = () => {

    const assistanceGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722973898/students-site/assitance-graphic.png';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '6rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '45%' } } }>
                    <img src={ assistanceGraphic } alt="Jobs Graphic" style={ { width: '90%' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Visita Nuestro
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Centro de Asistencia
                    </Typography>
                    <Typography variant="body1" sx={ { maxWidth: '80%', mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        El <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Centro de Asistencia</Box> es el principal medio de comunicación, por el cual podrá ponerse en contacto con cualquiera de los departamentos de la Universidad a través de un tiquete de soporte.
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://www.google.com/url?q=https%3A%2F%2Fdesk.zoho.com%2Fportal%2Fcenfotec868%2Fes%2Fsignin&sa=D&sntz=1&usg=AOvVaw1K-vm-FqVyOLRGMsxgG1Tu'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                        } }

                    >
                        Abrir Tiquete
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AssistanceSection;
