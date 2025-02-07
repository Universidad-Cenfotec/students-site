import { Box, Button, Typography } from '@mui/material';

const ElectionsSection: React.FC = () => {

    const electionsFlyer = 'https://res.cloudinary.com/glovooker/image/upload/v1722969249/students-site/elections-flyer.png';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Comunidad
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Elecciones Estudiantiles
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    mx: 'auto',
                    mb: '6rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '40%' }, mb: '2rem' } }>
                    <img src={ electionsFlyer } alt="Academic Calendar Graphic" style={ { width: '100%', maxWidth: '30rem' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '55%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        ¿Deseas inscribirte como candidato para formar <Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>parte del Consejo Estudiantil de tu escuela?</Box>
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        La <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> invita a toda la Comunidad Estudiantil a participar del proceso electoral para elegir a los representantes estudiantiles que conformarán el Consejo Estudiantil de cada escuela. Las elecciones estudiantiles se realizarán una vez al año en el tercer periodo cuatrimestral.
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, mt: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>PERIODO DE INSCRIPCIÓN DE CANDIDATOS:</Box> 23 de setiembre al 21 de octubre, 2024
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, mb: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>PERIODO DE ELECCIONES ESTUDIANTILES:</Box> 28 de octubre al 01 de noviembre, 2024
                    </Typography>
                    <Box sx={ { display: 'flex', flexDirection: { xs: 'column', xl: 'row' }, alignItems: { xs: 'center' } } }>
                        <Button
                            variant='contained'
                            color="primary"
                            size="large"
                            href='https://forms.zoho.com/pbrenes/form/Formulariodeinscripcindecandidatosparaformarparted/formperma/6A2nIg0hvdOjOTxfflMD-wS5lRyIu1d3Y7KAwp3nORU?zf_lang=es'
                            target='_blank'
                            sx={ {
                                fontSize: { xs: '1rem', sm: '1.5rem' },
                                fontWeight: 600,
                                px: { xs: '2rem', sm: '3rem' },
                                mr: '2rem',
                                mb: { xs: '1rem', xl: '0' }
                            } }

                        >
                            Formulario de Inscripción de candidatos
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            href='https://drive.google.com/file/d/1D8E7z6_j-IfVV8VPhWkNdtlPJ6VYDmaM/view'
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
                            Reglamento para la Organización Estudiantil
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ElectionsSection;
