import React from 'react';
import StudentCouncilSection from './sections/StudentCouncilSection';
import PlatformsSection from './sections/PlatformsSection';
import GuidesSection from './sections/GuidesSection';
import CalendarSection from './sections/CalendarSection';
import { getPageContent, getSectionContent } from '@/lib/notionClient';

export default function StudentCouncilPage ({ studentCouncilContent }: any) {
    return (
        <>
            <StudentCouncilSection content={ studentCouncilContent } />
            {/* <CalendarSection content={ studentCouncilContent } /> */ }
        </>
    );
};

export async function getServerSideProps () {
    try {
        // Fetch the metadata to get the page ID
        const pageMetadata = await getSectionContent('526df7dc8ff943aeb550d024010f6be5', {
            property: "Title",
            rich_text: {
                contains: "Consejo Estudiantil",
            },
        });

        if (!pageMetadata || pageMetadata.length === 0) {
            return {
                notFound: true,
            };
        }

        // Fetch all content blocks from the page
        const studentCouncilContentBlocks = await getPageContent(pageMetadata[0].id);

        return {
            props: {
                studentCouncilContent: studentCouncilContentBlocks,
            },
        };
    } catch (error) {
        console.error('Failed to fetch studentCouncil page content:', error);
        return {
            props: {
                studentCouncilContent: null,
            },
        };
    }
}
