import type { CollectionConfig } from 'payload';

const Media: CollectionConfig = {
    slug: 'media',
    labels: { singular: 'Media', plural: 'Media' },
    upload: {
        staticDir: 'media',
        mimeTypes: ['image/*'],
    },
    admin: {
        useAsTitle: 'filename',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            label: 'Alt Text',
            required: false,
        },
    ],
};

export default Media;
