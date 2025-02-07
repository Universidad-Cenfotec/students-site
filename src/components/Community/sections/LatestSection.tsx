import { Box, Typography } from '@mui/material';

const LatestSection: React.FC = () => {

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Comunidad
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Lo más reciente en nuestras noticias
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '6rem',
                    height: '50vh'
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '55%' }, height: '100%', borderRadius: '0.5rem' } }>
                    <iframe
                        style={ { width: '100%', height: '100%' } }
                        src={ 'https://www.youtube.com/embed/8_sZJtCdGS8?si=9ieD0pU_ocmqv02e' }
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                    ></iframe>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '40%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Conoce a Jeremy Villegas
                    </Typography>
                    <Typography variant="body1" sx={ { maxWidth: '75%', mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Un joven talentoso que combina su pasión por la tecnología con su habilidad en el ajedrez. Estudiante destacado de Ingeniería de Software en <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box>, Jeremy es un campeón universitario de ajedrez y ha representado a su país en diversas competencias.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default LatestSection;
