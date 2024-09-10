import React from 'react';
import { SectionProps } from '@/types/notionTypes';
import { Box, Typography } from '@mui/material';

const SuggestionsSection: React.FC<SectionProps> = ({ content }) => {
    const suggestionsGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722974184/students-site/suggestions-graphic.png';
    const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfRb3A782bjkJr0ZJiuR_E1LXemMcmM6JPJnc7XJ_yYF1i2xQ/viewform?embedded=true';

    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(7, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(8, 'heading_1') }
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
                        { safeGetText(9, 'paragraph') }
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(10, 'paragraph') }</Box>
                        <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(11, 'paragraph') }</Box>
                        { safeGetText(12, 'paragraph') }
                    </Typography>
                    <iframe src={ formUrl } width="100%" height="500" frameBorder="0" marginHeight={ 0 } marginWidth={ 0 }>Loading…</iframe>
                </Box>
            </Box>
        </Box>
    );
};

export default SuggestionsSection;
