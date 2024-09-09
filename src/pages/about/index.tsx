import React from 'react';
import StudentAffairsSection from './sections/StudentAffairsSection';
import DiversityStatementSection from './sections/DiversityStatementSection';
import { getPageContent, getSectionContent } from '@/lib/notionClient';

export default function AboutPage ({ aboutContent }: any) {
    return (
        <>
            <StudentAffairsSection content={ aboutContent } />
            <DiversityStatementSection content={ aboutContent } />
        </>
    );
};

export async function getServerSideProps () {
    try {
        // Fetch the metadata to get the page ID
        const pageMetadata = await getSectionContent('526df7dc8ff943aeb550d024010f6be5', {
            property: "Title",
            rich_text: {
                contains: "Sobre Nosotros",
            },
        });

        if (!pageMetadata || pageMetadata.length === 0) {
            return {
                notFound: true,
            };
        }

        // Fetch all content blocks from the page
        const aboutContentBlocks = await getPageContent(pageMetadata[0].id);

        return {
            props: {
                aboutContent: aboutContentBlocks,
            },
        };
    } catch (error) {
        console.error('Failed to fetch about page content:', error);
        return {
            props: {
                aboutContent: null,
            },
        };
    }
}
