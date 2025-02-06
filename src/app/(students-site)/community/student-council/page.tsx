import React from 'react';
import { getPageContent, getSectionContent } from '@/lib/notionClient';
import StudentCouncilSection from '../../../../components/Community/Student-Council/sections/StudentCouncilSection';
import CurrentCouncilSection from '../../../../components/Community/Student-Council/sections/CurrentCouncilSection';
// import ElectionsSection from './sections/ElectionsSection';

export default function StudentCouncilPage ({ studentCouncilContent }: any) {
    return (
        <>
            <StudentCouncilSection content={ studentCouncilContent } />
            <CurrentCouncilSection content={ studentCouncilContent } />
            {/* <ElectionsSection content={ studentCouncilContent } /> */ }
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
