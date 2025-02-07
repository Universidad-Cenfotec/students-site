import React from "react";
import ClientLayout from "@/layout/ClientLayout";
import HeroSection from "@/components/Landing/sections/HeroSection";
import FeaturesSection from "@/components/Landing/sections/FeaturesSection";
import GuidanceSection from "@/components/Landing/sections/GuidanceSection";
import ClubsSection from "@/components/Landing/sections/ClubsSection";
import MapSection from "@/components/Landing/sections/MapSection";

export default async function LandingPage () {

    return (
        <ClientLayout>
            <HeroSection />
            <FeaturesSection />
            <GuidanceSection />
            <ClubsSection />
            <MapSection />
        </ClientLayout>
    );
}
