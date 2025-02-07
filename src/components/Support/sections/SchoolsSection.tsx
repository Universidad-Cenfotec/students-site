import { Box, Grid, Typography } from '@mui/material';

const SchoolsSection: React.FC = () => {
    const logos = [
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Cybersecurity-Color.png',
            heading: 'Escuela de Ciberseguridad',
            email: 'ecib@ucenfotec.ac.cr',
            director: 'Miguel Pérez Montero',
            assistant: 'Stacy Brenes Gamboa',
            phone: '6184-3874',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Intelligent-Systems-Color.png',
            heading: 'Escuela de Sistemas Inteligentes',
            email: 'esint@ucenfotec.ac.cr',
            director: 'Tomás de Camino Beck',
            assistant: 'Gabriela Urbina Hernández',
            phone: '6294-6231',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327319/students-site/Information-Systems-Color.png',
            heading: 'Escuela de Sistemas de Información',
            email: 'esinf@ucenfotec.ac.cr',
            director: 'María Isabel Losilla Barrientos',
            assistant: 'Michelle Montero Quesada',
            phone: '6391-2374',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Information-Technology-Color.png',
            heading: 'Escuela de Tecnologías de Información',
            email: 'eti@ucenfotec.ac.cr',
            director: 'Jason Ulloa Hernández',
            assistant: 'Rocío Sandí Corrales',
            phone: '6184-3721',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Software-Engineering-Color.png',
            heading: 'Escuela de Ingeniería del Software',
            email: 'esoft@ucenfotec.ac.cr',
            director: 'Sergio Oviedo Seas',
            assistant: 'Ingrid Mora Segura / Mariana Calderón Tovar',
            phone: '6391-2632 / 5702-1643',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Computing-Fundamentals-Color.png',
            heading: 'Escuela de Fundamentos',
            email: 'efun@ucenfotec.ac.cr',
            director: 'Christian Sibaja Fernández',
            assistant: 'Álvaro Ospina Beltrán',
            phone: '6097-2749',
        },
    ];

    return (
        <Box sx={ { width: '100%', textAlign: 'center', my: '8rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography
                variant="h4"
                sx={ {
                    mx: 'auto',
                    my: '0.5rem',
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    fontWeight: 600,
                    letterSpacing: '0.0625rem',
                } }
            >
                Soporte
            </Typography>
            <Typography
                variant="h2"
                sx={ {
                    mx: 'auto',
                    mb: '4rem',
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'primary.main',
                    fontSize: { xs: '2rem', sm: '3rem' },
                    fontWeight: 600,
                } }
            >
                Contactos de las Escuelas
            </Typography>

            <Grid container spacing={ 4 }>
                { logos.map((logo, index) => (
                    <Grid item xs={ 12 } md={ 6 } key={ index }>
                        <Box
                            sx={ {
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            } }
                        >
                            <Box sx={ { width: '35%', textAlign: 'center', mr: '2rem' } }>
                                <img src={ logo.src } alt={ logo.heading } style={ { width: '100%' } } />
                            </Box>
                            <Box sx={ { width: '80%', textAlign: 'left', pl: 2 } }>
                                <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: '1.5rem', fontWeight: 600 } }>
                                    { logo.heading }
                                </Typography>
                                <Typography variant="body1" sx={ { my: 1 } }>
                                    <strong>Correo:</strong> { logo.email }
                                </Typography>
                                <Typography variant="body1" sx={ { my: 1 } }>
                                    <strong>Director:</strong> { logo.director }
                                </Typography>
                                <Typography variant="body1" sx={ { my: 1 } }>
                                    <strong>Asistente:</strong> { logo.assistant }
                                </Typography>
                                <Typography variant="body1" sx={ { my: 1 } }>
                                    <strong>Teléfono:</strong> { logo.phone }
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                )) }
            </Grid>
        </Box>
    );
};

export default SchoolsSection;
