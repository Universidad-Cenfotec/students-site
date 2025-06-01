import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material';

const SupportServicesSection: React.FC = () => {

    const sexualHarassment1 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679902/students-site/sexual-harassment-1.png';
    const sexualHarassment2 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-2.jpg';
    const sexualHarassment3 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-3.jpg';
    const sexualHarassment4 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-4.jpg';

    const caic1 = 'https://res.cloudinary.com/glovooker/image/upload/v1726720206/students-site/caic-1.jpg';
    const studyClub1 = 'https://res.cloudinary.com/glovooker/image/upload/v1740619505/students-site/Estudiadero-Cuatrimestre-1-WhatsApp.png';

    return (
        <Box id='support-services' sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '4rem', mx: 'autos', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Sobre Nosotros
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Servicios de Apoyo
            </Typography>
            <Grid container sx={ { width: { xs: '100%', lg: '70%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column-reverse', lg: 'row-reverse' } } }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Campaña Informativa,
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        NO al Acoso Sexual
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        La <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> cuenta con un Reglamento con base a la Ley N° 7476, para prevenir, prohibir y sancionar el acoso y hostigamiento sexual.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-contra-el-hostigamiento-sexual'
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
                        Enlace al Reglamento
                    </Button>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { mb: { xs: '2rem', lg: 0 } } }>
                    <img src={ sexualHarassment1 } alt="Sexual Harassment Campaign Graphic 1" width={ '100%' } style={ { maxWidth: '30rem' } } />
                </Grid>
            </Grid>
            <Grid container sx={ { width: { xs: '100%', lg: '70%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column', lg: 'row' } } }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        ¿Sabes qué es acoso sexual?
                    </Typography>
                    <Box>
                        <List sx={ { listStyleType: 'decimal', marginLeft: 4 } }>
                            <ListItem sx={ { display: "list-item", mx: { xs: 'auto', lg: 0 }, mt: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                                Promesas, amenazas, piropos con carácter sexual.
                            </ListItem>
                            <ListItem sx={ { display: "list-item", mx: { xs: 'auto', lg: 0 }, lineHeight: 2, maxWidth: '36rem' } }>
                                Acercamientos corporales de naturaleza sexual.
                            </ListItem>
                            <ListItem sx={ { display: "list-item", mx: { xs: 'auto', lg: 0 }, mb: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                                Conversaciones en redes sociales donde se exponga la integridad de una persona.
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { mb: { xs: '2rem', lg: 0 } } }>
                    <img src={ sexualHarassment2 } alt="Sexual Harassment Campaign Graphic 2" width={ '100%' } style={ { maxWidth: '30rem' } } />
                </Grid>
            </Grid>
            <Grid container sx={ { width: { xs: '100%', xl: '70%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column' }, alignItems: 'center' } }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        ¿Sabías que existe una ley que sanciona el acoso?
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        Ley contra el Hostigamiento Sexual en el Empleo y la Docencia
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-contra-el-hostigamiento-sexual'
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
                        Enlace a Ley N° 7476
                    </Button>
                </Grid>
                <Grid item sx={ { width: '100%', mt: { xs: '2rem' }, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: { xs: 'column', lg: 'row' } } }>
                    <img src={ sexualHarassment3 } alt="Sexual Harassment Campaign Graphic 3" width={ '100%' } style={ { maxWidth: '20rem' } } />
                    <img src={ sexualHarassment4 } alt="Sexual Harassment Campaign Graphic 4" width={ '100%' } style={ { maxWidth: '20rem' } } />
                </Grid>
                <Grid item sx={ { textAlign: { xs: 'center' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '50rem' } }>
                        Si necesitas ayuda o más información, acércate por medio de Centro de Asistencia y envía un ticket al Departamento de Bienestar Estudiantil o a los teléfonos: 6000-8054 / 6000-8055
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://forms.zohopublic.com/pbrenes/form/Formulariodedenunciaporacososexual/formperma/DxuvWLkNh89w4ijmj6XrTvLZD7JDDZLvTVrZg5CvRPw?zf_lang=es'
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
                        Enlace a Formulario de Denuncia por Acoso Sexual
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={ { width: { xs: '100%', xl: '70%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column' }, alignItems: 'center' } }>
                {/* <Grid container sx={ { width: { xs: '100%', lg: '100%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column', xl: 'row' } } }> */ }
                    <Grid item xs={ 12 } xl={ 6 } sx={ { mb: { xs: '4rem', xl: 0 }, textAlign: { xs: 'center', xl: 'left' }, px: { xs: '0rem', xl: '3.5rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
                        <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, mb: '1rem' } }>
                            Centro de Apoyo para la Inclusión (CAIC):
                        </Typography>
                        <img src={ caic1 } alt="CAIC Flyer" width={ '100%' } style={ { maxWidth: '40rem' } } />
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            href='https://forms.zoho.com/pbrenes/form/FormulariodesolicituddeapoyoseducativosCentrodeApo/formperma/wy922Tnm9sVL-eefC9q4XC3rIgzvfiRtaXAkHpDzU3I'
                            target='_blank'
                            sx={ {
                                fontSize: { xs: '1rem', sm: '1.5rem' },
                                fontWeight: 600,
                                px: { xs: '2rem', sm: '3rem' },
                                border: 3, '&:hover': {
                                    border: 3,
                                },
                                mt: '2rem'
                            } }

                        >
                            Enlace para Solicitud de Apoyos
                        </Button>
                    </Grid>
                {/* <Grid item xs={ 12 } xl={ 6 } sx={ { mb: { xs: '4rem', xl: 0 }, textAlign: { xs: 'center', xl: 'left' }, px: { xs: '0rem', xl: '3.5rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
                        <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, mb: '1rem' } }>
                            Club del Estudiadero:
                        </Typography>
                        <img src={ studyClub1 } alt="Study Club Flyer" width={ '100%' } style={ { maxWidth: '40rem' } } />
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            href='http://meet.google.com/pok-mrox-urm'
                            target='_blank'
                            sx={ {
                                fontSize: { xs: '1rem', sm: '1.5rem' },
                                fontWeight: 600,
                                px: { xs: '2rem', sm: '3rem' },
                                border: 3, '&:hover': {
                                    border: 3,
                                },
                                mt: '2rem'
                            } }

                        >
                            Enlace a Google Meet
                        </Button>
                    </Grid> */}
            </Grid>
            {/* </Grid> */ }
        </Box>
    );
};

export default SupportServicesSection;
