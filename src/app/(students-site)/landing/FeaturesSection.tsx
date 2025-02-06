import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import { CommentIcon, HeartIcon, SearchIcon } from '@/components/Landing/FeaturesSection/Icons';
import { SectionProps } from '@/types/notionTypes';

const FeaturesSection: React.FC<SectionProps> = ({ content }) => {

    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box id="features" sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, mb: '10rem', px: '1rem' } }>
            <Typography variant="h4" sx={ { mx: { xs: 'auto', md: 12 }, my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(7, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: { xs: 'auto', md: 12 }, textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2.5rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(8, 'heading_1') }
            </Typography>
            <Grid container sx={ { textAlign: 'center', my: '2rem' } } spacing={ 4 }>
                {/* Feature 1 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='/academy'
                                sx={ {
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <SearchIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.5rem' } }>
                                { safeGetText(9, 'heading_3') }
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '16rem', mx: 'auto' } }>
                                { safeGetText(10, 'paragraph') }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 2 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='/community'
                                sx={ {
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <CommentIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.5rem' } }>
                                { safeGetText(11, 'heading_3') }
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '16rem', mx: 'auto' } }>
                                { safeGetText(12, 'paragraph') }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 3 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='/about'
                                sx={ {
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <HeartIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.25rem' } }>
                                { safeGetText(13, 'heading_3') }
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '16rem', mx: 'auto' } }>
                                { safeGetText(14, 'paragraph') }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default FeaturesSection;
