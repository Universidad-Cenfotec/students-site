import React from 'react';
import BlogSection from './sections/BlogSection';
import JobsSection from './sections/JobsSection';
import LatestSection from './sections/LatestSection';
import { getAllEntries, getPageContent, getSectionContent } from '@/lib/notionClient';

export default function CommunityPage ({ communityContent, blogPosts }: any) {
    return (
        <>
            <LatestSection content={ communityContent } />
            <JobsSection content={ communityContent } />
            <BlogSection content={ communityContent } blogPosts={ blogPosts } />
        </>
    );
};

export async function getServerSideProps () {
    try {
        // Fetch the metadata to get the page ID
        const communityMetadata = await getSectionContent('526df7dc8ff943aeb550d024010f6be5', {
            property: "Title",
            rich_text: {
                contains: "Comunidad",
            },
        });

        const communityContentBlocks = communityMetadata && communityMetadata.length > 0
            ? await getPageContent(communityMetadata[0].id)
            : [];

        const blogPosts = await getAllEntries('12669888b29680908635ce2c6cec8580');

        return {
            props: {
                communityContent: communityContentBlocks,
                blogPosts: blogPosts,
            },
        };
    } catch (error) {
        console.error('Failed to fetch page content:', error);
        return {
            props: {
                communityContent: null,
                blogPosts: [],
            },
        };
    }
}
