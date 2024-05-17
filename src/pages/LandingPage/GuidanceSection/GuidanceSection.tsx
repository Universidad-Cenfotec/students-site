import { Box, Grid, Typography, Button } from '@mui/material';
import { BlogGraphic, StudentKitGraphic } from './components';

export const GuidanceSection = () => {

    return (
        <Box sx={ { width: '100%', height: '125vh', textAlign: 'center', my: 4 } }>
            <Typography variant="h4" sx={ { mx: 12, my: 2, textAlign: 'left', fontSize: 18, fontWeight: 600, letterSpacing: 1 } }>
                Sitio de Estudiantes
            </Typography>
            <Typography variant="h2" sx={ { mx: 12, textAlign: 'left', color: 'primary.main', fontSize: 48, fontWeight: 600 } }>
                ¿Necesitas guía?
            </Typography>
            <Grid container sx={ { my: 8 } }>
                <Grid item xs={ 12 } md={ 6 }>
                    <StudentKitGraphic sx={ { width: '90%', height: 'auto' } } />
                </Grid>
                <Grid item xs={ 12 } md={ 6 } sx={ { textAlign: 'left', px: 14 } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: 32, fontWeight: 600 } }>
                        Saca Provecho de Nuestro
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: 32, fontWeight: 600 } }>
                        Kit de Estudiante
                    </Typography>
                    <Typography variant="body1" sx={ { my: 4, lineHeight: 2 } }>
                        Un conjunto de recursos recopilados por estudiantes para estudiantes. Desde guías paso a paso para primeros ingresos, hasta herramientas digitales y sistemas de estudio avanzados, nuestro <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>Kit de Estudiante</Box> será un apoyo crucial durante tu experiencia <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>CENFOTEC</Box>.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        sx={ {
                            fontSize: 24,
                            fontWeight: 600,
                            px: 6,
                            border: 4, '&:hover': {
                                border: 4,
                            }
                        } }
                    >
                        Abrir Kit
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={ { my: 12 } }>
                <Grid item xs={ 12 } md={ 6 } sx={ { textAlign: 'left', px: 14 } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: 32, fontWeight: 600 } }>
                        No Te Pierdas de
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: 32, fontWeight: 600 } }>
                        Nuestras Novedades
                    </Typography>
                    <Typography variant="body1" sx={ { my: 4, lineHeight: 2 } }>
                        Entérate siempre de lo que está sucediendo en nuestra comunidad. Podrás estar al tanto de artículos, actividades, talleres, charlas, eventos, nuevos clubes, recursos, y mucho más a través de nuestro <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>Blog Universitario</Box>, siempre al día con las últimas novedades dentro de <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>CENFOTEC</Box>.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        sx={ {
                            fontSize: 24,
                            fontWeight: 600,
                            px: 6,
                            border: 4, '&:hover': {
                                border: 4,
                            }
                        } }
                    >
                        Visitar Blog
                    </Button>
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <BlogGraphic sx={ { width: '90%', height: 'auto' } } />
                </Grid>
            </Grid>
        </Box >
    );
};
