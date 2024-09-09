import React from 'react';
import AssistanceSection from './sections/AssistanceSection';
import SuggestionsSection from './sections/SuggestionsSection';
import { getPageContent, getSectionContent } from '@/lib/notionClient';

export default function SupportPage ({ supportContent }: any) {
    return (
        <>
            <AssistanceSection content={ supportContent } />
            <SuggestionsSection content={ supportContent } />
        </>
    );
};

export async function getServerSideProps () {
    try {
        // Fetch the metadata to get the page ID
        const pageMetadata = await getSectionContent('526df7dc8ff943aeb550d024010f6be5', {
            property: "Title",
            rich_text: {
                contains: "Soporte",
            },
        });

        if (!pageMetadata || pageMetadata.length === 0) {
            return {
                notFound: true,
            };
        }

        // Fetch all content blocks from the page
        const supportContentBlocks = await getPageContent(pageMetadata[0].id);

        return {
            props: {
                supportContent: supportContentBlocks,
            },
        };
    } catch (error) {
        console.error('Failed to fetch support page content:', error);
        return {
            props: {
                supportContent: null,
            },
        };
    }
}


