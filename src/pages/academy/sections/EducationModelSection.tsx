import { SectionProps } from '@/types/notionTypes';
import { Box, List, ListItem, Typography } from '@mui/material';

const EducationModelSection: React.FC<SectionProps> = ({ content }) => {

    const educationModelGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722830884/students-site/education-model-graphic.png';
    const xperiencedMethodologyGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722835186/students-site/xperienced-methodology.png';
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
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(1, 'heading_1') }
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
                        { safeGetText(2, 'paragraph') }
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
                        { safeGetText(3, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(4, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(5, 'paragraph') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, mt: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>{ safeGetText(6, 'paragraph') }</Box>
                    </Typography>
                    <List sx={ { listStyleType: 'disc', ml: '2rem', mb: '2rem' } }>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(7, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(8, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(9, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(10, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(11, 'paragraph') }</Box>{ safeGetText(12, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(13, 'paragraph') }
                        </ListItem>
                    </List>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(14, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(15, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(16, 'paragraph') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, mt: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>{ safeGetText(17, 'paragraph') }</Box>
                    </Typography>
                    <List sx={ { listStyleType: 'disc', ml: '2rem', mb: '2rem' } }>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(18, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(19, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(20, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(21, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(22, 'paragraph') }
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
                        { safeGetText(23, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(24, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(25, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>{ safeGetText(26, 'paragraph') }</Box>{ safeGetText(27, 'paragraph') }
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
