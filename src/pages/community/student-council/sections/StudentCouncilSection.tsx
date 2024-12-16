import { SectionProps } from '@/types/notionTypes';
import { Box, List, ListItem, Typography } from '@mui/material';

const StudentCouncilSection: React.FC<SectionProps> = ({ content }) => {

    const studentCouncilGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722830884/students-site/student-council.png';
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
                    flexDirection: { xs: 'column-reverse', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    mb: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(2, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>{ safeGetText(3, 'paragraph') }</Box>{ safeGetText(4, 'paragraph') }
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
                        { safeGetText(5, 'heading_3') } <Box component="span" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>{ safeGetText(6, 'heading_3') }</Box>
                    </Typography>
                    <List sx={ { listStyleType: 'decimal', ml: '2rem', mb: '2rem' } }>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(7, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(8, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(9, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(10, 'paragraph') }</Box>{ safeGetText(11, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(12, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(13, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(14, 'paragraph') }</Box>{ safeGetText(15, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(16, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(17, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(18, 'paragraph') }</Box>{ safeGetText(19, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(20, 'paragraph') }
                        </ListItem>
                    </List>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, maxWidth: '40rem' } }>
                        { safeGetText(21, 'heading_3') } <Box component="span" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>{ safeGetText(22, 'heading_3') }</Box>
                    </Typography>
                    <List sx={ { listStyleType: 'decimal', ml: '2rem', mb: '2rem' } }>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(23, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(24, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(25, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(26, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(27, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(28, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(29, 'paragraph') }
                        </ListItem>
                        <ListItem sx={ { display: 'list-item' } }>
                            { safeGetText(30, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(31, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(32, 'paragraph') }</Box>{ safeGetText(33, 'paragraph') }
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box >
    );
};

export default StudentCouncilSection;
