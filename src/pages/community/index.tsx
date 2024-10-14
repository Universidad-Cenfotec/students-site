import React from 'react';
import BlogSection from './sections/BlogSection';
import JobsSection from './sections/JobsSection';
import LatestSection from './sections/LatestSection';
import { getPageContent, getSectionContent } from '@/lib/notionClient';

export default function CommunityPage ({ communityContent }: any) {
    return (
        <>
            <LatestSection content={ communityContent } />
            <JobsSection content={ communityContent } />
            {/* <BlogSection content={ communityContent } /> */ }
        </>
    );
};

export async function getServerSideProps () {
    try {
        // Fetch the metadata to get the page ID
        const pageMetadata = await getSectionContent('526df7dc8ff943aeb550d024010f6be5', {
            property: "Title",
            rich_text: {
                contains: "Comunidad",
            },
        });

        if (!pageMetadata || pageMetadata.length === 0) {
            return {
                notFound: true,
            };
        }

        // Fetch all content blocks from the page
        const communityContentBlocks = await getPageContent(pageMetadata[0].id);

        return {
            props: {
                communityContent: communityContentBlocks,
            },
        };
    } catch (error) {
        console.error('Failed to fetch community page content:', error);
        return {
            props: {
                communityContent: null,
            },
        };
    }
}

