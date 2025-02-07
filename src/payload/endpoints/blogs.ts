import type { Endpoint } from 'payload';
import config from '../config';

const blogPostEndpoint: Endpoint = {
    path: '/blogs',
    method: 'post',
    handler: async (req, res) => {
        try {
            const payload = await import('payload');
            const blogPost = await payload.default.create({
                collection: 'blogs',
                data: req.body,
            });
            res.status(201).json(blogPost);
        } catch (error) {
            console.error('Error creating blog post:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

export default blogPostEndpoint;
