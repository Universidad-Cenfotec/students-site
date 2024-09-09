import { SectionProps } from '@/types/notionTypes';
import { Box, Grid, Typography } from '@mui/material';

const DiversityStatementSection: React.FC<SectionProps> = ({ content }) => {

    const graphicUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1719732500/students-site/diversity-statement-graphic.png';
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(12, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(13, 'heading_1') }
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
                    px: { xs: '2rem', lg: 0 },
                } }
                spacing={ 4 }
            >
                <Grid item xs={ 12 }>
                    <img src={ graphicUrl } alt="Diversity Statement Graphic" style={ { width: '35rem' } } />
                </Grid>
                <Grid item xs={ 12 } sx={ { textAlign: 'left', px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(14, 'paragraph') } <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ safeGetText(15, 'paragraph') } </Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(16, 'paragraph') }</Box> { safeGetText(17, 'paragraph') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(18, 'paragraph') }
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DiversityStatementSection;
