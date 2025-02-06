import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { LifeBuoyIcon, MapIcon, BriefcaseIcon } from '@/components/About/components';

const StudentAffairsSection: React.FC = () => {

    const logoUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1719730516/students-site/student-affairs-lg.png';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '4rem', mx: 'autos', px: { xs: '2rem', md: '6rem' } } }>
            <Grid container sx={ { width: '100%', my: '4rem', mx: 'auto', flexDirection: { xs: 'column-reverse', lg: 'row' } } }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Nuestro Departamento de
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Bienestar Estudiantil
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        Somos el departamento dedicado a acompañar al estudiantado en su vida académica, ofreciendo servicios de seguimiento, apoyo psicoeducativo, becas, cultura, deporte y bolsa de empleo. Trabajamos en coordinación con las Escuelas y otros departamentos para promover el <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>bienestar integral</Box> de cada estudiante.
                    </Typography>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { mb: { xs: '2rem', lg: 0 } } }>
                    <img src={ logoUrl } alt="Student Affairs Logo" width={ '100%' } style={ { maxWidth: '30rem' } } />
                </Grid>
            </Grid>
            <Grid container sx={ { textAlign: 'center', my: '2rem' } } spacing={ 4 }>
                {/* Feature 1 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='https://ucenfotec.ac.cr/bolsatrabajo/'
                                target='_blank'
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
                                <BriefcaseIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '9.5rem', mx: 'auto', my: '1.5rem' } }>
                                Bolsa de Trabajo
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '17rem', mx: 'auto' } }>
                                Conectamos empresas con los mejores perfiles tecnológicos y damos seguimiento a la colocación laboral de nuestro estudiantado.
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
                                href='#support-services'
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
                                <LifeBuoyIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '13.5rem', mx: 'auto', my: '1.5rem' } }>
                                Apoyo Psicológico y Psicoeducativo
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '16rem', mx: 'auto' } }>
                                Ofrecemos orientación y herramientas para mejorar el desempeño académico de los y las estudiantes.
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
                                href='#support-services'
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
                                <MapIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.25rem' } }>
                                Orientación Vocacional
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '17rem', mx: 'auto' } }>
                                Contamos con profesionales que ofrecen orientación vocacional para guiarte en tu desarrollo académico y profesional.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudentAffairsSection;
