import { getAllEntries, getPageContent } from '@/lib/notionClient';
import { Blog, BlogContent } from '@/types/notionTypes';
import { Box, Typography, Paper } from '@mui/material';

export default function BlogPost ({ blogPost }: Blog) {
    return (
        <Paper elevation={ 0 } sx={ { maxWidth: '1800px', mx: 'auto', p: '4rem', mt: '2rem', display: 'flex', flexDirection: 'row' } }>
            { blogPost?.imageUrl && (
                <Box
                    component="img"
                    src={ blogPost.imageUrl }
                    alt={ blogPost.title }
                    sx={ { width: '35%', height: 'auto', borderRadius: 2, mb: 4 } }
                />
            ) }
            <Box sx={ { ml: '4rem', maxWidth: '800px' } }>
                <Typography variant="h2" component="h1" gutterBottom sx={ { fontWeight: 'bold', mb: 3 } }>
                    { blogPost?.title || 'Blog Post' }
                </Typography>
                <Typography variant="body1" sx={ { lineHeight: 1.75, fontSize: '18px', color: 'text.primary' } }>
                    { blogPost?.content || 'Loading...' }
                </Typography>
            </Box>
        </Paper>
    );
}

export async function getServerSideProps (context: { params: { id: string; }; }) {
    const { id } = context.params;

    try {
        const allPosts = await getAllEntries('12669888b29680908635ce2c6cec8580');
        const post = allPosts.find(post => post.properties.ID.unique_id.number === parseInt(id));

        const blogPostContent: BlogContent = await getPageContent(post.id);

        let blogPost = {
            title: post.properties.Title.title[0].plain_text,
            content: blogPostContent[0].paragraph.rich_text[0].plain_text,
            imageUrl: post.properties.Image?.files[0]?.file.url,
        };

        return {
            props: {
                blogPost
            },
        };
    } catch (error) {
        console.error('Failed to fetch blog post content:', error);
        return {
            props: {
                blogPost: null,
            },
        };
    }
}
