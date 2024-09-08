import React from 'react';
import { ClubsSection, FeaturesSection, GuidanceSection, HeroSection, MapSection } from './landing/sections';

const LandingPage = () => {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <GuidanceSection />
            <ClubsSection />
            <MapSection />
        </>
    );
};

export default LandingPage;
