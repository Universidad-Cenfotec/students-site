import { SectionProps } from '@/types/notionTypes';
import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const PlatformsSection: React.FC<SectionProps> = ({ content }) => {

    const platformsVideoPlaceholderGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722883320/students-site/platforms-video-placeholder.png';
    const assistanceCenterLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883926/students-site/logo-centro-asistencia.png';
    const gmailLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883926/students-site/logo-gmail.png';
    const selfserviceLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883927/students-site/logo-autoservicio.png';
    const meetLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883926/students-site/logo-meet.png';
    const moodleLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883927/students-site/logo-moodle.png';
    const zelayaLibraryLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883926/students-site/logo-biblioteca-ignacio-trejos-zelaya.png';
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(29, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(30, 'heading_1') }
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '6rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '40%' }, textAlign: 'left', my: '2rem' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(31, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(32, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(33, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(34, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(35, 'paragraph') }</Box>{ safeGetText(36, 'paragraph') }
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://drive.google.com/file/d/1-kz6CV0hwLHa-ClJZVvDKJBgNC4k3sm0/view?usp=sharing'
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
                        { safeGetText(37, 'paragraph') }
                    </Button>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '50%' } } }>
                    <img src={ platformsVideoPlaceholderGraphic } alt="Platforms Video Placeholder Graphic" style={ { width: '100%', maxWidth: '30rem' } } />
                </Box>
            </Box>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '20%' } } }>
                    <img src={ assistanceCenterLogo } alt="Assistance Center Logo" style={ { width: '100%', maxWidth: '15rem' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '75%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Centro de Asistencia
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        El Centro de Asistencia es el principal medio de comunicación con los departamentos de la Universidad a través de tiquetes de soporte. Puede iniciar sesión con su correo institucional (@ucenfotec) usando la opción 'Google' o crear un usuario manualmente. Al ingresar, podrá crear tiquetes desde 'Agregar Tiquete' y seleccionar el departamento adecuado. Recibirá respuestas por correo electrónico y un mensaje de cierre una vez resuelto el caso.
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://www.google.com/url?q=https%3A%2F%2Fcentrodeasistencia.ucenfotec.ac.cr%2Fportal%2Fes%2Fsignin&sa=D&sntz=1&usg=AOvVaw1w7zTbLRWka2Hi0qIhehUE'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                            mb: { xs: '1rem', sm: 0 },
                        } }

                    >
                        Enlace Directo
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        href='https://drive.google.com/file/d/1JXB_1BcveV84CXMjJ-xOHCzlTFddtejz/view?usp=sharing'
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
                        Enlace al Manual
                    </Button>
                </Box>
            </Box>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '20%' } } }>
                    <img src={ gmailLogo } alt="Gmail Logo" style={ { width: '100%', maxWidth: '15rem' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '75%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Correo Institucional
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Como estudiante de la Universidad CENFOTEC, tendrás acceso a una cuenta institucional de correo. Esta será esencial para el contacto con el profesorado, estudiantes, personal administrativo y visualización de materiales en tus cursos. Si no tienes acceso, crea un tiquete al departamento de TIC en el Centro de Asistencia.
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='http://gmail.com/'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                            mb: { xs: '1rem', sm: 0 },
                        } }

                    >
                        Enlace Directo
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        href='https://drive.google.com/file/d/1g_eSdPWqUcK0soH5XaCS1CllwJUEYzVO/view?usp=sharing'
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
                        Enlace al Manual
                    </Button>
                </Box>
            </Box>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '20%' } } }>
                    <img src={ selfserviceLogo } alt="Self Service Logo" style={ { width: '100%', maxWidth: '15rem' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '75%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Auto Servicio
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        La plataforma del Auto Servicio permite ver el progreso de tu carrera, cursos disponibles, notas oficiales y realizar la matrícula automáticamente. Recibirás por correo el enlace a la plataforma, un manual de uso y las credenciales necesarias. Usa tu correo institucional (@ucenfotec) para iniciar sesión con 'Google'. Se recomienda utilizar Google Chrome o Mozilla Firefox. Si no tienes acceso, acude al Centro de Asistencia.
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://www.google.com/url?q=https%3A%2F%2Fautoservicio.ucenfotec.ac.cr%2Flogin&sa=D&sntz=1&usg=AOvVaw02sJsMaE89NnVrE2k36Ek_'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                            mb: { xs: '1rem', sm: 0 },
                        } }

                    >
                        Enlace Directo
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        href='https://drive.google.com/file/d/1S9MhVGGtoCuTRQ8CulihRVEkFw4mf6F5/view?usp=sharing'
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
                        Enlace al Manual
                    </Button>
                </Box>
            </Box>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '20%' } } }>
                    <img src={ meetLogo } alt="Meet Logo" style={ { width: '100%', maxWidth: '15rem' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '75%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Google Meet
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Google Meet es la plataforma oficial para clases sincrónicas y sesiones virtuales en la universidad. Accede a través de tu correo institucional y consulta el enlace con tu docente si tienes problemas. Meet permite grabar clases, organizar salas, hacer encuestas, actividades en grupos, y usar la pizarra digital Jamboard. Es una plataforma gratuita incluida en Google Workspace.
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        href='https://drive.google.com/file/d/1weozk5K0qioQQPR1Wlxy_-fxl0lUKeQB/view?usp=sharing'
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
                        Enlace al Manual
                    </Button>
                </Box>
            </Box>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '20%' } } }>
                    <img src={ moodleLogo } alt="Moodle Logo" style={ { width: '100%', maxWidth: '15rem' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '75%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Moodle
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Moodle es la plataforma para acceder a las aulas virtuales de tus cursos. Encontrarás enlaces a clases, comunicación con docentes, grabaciones, sílabos, material semanal y espacios para tareas. Recibirás el enlace y credenciales por correo. Usa tu correo institucional para iniciar sesión con 'Google'. Se recomienda Google Chrome o Mozilla Firefox. Si no tienes acceso, crea un tiquete al departamento de Educación Virtual en el Centro de Asistencia.
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://www.google.com/url?q=https%3A%2F%2Fmoodle.ucenfotec.ac.cr%2Flogin%2Findex.php&sa=D&sntz=1&usg=AOvVaw10A_qWvr6486kV1TNHQrTF'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                            mb: { xs: '1rem', sm: 0 },
                        } }

                    >
                        Enlace Directo
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        size="large"
                        href='https://drive.google.com/file/d/1_oAxgfRXohm5Am_59_t_GAZudRUhlhmj/view?usp=sharing'
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
                        Enlace al Manual
                    </Button>
                </Box>
            </Box>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '20%' } } }>
                    <img src={ zelayaLibraryLogo } alt="Ignacio Trejos Zelaya Library Logo" style={ { width: '100%', maxWidth: '15rem' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '75%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Biblioteca Ignacio Trejos Zelaya
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        La Biblioteca Ignacio Trejos Zelaya, es un centro de información en computación e informática de la Universidad Cenfotec, con un acervo bibliográfico en su mayoría digital.
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fucenfotec.ac.cr%2Fbiblioteca-ignacio-trejos-zela%3Fpli%3D1&sa=D&sntz=1&usg=AOvVaw1BzTmZyEFn7IigIfPWSyYX'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                            mb: { xs: '1rem', sm: 0 },
                        } }

                    >
                        Enlace Directo
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default PlatformsSection;
