import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { LifeBuoyIcon, MapIcon, BriefcaseIcon } from '@/components/About/StudentAffairsSection/components';
import { SectionProps } from '@/types/notionTypes';

const StudentAffairsSection: React.FC<SectionProps> = ({ content }) => {

    const logoUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1719730516/students-site/student-affairs-lg.png';
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '4rem', mx: 'autos', px: { xs: '2rem', md: '6rem' } } }>
            <Grid container sx={ { width: '100%', my: '4rem', mx: 'auto', flexDirection: { xs: 'column-reverse', lg: 'row' } } }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(0, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(1, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        { safeGetText(2, 'paragraph') } <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ safeGetText(3, 'paragraph') }</Box> { safeGetText(4, 'paragraph') }
                    </Typography>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { mb: { xs: '2rem', lg: 0 } } }>
                    <img src={ logoUrl } alt="Student Affairs Logo" width={ '100%' } style={ { maxWidth: '30rem' } } />
                </Grid>
            </Grid>
            <Grid container sx={ { textAlign: 'center', my: '2rem' } } spacing={ 4 }>
                {/* Feature 1 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Box
                                sx={ {
                                    backgroundColor: 'primary.main',
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <BriefcaseIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Box>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '9.5rem', mx: 'auto', my: '1.5rem' } }>
                                { safeGetText(5, 'heading_3') }
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '17rem', mx: 'auto' } }>
                                { safeGetText(6, 'paragraph') }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 2 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Box
                                sx={ {
                                    backgroundColor: 'primary.main',
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <LifeBuoyIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Box>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '13.5rem', mx: 'auto', my: '1.5rem' } }>
                                { safeGetText(7, 'heading_3') }
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '16rem', mx: 'auto' } }>
                                { safeGetText(8, 'paragraph') }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Feature 3 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Box
                                sx={ {
                                    backgroundColor: 'primary.main',
                                    width: '6.375rem',
                                    height: '6.375rem',
                                    borderRadius: '1.625rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mx: 'auto',
                                } }
                            >
                                <MapIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Box>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.25rem' } }>
                                { safeGetText(9, 'heading_3') }
                            </Typography>
                            <Typography variant="body1" sx={ { lineHeight: 2, maxWidth: '17rem', mx: 'auto' } }>
                                { safeGetText(10, 'paragraph') }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default StudentAffairsSection;
