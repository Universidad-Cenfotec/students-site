import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { BlogGraphic, StudentKitGraphic } from '@/components/Landing/GuidanceSection/components';
import { SectionProps } from '@/types/notionTypes';

const GuidanceSection: React.FC<SectionProps> = ({ content }) => {

    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(16, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(17, 'heading_1') }
            </Typography>
            <Grid container sx={ { my: '2rem', px: { xs: '2rem', lg: 0 } } } spacing={ 4 }>
                <Grid item xs={ 12 } lg={ 6 }>
                    <StudentKitGraphic sx={ { width: { xs: '100%', lg: '85%' }, height: 'auto' } } />
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(18, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(19, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        { safeGetText(20, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ safeGetText(21, 'paragraph') }</Box>{ safeGetText(22, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ safeGetText(23, 'paragraph') }</Box>{ safeGetText(24, 'paragraph') }
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://ucenfotec-students-kit.notion.site/Students-Kit-2a5a1bfb7f4e4bc2a57d732078c5ec36?pvs=73'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            border: 3, '&:hover': {
                                border: 3,
                            }
                        } }
                    >
                        { safeGetText(25, 'paragraph') }
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={ { my: '4rem', px: { xs: '2rem', lg: 0 }, flexDirection: { xs: 'column-reverse', lg: 'row' } } } spacing={ 4 }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(26, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(27, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        { safeGetText(28, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ safeGetText(29, 'paragraph') }</Box>{ safeGetText(30, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ safeGetText(31, 'paragraph') }</Box>{ safeGetText(32, 'paragraph') }
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            border: 3, '&:hover': {
                                border: 3,
                            }
                        } }
                        disabled
                    >
                        {/* { safeGetText(33, 'paragraph') } */ }
                        Próximamente...
                    </Button>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 }>
                    <BlogGraphic sx={ { width: { xs: '100%', lg: '85%' }, height: 'auto' } } />
                </Grid>
            </Grid>
        </Box>
    );
};

export default GuidanceSection;
