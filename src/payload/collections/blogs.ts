import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

const Blogs: CollectionConfig = {
    slug: 'blogs',
    labels: { singular: 'Blog Post', plural: 'Blog Posts' },
    admin: { useAsTitle: 'title' },
    access: { read: () => true },
    fields: [
        {
            name: 'blogId',
            type: 'text',
            unique: true,
            required: true,
            admin: { readOnly: true },
            hooks: {
                beforeChange: [({ value }) => value || crypto.randomUUID()],
            },
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
            required: true,
            maxLength: 300,
            admin: {
                position: 'sidebar',
                description: 'Short summary (max 300 characters).',
            },
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor(),
            required: true,
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'draft',
            options: [
                { label: 'Draft', value: 'draft' },
                { label: 'Published', value: 'published' },
                { label: 'Archived', value: 'archived' },
            ],
            admin: { position: 'sidebar' },
        },
        {
            name: 'publishedDate',
            type: 'date',
            admin: {
                readOnly: true,
                position: 'sidebar',
                date: { pickerAppearance: 'dayOnly' },
            },
            hooks: {
                beforeChange: [
                    ({ value, siblingData }) => {
                        if (siblingData.status === 'published') {
                            return new Date().toISOString();
                        }
                        return value;
                    },
                ],
            },
        },
    ],
};

export default Blogs;
