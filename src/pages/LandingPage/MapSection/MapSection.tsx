import { Box, Grid, Typography } from '@mui/material';
import { Map } from './components';

export const MapSection = () => {
    return (
        <Box sx={ { width: '100%', height: '70vh', textAlign: 'center', my: 4 } }>
            <Typography variant="h4" sx={ { mx: 12, my: 2, textAlign: 'left', fontSize: 18, fontWeight: 600, letterSpacing: 1 } }>
                Sitio de Estudiantes
            </Typography>
            <Typography variant="h2" sx={ { mx: 12, textAlign: 'left', color: 'primary.main', fontSize: 48, fontWeight: 600 } }>
                ¿Deseas visitarnos?
            </Typography>
            <Grid container sx={ { my: 8, maxWidth: '80%', mx: 'auto' } }>
                <Map />
            </Grid>
        </Box>
    );
};
