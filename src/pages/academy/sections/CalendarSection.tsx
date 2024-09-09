import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { AwardIcon, FileIcon, MonitorIcon } from '@/components/Academy/CalendarSection/components';
import { SectionProps } from '@/types/notionTypes';

const CalendarSection: React.FC<SectionProps> = ({ content }) => {

    const academicCalendarGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722969249/students-site/academic-calendar-graphic.png';
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(42, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(43, 'heading_1') }
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
                <Box sx={ { width: { xs: '100%', lg: '50%' } } }>
                    <img src={ academicCalendarGraphic } alt="Academic Calendar Graphic" style={ { width: '100%' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '40%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(44, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(45, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(46, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(47, 'paragraph') }</Box>{ safeGetText(48, 'paragraph') }
                    </Typography>
                    <Button
                        variant='contained'
                        color="primary"
                        size="large"
                        href='https://drive.google.com/file/d/1c2j1q91GQ-EsOAGxMsUEABS6P-0XwHtb/view'
                        target='_blank'
                        sx={ {
                            fontSize: { xs: '1rem', sm: '1.5rem' },
                            fontWeight: 600,
                            px: { xs: '2rem', sm: '3rem' },
                            mr: '2rem',
                            mb: '1rem'
                        } }

                    >
                        { safeGetText(49, 'paragraph') }
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://drive.google.com/file/d/1gHvBLD2Y_fAu7EvUZugyKGesDtFXmLVt/view'
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
                        { safeGetText(50, 'paragraph') }
                    </Button>
                </Box>
            </Box>

            <Grid container sx={ { textAlign: 'center', mb: '2rem' } } spacing={ 4 }>
                {/* Feature 1 */ }
                <Grid item xs={ 12 } md={ 4 }>
                    <Card sx={ { maxWidth: '100%', mx: 'auto', boxShadow: 0 } }>
                        <CardContent>
                            <Button
                                variant='contained'
                                color='primary'
                                href='https://drive.google.com/file/d/1QNx6Y_BXkMUj5sDilTqwOH9-YfJ7a7gD/view?usp=sharing'
                                target='_blank'
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
                                <FileIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '12.5rem', mx: 'auto', my: '1.5rem' } }>
                                { safeGetText(51, 'heading_3') }
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
                                href='https://drive.google.com/file/d/1oN7w7m5o_zNGIf2L3ySEY1oTleDVuQAm/view?usp=sharing'
                                target='_blank'
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
                                <AwardIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '15.5rem', mx: 'auto', my: '1.5rem' } }>
                                { safeGetText(52, 'heading_3') }
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
                                href='https://drive.google.com/file/d/1uQyrBTEHeipNHPt8ja1MaKXXxSY1kNuG/view?usp=sharing'
                                target='_blank'
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
                                <MonitorIcon style={ { fontSize: '2.8125rem', color: 'white' } } />
                            </Button>
                            <Typography variant="h3" sx={ { fontSize: '1.5rem', fontWeight: 600, color: 'secondary.main', maxWidth: '18.5rem', mx: 'auto', my: '1.25rem' } }>
                                { safeGetText(53, 'heading_3') }
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default CalendarSection;
