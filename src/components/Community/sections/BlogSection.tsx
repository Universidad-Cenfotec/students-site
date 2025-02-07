import React from 'react';
import { Box, Typography } from '@mui/material';
import { BlogCard } from '../components/BlogCard';
import Link from 'next/link';

const BlogSection: React.FC = () => {

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Comunidad
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Descubre nuestro contenido
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    flexWrap: 'wrap',
                    gap: '4rem',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    my: '4rem',
                    maxWidth: '100%'
                } }
            >
                {/* { blogPosts?.map((blog, index) => {

                    blog.id = blog.properties.ID.unique_id.number;
                    blog.title = blog.properties.Title.title[0].plain_text;
                    blog.description = blog.properties.Description.rich_text[0].plain_text;
                    blog.imageUrl = blog.properties.Image.files[0].file.url;

                    return (
                        <Link key={ 'bp' + blog.id } href={ `/community/blog/${ blog.id }` } style={ { textDecoration: 'none' } } passHref>
                            <BlogCard
                                title={ blog.title }
                                description={ blog.description }
                                imageUrl={ blog.imageUrl }
                            />
                        </Link>
                    );
                })
                } */}
            </Box>
        </Box>
    );
};

export default BlogSection;
