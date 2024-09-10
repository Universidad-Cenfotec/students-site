import { useEffect, useState } from 'react';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import { HeroBackground } from '@/components/Landing/HeroSection/components';
import { SectionProps } from '@/types/notionTypes';

const HeroSection: React.FC<SectionProps> = ({ content }) => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

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
                        { safeGetText(0, 'heading_2') } <Box component="span" sx={ { color: 'primary.main', fontSize: { xs: '4.75rem', sm: '6.25rem', md: '7.5rem', lg: '7.9375rem' }, lineHeight: 1 } }>{ safeGetText(1, 'heading_1') }</Box>
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text"
                        paragraph
                        sx={ { textAlign: { xs: 'center', lg: 'left' }, width: { md: '100%', lg: '75%' }, mt: '1rem', } }
                    >
                        { safeGetText(2, 'paragraph') } <Box component="span" sx={ { color: 'primary.main', fontFamily: '"DIN Alternate", sans-serif' } }>{ safeGetText(3, 'paragraph') }</Box>{ safeGetText(4, 'paragraph') }
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
                            { safeGetText(5, 'paragraph') }
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
