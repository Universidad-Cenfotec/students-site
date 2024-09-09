import React from 'react';
import { SectionProps } from '@/types/notionTypes';
import { Box, Button, Typography } from '@mui/material';

const AssistanceSection: React.FC<SectionProps> = ({ content }) => {

    const assistanceGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722973898/students-site/assitance-graphic.png';
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
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
                    <img src={ assistanceGraphic } alt="Jobs Graphic" style={ { width: '90%' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '45%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(0, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(1, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { maxWidth: '80%', mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(2, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(3, 'paragraph') }</Box>{ safeGetText(4, 'paragraph') }
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://www.google.com/url?q=https%3A%2F%2Fdesk.zoho.com%2Fportal%2Fcenfotec868%2Fes%2Fsignin&sa=D&sntz=1&usg=AOvVaw1K-vm-FqVyOLRGMsxgG1Tu'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                        } }

                    >
                        { safeGetText(5, 'paragraph') }
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AssistanceSection;
