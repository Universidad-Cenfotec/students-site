import { SectionProps } from '@/types/notionTypes';
import { Box, Button, Typography } from '@mui/material';

const JobsSection: React.FC<SectionProps> = ({ content }) => {

    const jobsGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722971999/students-site/jobs-graphic.png';
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(0, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(1, 'heading_1') }
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '6rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '45%' } } }>
                    <img src={ jobsGraphic } alt="Jobs Graphic" style={ { width: '80%' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(2, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(3, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { maxWidth: '75%', mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(4, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(5, 'paragraph') }</Box>{ safeGetText(6, 'paragraph') }
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://ucenfotec.ac.cr/bolsatrabajo/'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                        } }

                    >
                        { safeGetText(7, 'paragraph') }
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default JobsSection;
