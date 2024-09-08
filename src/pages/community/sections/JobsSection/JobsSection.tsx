import { Box, Button, Typography } from '@mui/material';


export const JobsSection = () => {
    const jobsGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722971999/students-site/jobs-graphic.png';
    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Comunidad
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Explora nuevas oportunidades
            </Typography>
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
                    <img src={ jobsGraphic } alt="Jobs Graphic" style={ { width: '80%' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Bolsa de
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Trabajo
                    </Typography>
                    <Typography variant="body1" sx={ { maxWidth: '75%', mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> ofrece una gran oportunidad, en la que, a través de nuestra plataforma,  podrán visualizar ofertas, postularse y comunicarse directamente con las empresas en las que hay mayor interés, de manera que sea un proceso transparente y confiable.
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://ucenfotec.ac.cr/bolsatrabajo/'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                        } }

                    >
                        Ver Puestos Disponibles
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
