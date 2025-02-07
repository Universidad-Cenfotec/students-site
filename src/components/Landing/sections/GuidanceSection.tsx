import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { BlogGraphic, StudentKitGraphic } from '@/components/Landing/components/Graphics';

const GuidanceSection: React.FC = () => {

    const electionsGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1726848070/students-site/elections.png';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Sitio de Estudiantes
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                ¿Necesitas guía?
            </Typography>
            <Grid container sx={ { my: '2rem', px: { xs: '2rem', lg: 0 } } } spacing={ 4 }>
                <Grid item xs={ 12 } lg={ 6 }>
                    <StudentKitGraphic sx={ { width: { xs: '100%', lg: '85%' }, height: 'auto' } } />
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Saca Provecho de Nuestro
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Kit de Estudiante
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        Un conjunto de recursos recopilados por estudiantes para estudiantes. Desde guías paso a paso para primeros ingresos, hasta herramientas digitales y sistemas de estudio avanzados, nuestro <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>Kit de Estudiante</Box> será un apoyo crucial durante tu experiencia <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>CENFOTEC</Box>.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://ucenfotec-students-kit.notion.site/Students-Kit-2a5a1bfb7f4e4bc2a57d732078c5ec36?pvs=73'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            border: 3, '&:hover': {
                                border: 3,
                            }
                        } }
                    >
                        Abrir Kit
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={ { my: '4rem', px: { xs: '2rem', lg: 0 }, flexDirection: { xs: 'column-reverse', lg: 'row' } } } spacing={ 4 }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        No Te Pierdas de
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Nuestras Novedades
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        Entérate siempre de lo que está sucediendo en nuestra comunidad. Podrás estar al tanto de artículos, actividades, talleres, charlas, eventos, nuevos clubes, recursos, y mucho más a través de nuestro <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>Blog Universitario</Box>, siempre al día con las últimas novedades dentro de <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>CENFOTEC</Box>.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href="/community"
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            border: 3, '&:hover': {
                                border: 3,
                            }
                        } }
                    >
                        Visitar Blog
                    </Button>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 }>
                    <BlogGraphic sx={ { width: { xs: '100%', lg: '85%' }, height: 'auto' } } />
                </Grid>
            </Grid>
            {/* <Grid container sx={ { my: '2rem', px: { xs: '2rem', lg: 0 } } } spacing={ 4 }>
                <Grid item xs={ 12 } lg={ 6 }>
                    <Box sx={ { width: { xs: '100%', lg: '85%' }, height: 'auto' } }>
                        <img src={ electionsGraphic } alt="Elecciones" style={ { width: '100%', height: 'auto' } } />
                    </Box>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        ¿Deseas formar parte del
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Consejo Estudiantil de tu escuela?
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        La <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> invita a toda la Comunidad Estudiantil a participar del proceso electoral para elegir a los representantes estudiantiles que conformarán el Consejo Estudiantil de cada escuela. Las elecciones estudiantiles se realizarán una vez al año en el tercer periodo cuatrimestral.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='/community/student-council'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            border: 3, '&:hover': {
                                border: 3,
                            }
                        } }
                    >
                        Conocer Más
                    </Button>
                </Grid>
            </Grid> */}
        </Box>
    );
};

export default GuidanceSection;
