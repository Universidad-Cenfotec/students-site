import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { CommentIcon, HeartIcon, SearchIcon } from './components';

export const FeaturesSection = () => {
    return (
        <Box sx={ { width: '100%', height: '75vh', textAlign: 'center', my: 4 } }>
            <Typography variant="h4" sx={ { mx: 12, my: 2, textAlign: 'left', fontSize: 18, fontWeight: 600, letterSpacing: 1 } }>
                Sitio de Estudiantes
            </Typography>
            <Typography variant="h2" sx={ { mx: 12, textAlign: 'left', color: 'primary.main', fontSize: 48, fontWeight: 600 } }>
                ¿Qué puedes hacer?
            </Typography>
            <Grid container sx={ { textAlign: 'center', my: 8 } }>
                {/* Feature 1 */ }
                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={ { maxWidth: 315, mx: 'auto', boxShadow: 0 } }> {/* boxShadow: 0 removes the card shadow */ }
                        <CardContent>
                            <Box
                                sx={ {
                                    backgroundColor: 'primary.main',
                                    width: 102,
                                    height: 102,
                                    borderRadius: '26px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <SearchIcon style={ { fontSize: 45, color: 'white' } } />
                            </Box>
                            <Typography variant="h3" sx={ { fontSize: 24, fontWeight: 600, color: 'secondary.main', maxWidth: 200, mx: 'auto', my: 3 } }>
                                Explorar Oportunidades
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2 } }>
                                Encuentra una amplia gama de recursos académicos, desde guías de estudio hasta oportunidades de crecimiento profesional.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 2 */ }
                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={ { maxWidth: 295, mx: 'auto', boxShadow: 0 } }> {/* boxShadow: 0 removes the card shadow */ }
                        <CardContent>
                            <Box
                                sx={ {
                                    backgroundColor: 'primary.main',
                                    width: 102,
                                    height: 102,
                                    borderRadius: '26px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <CommentIcon style={ { fontSize: 45, color: 'white' } } />
                            </Box>
                            <Typography variant="h3" sx={ { fontSize: 24, fontWeight: 600, color: 'secondary.main', maxWidth: 200, mx: 'auto', my: 3 } }>
                                Conectar con la Comunidad
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2 } }>
                                Únete al vibrante ecosistema estudiantil, donde podrás colaborar, compartir ideas y crear conexiones valiosas.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 3 */ }
                <Grid item xs={ 12 } sm={ 4 }>
                    <Card sx={ { maxWidth: 300, mx: 'auto', boxShadow: 0 } }> {/* boxShadow: 0 removes the card shadow */ }
                        <CardContent>
                            <Box
                                sx={ {
                                    backgroundColor: 'primary.main',
                                    width: 102,
                                    height: 102,
                                    borderRadius: '26px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <HeartIcon style={ { fontSize: 45, color: 'white' } } />
                            </Box>
                            <Typography variant="h3" sx={ { fontSize: 24, fontWeight: 600, color: 'secondary.main', maxWidth: 200, mx: 'auto', my: 2 } }>
                                Encontrar Apoyo y Asistencia
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2 } }>
                                Accede a servicios de soporte dedicados al bienestar estudiantil, diseñados para ayudarte en cada paso de tu jornada educativa.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};
