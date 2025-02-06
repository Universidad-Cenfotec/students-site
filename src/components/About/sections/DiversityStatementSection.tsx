import { Box, Grid, Typography } from '@mui/material';

const DiversityStatementSection: React.FC = () => {

    const graphicUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1719732500/students-site/diversity-statement-graphic.png';

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Sobre Nosotros
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Enunciado de Diversidad
            </Typography>
            <Grid
                container
                sx={ {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    my: '2rem',
                    width: '100%',
                } }
            >
                <Grid item xs={ 12 }>
                    <img src={ graphicUrl } alt="Diversity Statement Graphic" width={ '100%' } height={ '100%' } style={ { maxWidth: '30rem' } } />
                </Grid>
                <Grid item xs={ 12 } sx={ { textAlign: 'left', px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        En la  <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> celebramos las transformaciones sociales que han permitido que cada vez más personas accedan a su derecho a la educación, a través de la ruptura de paradigmas que han sostenido la desigualdad. Caminamos hacia el reconocimiento de nuestras diferencias, que enriquecen el tejido social, promoviendo el acceso universal al conocimiento, la creación y la investigación.  Nuestra comunidad universitaria: estudiantes, docentes, equipo administrativo y demás personas que la conforman es cada vez más diversa y recibimos con orgullo a cada nueva generación de estudiantes que se embarca en un nuevo proyecto educativo.  Nos comprometemos a trabajar siempre por el bienestar social, con la misma dignidad y derechos para todas las personas, sin distinción de nacionalidad, etnia, identidad de género, orientación sexual, estatus socioeconómico, condición de discapacidad, edad, etc; así como a garantizar una educación inclusiva, equitativa y de calidad. Hacemos conscientes las reformas educativas necesarias para este propósito y la integración como un hecho natural que nos acerque, día a día, a la universalidad deseada.
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        Fomentamos el empoderamiento de nuestra población estudiantil, y toda persona que forma parte de nuestra Universidad, de manera que sostenga estos principios en alto, como un principio indispensable para la excelencia. Trabajamos con voluntad y dedicación para que, quienes alguna vez hayan experimentado la exclusión, reconozcan en nuestra institución un espacio seguro, de diálogo y respeto mutuo, en el que siempre se reconozca el honor y la dignidad de todas y todos sus miembros.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DiversityStatementSection;
