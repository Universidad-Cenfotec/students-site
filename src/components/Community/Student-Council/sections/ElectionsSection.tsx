import { Box, Button, Typography } from '@mui/material';
import { SectionProps } from '@/types/notionTypes';

const ElectionsSection: React.FC<SectionProps> = ({ content }) => {

    const electionsFlyer = 'https://res.cloudinary.com/glovooker/image/upload/v1722969249/students-site/elections-flyer.png';
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { safeGetText(35, 'heading_3') }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', mb: '4rem', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { safeGetText(36, 'heading_1') }
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    mx: 'auto',
                    mb: '6rem',
                } }
            >
                <Box sx={ { width: { xs: '100%', lg: '40%' }, mb: '2rem' } }>
                    <img src={ electionsFlyer } alt="Academic Calendar Graphic" style={ { width: '100%', maxWidth: '30rem' } } />
                </Box>
                <Box sx={ { width: { xs: '100%', lg: '55%' }, textAlign: 'left' } }>
                    <Typography variant="h3" sx={ { color: 'text.main', fontSize: { xs: '1.5rem', sm: '2rem' }, fontWeight: 600 } }>
                        { safeGetText(37, 'heading_3') }<Box component="span" sx={ { color: 'primary.main', fontWeight: 'medium', lineHeight: 1 } }>{ safeGetText(38, 'heading_3') }</Box>
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, my: '2rem', lineHeight: 2 } }>
                        { safeGetText(39, 'paragraph') }<Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(40, 'paragraph') }</Box><Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(41, 'paragraph') }</Box>{ safeGetText(42, 'paragraph') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, mt: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(43, 'paragraph') }</Box>{ safeGetText(44, 'paragraph') }
                    </Typography>
                    <Typography variant="body1" sx={ { mx: { xs: 'auto', lg: 0 }, mb: '2rem', lineHeight: 2 } }>
                        <Box component="span" sx={ { color: 'primary.main', lineHeight: 1 } }>{ safeGetText(45, 'paragraph') }</Box>{ safeGetText(46, 'paragraph') }
                    </Typography>
                    <Box sx={ { display: 'flex', flexDirection: { xs: 'column', xl: 'row' }, alignItems: { xs: 'center' } } }>
                        <Button
                            variant='contained'
                            color="primary"
                            size="large"
                            href='https://forms.zoho.com/pbrenes/form/Formulariodeinscripcindecandidatosparaformarparted/formperma/6A2nIg0hvdOjOTxfflMD-wS5lRyIu1d3Y7KAwp3nORU?zf_lang=es'
                            target='_blank'
                            sx={ {
                                fontSize: { xs: '1rem', sm: '1.5rem' },
                                fontWeight: 600,
                                px: { xs: '2rem', sm: '3rem' },
                                mr: '2rem',
                                mb: { xs: '1rem', xl: '0' }
                            } }

                        >
                            { safeGetText(47, 'paragraph') }
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            href='https://drive.google.com/file/d/1D8E7z6_j-IfVV8VPhWkNdtlPJ6VYDmaM/view'
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
                            { safeGetText(48, 'paragraph') }
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ElectionsSection;
