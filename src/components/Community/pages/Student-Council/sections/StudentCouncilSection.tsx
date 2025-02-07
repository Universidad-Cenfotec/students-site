import { Box, List, ListItem, Typography } from '@mui/material';

const StudentCouncilSection: React.FC = () => {

    const studentCouncilGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722830884/students-site/student-council.png';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Comunidad
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                ¿Qué es el Consejo Estudiantil?
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column-reverse', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        El <Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>Consejo Estudiantil</Box> es el órgano de máxima representación estudiantil y estará constituido por estudiantes de cada Escuela, respetando el debido proceso democrático de elección estudiantil, tiene como finalidad, el facilitar la participación de la comunidad estudiantil en la expresión de los intereses académicos y formativos en el ámbito universitario.
                    </Typography>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, my: { xs: '2rem', lg: '0' } } }>
                    <img src={ studentCouncilGraphic } alt="Student Council Graphic" style={ { width: '100%', maxWidth: '50rem' } } />
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
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        Requisitos para formar parte del <Box component="span" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>Consejo Estudiantil de la Escuela:</Box>
                    </Typography>
                    <List sx={ { listStyleType: 'decimal', ml: '2rem', mb: '2rem' } }>
                        <ListItem sx={ { display: 'list-item' } }>
                            Ser mayor de edad.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Ser estudiante activo (periodo 2024-3) de la <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> en el momento de la elección. La suspensión de estudios y la aplicación de una sanción disciplinaria, hará perder la calidad de representante estudiantil.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            No desempeñar cargos administrativos o docentes dentro de la <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box>.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            No estar sancionado disciplinaria o académicamente por la <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box>.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            No estar o haber estado involucrado en alguna situación de acoso y hostigamiento sexual.
                        </ListItem>
                    </List>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, maxWidth: '40rem' } }>
                        Responsabilidades de los representantes <Box component="span" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>del Consejo Estudiantil de la Escuela:</Box>
                    </Typography>
                    <List sx={ { listStyleType: 'decimal', ml: '2rem', mb: '2rem' } }>
                        <ListItem sx={ { display: 'list-item' } }>
                            Participar activa y responsablemente en los proyectos establecidos por la Dirección de Escuela.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Participar en el Consejo de Escuela.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Promover la participación y colaboración de la comunidad estudiantil en las actividades universitarias.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Conformar comisiones o comités Ad-hoc que fortalezcan la participación estudiantil.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Favorecer un diálogo fluido y respetuoso entre estudiantes y autoridades universitarias.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Desarrollar actividades que favorezcan la vida universitaria.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Canalizar inquietudes de los estudiantes con la Dirección de la Escuela.
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            Respetar el Estatuto Orgánico, el Reglamento de Régimen Estudiantil y el Reglamento Académico de la <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box>, desarrollando su actividad en el ámbito universitario.
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box >
    );
};

export default StudentCouncilSection;
