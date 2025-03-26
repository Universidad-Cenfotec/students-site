import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { AwardIcon, FileIcon, MonitorIcon } from '@/components/Academy/components';

const CalendarSection: React.FC = () => {

    const academicCalendarGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722969249/students-site/academic-calendar-graphic.png';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Academia
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Accede al calendario y a los reglamentos
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
                <Box sx={ { width: { xs: '100%', lg: '50%' } } }>
                    <img src={ academicCalendarGraphic } alt="Academic Calendar Graphic" style={ { width: '100%' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '40%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Calendario
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Académico
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> ofrece un Calendario Académico anual para carreras cuatrimestrales y técnicos por microcursos. Cada enlace lleva al documento en PDF descargable. Además, cada rubro dirige a enlaces con más información o formularios según el trámite necesario.
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/c%C3%B3mo-puedo-ver-el-calendario-acad%C3%A9mico-ucenfotec'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                            mb: '1rem'
                        } }

                    >
                        Acceso al Calendario Académico
                    </Button>
                </Box>
            </Box>

            <Grid container sx={ { textAlign: 'center', mb: '2rem' } } spacing={ 4 }>
                {/* Feature 1 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-acad%C3%A9mico'
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
                                <FileIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.5rem' } }>
                                Reglamento Académico
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
                                href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-de-r%C3%A9gimen-estudiantil'
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
                                <AwardIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '15.5rem', mx: 'auto', my: '1.5rem' } }>
                                Reglamento Régimen Estudiantil
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 3 */ }
                {/* TODO: PENDIENTE EN BASE DE CONOCIMIENTOS */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='https://drive.google.com/file/d/1uQyrBTEHeipNHPt8ja1MaKXXxSY1kNuG/view?usp=sharing'
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
                                <MonitorIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '18.5rem', mx: 'auto', my: '1.25rem' } }>
                                Lineamientos Sesiones Sincrónicas y Presenciales
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CalendarSection;
