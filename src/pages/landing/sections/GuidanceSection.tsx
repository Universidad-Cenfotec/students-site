import { Box, Grid, Typography, Button } from '@mui/material';
import { BlogGraphic, StudentKitGraphic } from '@/components/Landing/GuidanceSection/components';
import React from 'react';

const GuidanceSection: React.FC<any> = ({ content }) => {
    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { content[16].heading_3.rich_text[0].plain_text }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { content[17].heading_1.rich_text[0].plain_text }
            </Typography>
            <Grid container sx={ { my: '2rem', px: { xs: '2rem', lg: 0 } } } spacing={ 4 }>
                <Grid item xs={ 12 } lg={ 6 }>
                    <StudentKitGraphic sx={ { width: { xs: '100%', lg: '85%' }, height: 'auto' } } />
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { content[18].heading_3.rich_text[0].plain_text }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { content[19].heading_3.rich_text[0].plain_text }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        { content[20].paragraph.rich_text[0].plain_text }<Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ content[21].paragraph.rich_text[0].plain_text }</Box>{ content[22].paragraph.rich_text[0].plain_text }<Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ content[23].paragraph.rich_text[0].plain_text }</Box>{ content[24].paragraph.rich_text[0].plain_text }
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
                    >
                        { content[25].paragraph.rich_text[0].plain_text }
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={ { my: '4rem', px: { xs: '2rem', lg: 0 }, flexDirection: { xs: 'column-reverse', lg: 'row' } } } spacing={ 4 }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '1rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { content[26].heading_3.rich_text[0].plain_text }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { content[27].heading_3.rich_text[0].plain_text }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        { content[28].paragraph.rich_text[0].plain_text }<Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ content[29].paragraph.rich_text[0].plain_text }</Box>{ content[30].paragraph.rich_text[0].plain_text }<Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ content[31].paragraph.rich_text[0].plain_text }</Box>{ content[32].paragraph.rich_text[0].plain_text }
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
                    >
                        { content[33].paragraph.rich_text[0].plain_text }
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
