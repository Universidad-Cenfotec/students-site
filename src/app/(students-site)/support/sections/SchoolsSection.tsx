import { SectionProps } from '@/types/notionTypes';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const SchoolsSection: React.FC<SectionProps> = ({ content }) => {
    const safeGetText = (index: number, type: string) => {
        if (content && index < content.length && content[index][type]) {
            return content[index][type].rich_text[0]?.plain_text || 'Loading...';
        }
        return 'Loading...';
    };

    const logos = [
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Cybersecurity-Color.png',
            heading: safeGetText(9, 'heading_3'),
            email: safeGetText(10, 'paragraph'),
            director: safeGetText(11, 'paragraph'),
            assistant: safeGetText(12, 'paragraph'),
            phone: safeGetText(13, 'paragraph'),
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Intelligent-Systems-Color.png',
            heading: safeGetText(14, 'heading_3'),
            email: safeGetText(15, 'paragraph'),
            director: safeGetText(16, 'paragraph'),
            assistant: safeGetText(17, 'paragraph'),
            phone: safeGetText(18, 'paragraph'),
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327319/students-site/Information-Systems-Color.png',
            heading: safeGetText(19, 'heading_3'),
            email: safeGetText(20, 'paragraph'),
            director: safeGetText(21, 'paragraph'),
            assistant: safeGetText(22, 'paragraph'),
            phone: safeGetText(23, 'paragraph'),
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Information-Technology-Color.png',
            heading: safeGetText(24, 'heading_3'),
            email: safeGetText(25, 'paragraph'),
            director: safeGetText(26, 'paragraph'),
            assistant: safeGetText(27, 'paragraph'),
            phone: safeGetText(28, 'paragraph'),
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Software-Engineering-Color.png',
            heading: safeGetText(29, 'heading_3'),
            email: safeGetText(30, 'paragraph'),
            director: safeGetText(31, 'paragraph'),
            assistant: safeGetText(32, 'paragraph'),
            phone: safeGetText(33, 'paragraph'),
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Computing-Fundamentals-Color.png',
            heading: safeGetText(34, 'heading_3'),
            email: safeGetText(35, 'paragraph'),
            director: safeGetText(36, 'paragraph'),
            assistant: safeGetText(37, 'paragraph'),
            phone: safeGetText(38, 'paragraph'),
        },
    ];

    return (
        <Box sx={ { width: '100%', textAlign: 'center', my: '8rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography
                variant="h4"
                sx={ {
                    mx: 'auto',
                    my: '0.5rem',
                    textAlign: { xs: 'center', md: 'left' },
                    fontSize: { xs: '1rem', sm: '1.125rem' },
                    fontWeight: 600,
                    letterSpacing: '0.0625rem',
                } }
            >
                { safeGetText(7, 'heading_3') }
            </Typography>
            <Typography
                variant="h2"
                sx={ {
                    mx: 'auto',
                    mb: '4rem',
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'primary.main',
                    fontSize: { xs: '2rem', sm: '3rem' },
                    fontWeight: 600,
                } }
            >
                { safeGetText(8, 'heading_1') }
            </Typography>

            <Grid container spacing={ 4 }>
                { logos.map((logo, index) => (
                    <Grid item xs={ 12 } md={ 6 } key={ index }>
                        <Box
                            sx={ {
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            } }
                        >
                            <Box sx={ { width: '35%', textAlign: 'center', mr: '2rem' } }>
                                <img src={ logo.src } alt={ logo.heading } style={ { width: '100%' } } />
                            </Box>
                            <Box sx={ { width: '80%', textAlign: 'left', pl: 2 } }>
                                <Typography variant="h3" sx={ { color: 'secondary.main', fontSize: '1.5rem', fontWeight: 600 } }>
                                    { logo.heading }
                                </Typography>
                                <Typography variant="body1" sx={ { my: 1 } }>
                                    <strong>Correo:</strong> { logo.email }
                                </Typography>
                                <Typography variant="body1" sx={ { my: 1 } }>
                                    <strong>Director:</strong> { logo.director }
                                </Typography>
                                <Typography variant="body1" sx={ { my: 1 } }>
                                    <strong>Asistente:</strong> { logo.assistant }
                                </Typography>
                                <Typography variant="body1" sx={ { my: 1 } }>
                                    <strong>Teléfono:</strong> { logo.phone }
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                )) }
            </Grid>
        </Box>
    );
};

export default SchoolsSection;
