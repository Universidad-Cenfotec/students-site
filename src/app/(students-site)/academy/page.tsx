import React from 'react';
import EducationModelSection from '../../../components/Academy/sections/EducationModelSection';
import PlatformsSection from '../../../components/Academy/sections/PlatformsSection';
import GuidesSection from '../../../components/Academy/sections/GuidesSection';
import CalendarSection from '../../../components/Academy/sections/CalendarSection';

export default function AcademyPage () {
    return (
        <>
            <EducationModelSection />
            <PlatformsSection />
            <GuidesSection />
            <CalendarSection />
        </>
    );
};
