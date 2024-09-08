import { Box, Grid, Typography } from '@mui/material';
import { Map } from '@/components/Landing/MapSection/components';

const MapSection: React.FC<any> = ({ content }) => {
    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { content[38].heading_3.rich_text[0].plain_text }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { content[39].heading_1.rich_text[0].plain_text }
            </Typography>
            <Box sx={ { my: '2rem', maxWidth: '90%', mx: 'auto' } }>
                <Grid container sx={ { my: '2rem' } }>
                    <Map />
                </Grid>
            </Box>
        </Box>
    );
};

export default MapSection;
