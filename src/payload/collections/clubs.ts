import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';


const Clubs: CollectionConfig = {
    slug: 'clubs',
    labels: {
        singular: 'Club',
        plural: 'Clubs',
    },
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'clubId',
            type: 'text',
            unique: true,
            required: true,
            admin: { readOnly: true },
            hooks: {
                beforeChange: [
                    ({ value }) => value || crypto.randomUUID(),
                ],
            },
        },
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            type: 'text',
            maxLength: 300,
            required: true,
            admin: {
                position: 'sidebar',
                description: 'Brief summary (max 300 characters).',
            },
        },
        {
            name: 'logo',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'banner',
            type: 'upload',
            relationTo: 'media',
            required: false,
        },
        {
            name: 'content',
            type: 'richText',
            editor: lexicalEditor(),
            required: false,
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'active',
            options: [
                { label: 'Active', value: 'active' },
                { label: 'Inactive', value: 'inactive' },
            ],
            admin: { position: 'sidebar' },
        },
    ],
};

export default Clubs;
