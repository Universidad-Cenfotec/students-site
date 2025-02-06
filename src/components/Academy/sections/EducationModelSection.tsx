import { SectionProps } from '@/types/notionTypes';
import { Box, List, ListItem, Typography } from '@mui/material';

const EducationModelSection: React.FC = () => {

    const educationModelGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722830884/students-site/education-model-graphic.png';
    const xperiencedMethodologyGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722835186/students-site/xperienced-methodology.png';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Academia
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                ¿Qué es un modelo educativo?
            </Typography>
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
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Un modelo educativo abarca diferentes elementos interrelacionados, como el proceso de construcción del conocimiento, la enseñanza, el aprendizaje y la evaluación. Estos elementos se combinan para proporcionar un marco integral que promueva un aprendizaje activo, significativo y efectivo en los estudiantes. Al adoptar este modelo, se busca fomentar el desarrollo de habilidades, competencias y actitudes que preparen a la población estudiantil para enfrentar los desafíos de la sociedad actual y futura.
                    </Typography>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' } } }>
                    <img src={ educationModelGraphic } alt="Education Model Graphic" style={ { width: '100%', maxWidth: '30rem' } } />
                </Box>
            </Box>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } } >
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Modelo por
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Competencias
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Se enfoca en el desarrollo de las habilidades prácticas y competencias relevantes para el mundo laboral y social. Busca preparar al estudiantado para enfrentar desafíos reales, promoviendo el aprendizaje activo, la aplicación de conocimientos en contextos auténticos y la evaluación basada en la demostración de competencias, se adapta a las demandas de la sociedad actual, donde la capacidad de aplicar el conocimiento de manera efectiva es tan importante como el conocimiento en sí mismo.
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, mt: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>Características:</Box>
                    </Typography>
                    <List sx={ { listStyleType: 'disc', ml: '2rem', mb: '2rem' } }>
                        <ListItem sx={ { display: 'list-item' } }>
                            Enfocado en la actuación o desempeño laboral y profesional de estudiante.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Utiliza resultados de aprendizaje más prácticos y orientados en la resolución de problemas, ejecución de funciones e interacción en equipos de trabajo.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            La <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> con el modelo por competencias le apuesta a una educación moderna y significativa.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Se basa en la construcción del conocimiento y no en el cumplimiento de objetivos.
                        </ListItem>
                    </List>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Modalidad
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Virtual en Vivo
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Esta modalidad permite a la población estudiantil tener formación en vivo a través de videoconferencia, sin desplazarse. Aprovecha las ventajas de interactuar en tiempo real con docentes que usan metodologías efectivas como aprendizaje basado en proyectos y resolución de problemas. Combina sesiones sincrónicas obligatorias con la opción de revisar grabaciones para una experiencia educativa enriquecedora.
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, mt: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>Características:</Box>
                    </Typography>
                    <List sx={ { listStyleType: 'disc', ml: '2rem', mb: '2rem' } }>
                        <ListItem sx={ { display: 'list-item' } }>
                            Aprendizaje basado en proyectos, resolución de problemas, estudio de casos, entre otros.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Sesiones sincrónicas de asistencias obligatorias, oportunidad de repasar por medio de grabaciones.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Uso de laboratorios virtuales, plataforma Google Workspace y Moodle, así como canales de comunicación.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Actividades de formación y socialización presenciales, en combinación con modalidad virtual en vivo.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Tutorías virtuales en vivo disponibles para algunas áreas, apoyo de estudiantes con formación avanzada.
                        </ListItem>
                    </List>
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
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        Metodología
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        XperiencEd™
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Incorporando el enfoque experiencial de Kolb, la <Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>Metodología XperiencEd™ </Box>promueve un aprendizaje significativo y contextualizado. Este enfoque permite aplicar conceptos teóricos a situaciones reales, fortaleciendo la comprensión y las competencias prácticas. La metodología dedica el 20% del tiempo a la explicación magistral, el 60% a la experiencia práctica y el 20% a la retroalimentación, fomentando un aprendizaje activo y orientado a las necesidades del mundo laboral en tecnologías digitales y áreas afines.
                    </Typography>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' } } }>
                    <img src={ xperiencedMethodologyGraphic } alt="XperiencEd Methodology Graphic" style={ { width: '100%', maxWidth: '30rem' } } />
                </Box>
            </Box>
        </Box >
    );
};

export default EducationModelSection;
