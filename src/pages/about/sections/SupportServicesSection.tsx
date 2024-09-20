import { Box, Button, Card, CardContent, Grid, List, ListItem, Typography } from '@mui/material';
import { LifeBuoyIcon, MapIcon, BriefcaseIcon } from '@/components/About/StudentAffairsSection/components';
import { SectionProps } from '@/types/notionTypes';

const SupportServicesSection: React.FC<SectionProps> = ({ content }) => {

    const sexualHarassment1 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679902/students-site/sexual-harassment-1.png';
    const sexualHarassment2 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-2.jpg';
    const sexualHarassment3 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-3.jpg';
    const sexualHarassment4 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-4.jpg';
    const sexualHarassment5 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-5.jpg';

    const caic1 = 'https://res.cloudinary.com/glovooker/image/upload/v1726720206/students-site/caic-1.jpg';
    const studyClub1 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/study-club-1.jpg';

    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '4rem', mx: 'autos', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(20, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(21, 'heading_1') }
            </Typography>
            <Grid container sx={ { width: { xs: '100%', lg: '70%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column-reverse', lg: 'row-reverse' } } }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(22, 'heading_3') }
                    </Typography>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(23, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        { safeGetText(24, 'paragraph') } <Box component="span" sx={ { color: 'primary.main', fontWeight: 450 } }>{ safeGetText(25, 'paragraph') } </Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(26, 'paragraph') }</Box> { safeGetText(27, 'paragraph') }
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://drive.google.com/file/d/1ySZKwbAuQ4In1e7R8eUxAKDmmYPq5nkh/view'
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
                        { safeGetText(28, 'paragraph') }
                    </Button>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { mb: { xs: '2rem', lg: 0 } } }>
                    <img src={ sexualHarassment1 } alt="Sexual Harassment Campaign Graphic 1" width={ '100%' } style={ { maxWidth: '30rem' } } />
                </Grid>
            </Grid>
            <Grid container sx={ { width: { xs: '100%', lg: '70%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column', lg: 'row' } } }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center', lg: 'left' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(29, 'heading_3') }
                    </Typography>
                    <Box>
                        <List sx={ { listStyleType: 'decimal', marginLeft: 4 } }>
                            <ListItem sx={ { display: "list-item", mx: { xs: 'auto', lg: 0 }, mt: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                                { safeGetText(30, 'numbered_list_item') }
                            </ListItem>
                            <ListItem sx={ { display: "list-item", mx: { xs: 'auto', lg: 0 }, lineHeight: 2, maxWidth: '36rem' } }>
                                { safeGetText(31, 'numbered_list_item') }
                            </ListItem>
                            <ListItem sx={ { display: "list-item", mx: { xs: 'auto', lg: 0 }, mb: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                                { safeGetText(32, 'numbered_list_item') }
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid item xs={ 12 } lg={ 6 } sx={ { mb: { xs: '2rem', lg: 0 } } }>
                    <img src={ sexualHarassment2 } alt="Sexual Harassment Campaign Graphic 2" width={ '100%' } style={ { maxWidth: '30rem' } } />
                </Grid>
            </Grid>
            <Grid container sx={ { width: { xs: '100%', xl: '70%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column' }, alignItems: 'center' } }>
                <Grid item xs={ 12 } lg={ 6 } sx={ { textAlign: { xs: 'center' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(33, 'heading_3') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '36rem' } }>
                        { safeGetText(34, 'paragraph') }
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://docs.google.com/presentation/d/1Nae4tDkDTnd-skxCQv6cV2CVNQPZVEs1/edit#slide=id.p1'
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
                        { safeGetText(35, 'paragraph') }
                    </Button>
                </Grid>
                <Grid item sx={ { width: '100%', mt: { xs: '2rem' }, display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: { xs: 'column', lg: 'row' } } }>
                    <img src={ sexualHarassment3 } alt="Sexual Harassment Campaign Graphic 3" width={ '100%' } style={ { maxWidth: '20rem' } } />
                    <img src={ sexualHarassment4 } alt="Sexual Harassment Campaign Graphic 4" width={ '100%' } style={ { maxWidth: '20rem' } } />
                    <img src={ sexualHarassment5 } alt="Sexual Harassment Campaign Graphic 5" width={ '100%' } style={ { maxWidth: '20rem' } } />
                </Grid>
                <Grid item sx={ { textAlign: { xs: 'center' }, px: { xs: '0rem', lg: '3.5rem' } } }>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2, maxWidth: '50rem' } }>
                        { safeGetText(36, 'paragraph') }
                    </Typography>
                    <Button
                        variant="outlined"
                        color="secondary"
                        size="large"
                        href='https://forms.zohopublic.com/pbrenes/form/Formulariodedenunciaporacososexual/formperma/DxuvWLkNh89w4ijmj6XrTvLZD7JDDZLvTVrZg5CvRPw?zf_lang=es'
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
                        { safeGetText(37, 'paragraph') }
                    </Button>
                </Grid>
            </Grid>
            <Grid container sx={ { width: { xs: '100%', xl: '70%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column' }, alignItems: 'center' } }>
                <Grid container sx={ { width: { xs: '100%', lg: '100%' }, my: '4rem', mx: 'auto', flexDirection: { xs: 'column', xl: 'row' } } }>
                    <Grid item xs={ 12 } xl={ 6 } sx={ { mb: { xs: '4rem', xl: 0 }, textAlign: { xs: 'center', xl: 'left' }, px: { xs: '0rem', xl: '3.5rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
                        <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, mb: '1rem' } }>
                            { safeGetText(38, 'heading_3') }
                        </Typography>
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            href='https://forms.zohopublic.com/pbrenes/form/FormulariodesolicituddeapoyoseducativosCentrodeApo/formperma/wy922Tnm9sVL-eefC9q4XC3rIgzvfiRtaXAkHpDzU3I'
                            target='_blank'
                            sx={ {
                                fontSize: { xs: '1rem', sm: '1.5rem' },
                                fontWeight: 600,
                                px: { xs: '2rem', sm: '3rem' },
                                border: 3, '&:hover': {
                                    border: 3,
                                },
                                mb: '2rem'
                            } }

                        >
                            { safeGetText(39, 'paragraph') }
                        </Button>
                        <img src={ caic1 } alt="CAIC Flyer" width={ '100%' } style={ { maxWidth: '40rem' } } />
                    </Grid>
                    <Grid item xs={ 12 } xl={ 6 } sx={ { mb: { xs: '4rem', xl: 0 }, textAlign: { xs: 'center', xl: 'left' }, px: { xs: '0rem', xl: '3.5rem' }, display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
                        <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600, mb: '1rem' } }>
                            { safeGetText(40, 'heading_3') }
                        </Typography>
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            href='http://meet.google.com/pok-mrox-urm'
                            target='_blank'
                            sx={ {
                                fontSize: { xs: '1rem', sm: '1.5rem' },
                                fontWeight: 600,
                                px: { xs: '2rem', sm: '3rem' },
                                border: 3, '&:hover': {
                                    border: 3,
                                },
                                mb: '2rem'
                            } }

                        >
                            { safeGetText(41, 'paragraph') }
                        </Button>
                        <img src={ studyClub1 } alt="Study Club Flyer" width={ '100%' } style={ { maxWidth: '40rem' } } />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default SupportServicesSection;
