import { SectionProps } from '@/types/notionTypes';
import { Box, Typography } from '@mui/material';

const CurrentCouncilSection: React.FC<SectionProps> = ({ content }) => {

    const currentCouncilMember1 = 'https://res.cloudinary.com/glovooker/image/upload/v1734318011/students-site/Abel_Corrales_Vargas.jpg';
    const currentCouncilMember2 = 'https://res.cloudinary.com/glovooker/image/upload/v1734318011/students-site/VargasJaramilloJoseIgnacio.jpg';
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(50, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(51, 'heading_1') }
            </Typography>

            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'start',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    my: '4rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '4rem' } }>
                    <Box sx={ { width: { xs: '100%', lg: '40%' }, mb: '2rem' } }>
                        <img src={ currentCouncilMember1 } alt={ safeGetText(52, 'heading_3') } style={ { width: '12rem', height: '12rem', objectFit: 'cover', objectPosition: 'top', borderRadius: '10rem', maxWidth: '30rem' } } />
                    </Box>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        { safeGetText(52, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { color: 'text.main', fontSize: { xs: '1rem', sm: '1.5rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        { safeGetText(53, 'paragraph') }
                    </Typography>
                    <Typography variant="body1" sx={ { color: 'text.main', fontSize: { xs: '.8em' }, fontWeight: 400, maxWidth: '30rem', mt: '1rem' } }>
                        { safeGetText(54, 'paragraph') }
                    </Typography>
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '4rem' } }>
                    <Box sx={ { width: { xs: '100%', lg: '40%' }, mb: '2rem' } }>
                        <img src={ currentCouncilMember2 } alt={ safeGetText(52, 'heading_3') } style={ { width: '12rem', height: '12rem', objectFit: 'cover', objectPosition: 'top', borderRadius: '10rem', maxWidth: '30rem' } } />
                    </Box>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        { safeGetText(55, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { color: 'text.main', fontSize: { xs: '1rem', sm: '1.5rem' }, fontWeight: 600, maxWidth: '35rem' } }>
                        { safeGetText(56, 'paragraph') }
                    </Typography>
                    <Typography variant="body1" sx={ { color: 'text.main', fontSize: { xs: '.8em' }, fontWeight: 400, maxWidth: '30rem', mt: '1rem' } }>
                        { safeGetText(57, 'paragraph') }
                    </Typography>
                </Box>
            </Box>
        </Box >
    );
};

export default CurrentCouncilSection;
