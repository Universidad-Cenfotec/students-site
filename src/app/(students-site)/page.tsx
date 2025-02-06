import React from "react";
import ClientLayout from "@/components/ClientLayout";
import HeroSection from "./landing/HeroSection";
import FeaturesSection from "./landing/FeaturesSection";
import GuidanceSection from "./landing/GuidanceSection";
import ClubsSection from "./landing/ClubsSection";
import MapSection from "./landing/MapSection";

// Fetch landing content from Payload
async function fetchLandingContent () {
    try {
        const response = await fetch(`${ process.env.PAYLOAD_PUBLIC_URL }/api/landing-content`, {
            cache: "no-store", // Ensures fresh data on each request
        });

        if (!response.ok) {
            console.error("Failed to fetch landing content");
            return null;
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching landing content:", error);
        return null;
    }
}

// Server-side rendering
export default async function LandingPage () {
    const landingContent = await fetchLandingContent();

    return (
        <ClientLayout>
            <HeroSection content={ landingContent } />
            <FeaturesSection content={ landingContent } />
            <GuidanceSection content={ landingContent } />
            <ClubsSection content={ landingContent } />
            <MapSection content={ landingContent } />
        </ClientLayout>
    );
}
