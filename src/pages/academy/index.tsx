import React from 'react';
import EducationModelSection from './sections/EducationModelSection';
import PlatformsSection from './sections/PlatformsSection';
import GuidesSection from './sections/GuidesSection';
import CalendarSection from './sections/CalendarSection';
import { getPageContent, getSectionContent } from '@/lib/notionClient';

export default function AcademyPage ({ academyContent }: any) {
    return (
        <>
            <EducationModelSection content={ academyContent } />
            <PlatformsSection content={ academyContent } />
            <GuidesSection content={ academyContent } />
            <CalendarSection content={ academyContent } />
        </>
    );
};

export async function getServerSideProps () {
    try {
        // Fetch the metadata to get the page ID
        const pageMetadata = await getSectionContent('526df7dc8ff943aeb550d024010f6be5', {
            property: "Title",
            rich_text: {
                contains: "Academia",
            },
        });

        if (!pageMetadata || pageMetadata.length === 0) {
            return {
                notFound: true,
            };
        }

        // Fetch all content blocks from the page
        const academyContentBlocks = await getPageContent(pageMetadata[0].id);

        return {
            props: {
                academyContent: academyContentBlocks,
            },
        };
    } catch (error) {
        console.error('Failed to fetch academy page content:', error);
        return {
            props: {
                academyContent: null,
            },
        };
    }
}
