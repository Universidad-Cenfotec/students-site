import { Box, Typography } from '@mui/material';

const CurrentCouncilSection: React.FC = () => {

    const currentCouncilMember1 = 'https://res.cloudinary.com/glovooker/image/upload/v1734318011/students-site/Abel_Corrales_Vargas.jpg';
    const currentCouncilMember2 = 'https://res.cloudinary.com/glovooker/image/upload/v1734318011/students-site/VargasJaramilloJoseIgnacio.jpg';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Comunidad
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Consejo de la Escuela de Ingeniería de Software
            </Typography>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    my: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '4rem' } }>
                    <Box sx={ { width: { xs: '100%', lg: '40%' }, mb: '2rem' } }>
                        <img src={ currentCouncilMember1 } alt='Abel Corrales Vargas' style={ { width: '12rem', height: '12rem', objectFit: 'cover', objectPosition: 'top', borderRadius: '10rem', maxWidth: '30rem' } } />
                    </Box>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        Abel Corrales Vargas
                    </Typography>
                    <Typography variant="body1" sx={ { color: 'text.main', fontSize: { xs: '1rem', sm: '1.5rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        Estudiante del Bachillerato en Ingeniería de Software
                    </Typography>
                    <Typography variant="body1" sx={ { color: 'text.main', fontSize: { xs: '.8em' }, fontWeight: 400, maxWidth: '30rem', mt: '1rem' } }>
                        “De manera personal, me consideraría sumamente feliz de poder ser una más de las personas que promueven que nuestra universidad sea un lugar integral, seguro y activo para todas las personas. Considero que puedo aportar una representación significativa para los estudiantes de la escuela de Software, y en lo que mis habilidades y tiempo me permitan, estar a disposición de escuchar y dialogar con los demás estudiantes para cualquier idea, problema o solicitud que yo como representante pueda abarcar”
                    </Typography>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '4rem' } }>
                    <Box sx={ { width: { xs: '100%', lg: '40%' }, mb: '2rem' } }>
                        <img src={ currentCouncilMember2 } alt='Jose Ignacio Vargas Jaramillo' style={ { width: '12rem', height: '12rem', objectFit: 'cover', objectPosition: 'top', borderRadius: '10rem', maxWidth: '30rem' } } />
                    </Box>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        Jose Ignacio Vargas Jaramillo
                    </Typography>
                    <Typography variant="body1" sx={ { color: 'text.main', fontSize: { xs: '1rem', sm: '1.5rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        Estudiante del Bachillerato en Ingeniería de Software
                    </Typography>
                    <Typography variant="body1" sx={ { color: 'text.main', fontSize: { xs: '.8em' }, fontWeight: 400, maxWidth: '30rem', mt: '1rem' } }>
                        “Quiero formar parte del consejo para romper esa brecha de comunicación entre los estudiantes. Crear una comunidad estudiantil y robusta, llena de actividades sociales dentro y fuera de la universidad. Fomentar competencias dentro de la universidad para  el continuo aprendizaje. Me interesa mucho abrir la puerta del diseño de videojuegos por medio de game jams universitarios en los cuales los estudiantes compitan entre sí. Otro de mis principales puntos de enfoque es la comunicación entre estudiantes de diferentes grados. Para esto me interesa la creación de canales de comunicación abiertos para cualquier estudiante en donde la comunidad estudiantil pueda preguntar sobre cursos, profesores y demás actividades de la universidad. Por último y no menos importante, promover actividades sociales como fiesta de bienvenida, cada inicio de cuatrimestre, torneos de videojuegos y eventos universitarios en donde se va a poder exponer su emprendimiento a los demás estudiantes”
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
};

export default CurrentCouncilSection;
