import React from 'react';
import HeroSection from './landing/sections/HeroSection';
import FeaturesSection from './landing/sections/FeaturesSection';
import GuidanceSection from './landing/sections/GuidanceSection';
import ClubsSection from './landing/sections/ClubsSection';
import MapSection from './landing/sections/MapSection';

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
