import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { buildConfig } from 'payload';

// Import collections
import Users from './collections/users';
import Blogs from './collections/blogs';
import Media from './collections/media';

export default buildConfig({
    editor: lexicalEditor(),
    collections: [Users, Blogs, Media],
    admin: {
        user: "users",
    },
    secret: process.env.PAYLOAD_SECRET || '',
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    sharp,
});
