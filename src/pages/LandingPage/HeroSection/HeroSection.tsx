import { Box, Typography, Button } from '@mui/material';
import { HeroBackground } from './components';

export const HeroSection = () => {
    return (
        <Box
            sx={ {
                position: 'relative',
                bgcolor: 'background.paper',
                pt: 8,
                pb: 6,
            } }
        >
            {/* SVG Background */ }
            <HeroBackground
                style={ {
                    position: 'absolute',
                    top: 0,
                    right: 'calc(40% - 640px)',
                } }
            />
            <Box sx={ { padding: 12, width: '55%' } }>
                <Typography
                    variant="h1"
                    align="left"
                    color="secondary"
                    fontSize={ 76 }
                    lineHeight={ 0.9 }
                    gutterBottom
                    width="85%"
                >
                    Explora la Experiencia <Box component="span" sx={ { color: 'primary.main', fontSize: 127, lineHeight: 1 } }>CENFOTEC</Box>
                </Typography>
                <Typography
                    variant="body1"
                    align="left"
                    color="text"
                    fontSize={ 20 }
                    paragraph
                >
                    Abre las puertas a un mundo de conocimiento y vanguardia en <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>CENFOTEC</Box>. Sumérgete en un ambiente donde la pasión se convierte en excelencia y donde cada paso te acerca a tus metas profesionales.
                </Typography>
                <Box
                    sx={ {
                        mt: 4,
                        display: 'flex',
                        justifyContent: 'left'
                    } }
                >
                    <Button variant="contained" size="large" color="primary" sx={ { fontSize: 24, fontWeight: 600 } }>
                        ¡Explorar!
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
