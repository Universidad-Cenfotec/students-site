import { useEffect, useState } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { HeroBackground } from '@/components/Landing/HeroSection/components';

const HeroSection: React.FC<any> = ({ content }) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    console.log(content);

    const [rightStyle, setRightStyle] = useState<string | number>(0); // Initialize with a default value.

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setRightStyle(window.innerWidth > 1600 ? 0 : 'calc(40% - 37.8rem)');
            }
        };

        handleResize(); // Initial check client-side
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <Box
                sx={ {
                    position: 'relative',
                    pt: '1rem',
                    pb: '1rem',
                    overflow: 'hidden',
                    height: '100vh',
                    width: '100%',
                } }
            >
                <Box
                    sx={ {
                        paddingX: { xs: '0', sm: '0', md: '0', lg: '5rem', xl: '6rem' },
                        paddingY: { xs: '15rem', sm: '15rem', md: '7.5rem' },
                        margin: { xs: '0 auto', sm: '0 auto', md: '0 auto', lg: '0', xl: '0' },
                        maxWidth: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '55%' }
                    } }
                >
                    <Typography
                        variant="h1"
                        color="secondary"
                        fontSize={ { xs: '1.25rem', sm: '2rem', md: '2.75rem', lg: '4.75rem' } }
                        lineHeight={ 0.9 }
                        gutterBottom
                        width="85%"
                        sx={ { textAlign: { xs: 'center', lg: 'left' }, margin: { xs: '0 auto', sm: '0 auto', md: '0 auto', lg: '0', xl: '0' } } }
                    >
                        { content[0].heading_2.rich_text[0].plain_text } <Box component="span" sx={ { color: 'primary.main', fontSize: { xs: '4.75rem', sm: '6.25rem', md: '7.5rem', lg: '7.9375rem' }, lineHeight: 1 } }>{ content[1].heading_1.rich_text[0].plain_text }</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text"
                        fontSize={ { sm: '1rem' } }
                        paragraph
                        sx={ { textAlign: { xs: 'center', lg: 'left' }, width: { md: '100%', lg: '75%' }, mt: '1rem', } }
                    >
                        { content[2].paragraph.rich_text[0].plain_text } <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ content[3].paragraph.rich_text[0].plain_text }</Box>{ content[4].paragraph.rich_text[0].plain_text }
                    </Typography>
                    <Box
                        sx={ {
                            mt: '2rem',
                            display: 'flex',
                            justifyContent: 'left'
                        } }
                    >
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            href='#features'
                            sx={ { fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem', lg: '1.5rem' }, fontWeight: 600, margin: { xs: '0 auto', sm: '0 auto', md: '0 auto', lg: '0', xl: '0' }, } }
                        >
                            { content[5].paragraph.rich_text[0].plain_text }
                        </Button>
                    </Box>
                </Box>
            </Box>
            { isLargeScreen && (
                <HeroBackground
                    style={ {
                        position: 'absolute',
                        top: 0,
                        right: rightStyle,
                        maxHeight: '90%',
                    } }
                />
            ) }
        </>
    );
};

export default HeroSection;
