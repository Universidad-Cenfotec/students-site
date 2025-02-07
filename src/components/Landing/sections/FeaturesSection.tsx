import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import { CommentIcon, HeartIcon, SearchIcon } from '@/components/Landing/components/Icons';

const FeaturesSection: React.FC = () => {

    return (
        <Box id="features" sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, mb: '10rem', px: '1rem' } }>
            <Typography variant="h4" sx={ { mx: { xs: 'auto', md: 12 }, my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Sitio de Estudiantes
            </Typography>
            <Typography variant="h2" sx={ { mx: { xs: 'auto', md: 12 }, textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2.5rem', sm: '3rem' }, fontWeight: 600 } }>
                ¿Qué puedes hacer?
            </Typography>
            <Grid container sx={ { textAlign: 'center', my: '2rem' } } spacing={ 4 }>
                {/* Feature 1 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='/academy'
                                sx={ {
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <SearchIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.5rem' } }>
                                Explorar Oportunidades
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '16rem', mx: 'auto' } }>
                                Encuentra una amplia gama de recursos académicos, desde guías de estudio hasta oportunidades de crecimiento profesional.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 2 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='/community'
                                sx={ {
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <CommentIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.5rem' } }>
                                Conectar con la Comunidad
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '16rem', mx: 'auto' } }>
                                Únete al vibrante ecosistema estudiantil, donde podrás colaborar, compartir ideas y crear conexiones valiosas.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 3 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='/about'
                                sx={ {
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <HeartIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.25rem' } }>
                                Encontrar Apoyo y Asistencia
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '16rem', mx: 'auto' } }>
                                Accede a servicios de soporte dedicados al bienestar estudiantil, diseñados para ayudarte en cada paso de tu jornada educativa.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeaturesSection;
