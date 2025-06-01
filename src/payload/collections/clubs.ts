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
        // New fields for person in charge
        {
            name: 'hasPersonInCharge',
            type: 'checkbox',
            label: 'Does this club have a person in charge?',
            defaultValue: false,
            admin: {
                position: 'sidebar',
                description: 'Check if you want to display a contact person for this club',
            },
        },
        {
            name: 'personInCharge',
            type: 'group',
            admin: {
                condition: (data) => Boolean(data?.hasPersonInCharge),
                description: 'Information about the person in charge of this club',
            },
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    label: 'Name',
                    required: true,
                },
                {
                    name: 'title',
                    type: 'text',
                    label: 'Title/Position',
                    required: false,
                },
                {
                    name: 'email',
                    type: 'email',
                    label: 'Email',
                    required: false,
                },
                {
                    name: 'photo',
                    type: 'upload',
                    relationTo: 'media',
                    required: false,
                },
                {
                    name: 'bio',
                    type: 'textarea',
                    label: 'Short Bio',
                    required: false,
                },
            ],
        },
        // New fields for gallery
        {
            name: 'hasGallery',
            type: 'checkbox',
            label: 'Does this club have a photo gallery?',
            defaultValue: false,
            admin: {
                position: 'sidebar',
                description: 'Check if you want to display a gallery for this club',
            },
        },
        {
            name: 'gallery',
            type: 'array',
            label: 'Photo Gallery',
            admin: {
                condition: (data) => Boolean(data?.hasGallery),
                description: 'Add photos to the club gallery',
            },
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'caption',
                    type: 'text',
                    label: 'Caption',
                    required: false,
                },
            ],
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
