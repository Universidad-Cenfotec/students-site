import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { buildConfig } from 'payload';
import { cloudinaryStorage } from 'payload-cloudinary';

import Users from '@/payload/collections/users';
import Blogs from '@/payload/collections/blogs';
import Media from '@/payload/collections/media';
import Clubs from '@/payload/collections/clubs';

export default buildConfig({
    editor: lexicalEditor(),
    collections: [Users, Blogs, Media, Clubs],
    admin: {
        user: 'users',
    },
    plugins: [
        cloudinaryStorage({
            config: {
                cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
                api_key: process.env.CLOUDINARY_API_KEY || '',
                api_secret: process.env.CLOUDINARY_API_SECRET || '',
            },
            collections: {
                media: true,
            },
            folder: 'students-site',
            disableLocalStorage: true,
            enabled: true,
        }),
    ],
    secret: process.env.PAYLOAD_SECRET || '',
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    sharp,
});
