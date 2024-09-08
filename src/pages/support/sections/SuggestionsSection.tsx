import { Box, Typography } from '@mui/material';

const SuggestionsSection = () => {
    const suggestionsGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722974184/students-site/suggestions-graphic.png';
    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Soporte
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                ¡Queremos escucharte!
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'column' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '6rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '45%' } } }>
                    <img src={ suggestionsGraphic } alt="Suggestions Graphic" style={ { width: '100%' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '100%' }, textAlign: 'left' } }>

                    <Typography variant="body1" sx={ { textAlign: 'left', mx: { xs: 'auto', lg: 0 }, my: '4rem', lineHeight: 2 } }>
                        En la <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>Universidad</Box> <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box> valoramos tu opinión como estudiante. Es por eso que, para ofrecerte una mayor experiencia, habilitamos un cuadro para que realices sus observaciones o sugerencias, las cuales podríamos incluir dentro de este sitio, con el objetivo de brindarte mejores soluciones de cara a tu aprendizaje. Únicamente debes ingresar tus observaciones en el espacio en blanco ubicado debajo de "Ingrese su sugerencia" y, posteriormente, presionar sobre la opción de "Enviar" para hacernos llegar tu observación.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default SuggestionsSection;
