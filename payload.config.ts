import sharp from 'sharp';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { buildConfig } from 'payload';

// Import collections
import Users from '@/payload/collections/users';  // ✅ Ensure Users is imported
import Blogs from '@/payload/collections/blogs';
import Media from '@/payload/collections/media';

export default buildConfig({
    editor: lexicalEditor(),
    collections: [Users, Blogs, Media],  // ✅ Ensure Users is included
    admin: {
        user: "users",
    },
    secret: process.env.PAYLOAD_SECRET || '',
    db: mongooseAdapter({
        url: process.env.DATABASE_URI || '',
    }),
    sharp,
});
