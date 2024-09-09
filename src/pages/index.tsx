import React from 'react';
import HeroSection from './landing/sections/HeroSection';
import FeaturesSection from './landing/sections/FeaturesSection';
import GuidanceSection from './landing/sections/GuidanceSection';
import ClubsSection from './landing/sections/ClubsSection';
import MapSection from './landing/sections/MapSection';
import { getPageContent, getSectionContent } from '@/lib/notionClient';

export default function LandingPage ({ landingContent }: any) {
    return (
        <>
            <HeroSection content={ landingContent } />
            <FeaturesSection content={ landingContent } />
            <GuidanceSection content={ landingContent } />
            <ClubsSection content={ landingContent } />
            <MapSection content={ landingContent } />
        </>
    );
};

export async function getServerSideProps () {
    try {
        // Fetch the metadata to get the page ID
        const pageMetadata = await getSectionContent('526df7dc8ff943aeb550d024010f6be5', {
            property: "Title",
            rich_text: {
                contains: "Inicio",
            },
        });

        if (!pageMetadata || pageMetadata.length === 0) {
            return {
                notFound: true,
            };
        }

        // Fetch all content blocks from the page
        const landingContentBlocks = await getPageContent(pageMetadata[0].id);

        return {
            props: {
                landingContent: landingContentBlocks,
            },
        };
    } catch (error) {
        console.error('Failed to fetch landing page content:', error);
        return {
            props: {
                landingContent: null,
            },
        };
    }
}
