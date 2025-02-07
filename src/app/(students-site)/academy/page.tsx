import React from 'react';
import ClientLayout from '@/layout/ClientLayout';
import EducationModelSection from '@/components/Academy/sections/EducationModelSection';
import PlatformsSection from '@/components/Academy/sections/PlatformsSection';
import GuidesSection from '@/components/Academy/sections/GuidesSection';
import CalendarSection from '@/components/Academy/sections/CalendarSection';

export default function AcademyPage () {
    return (
        <ClientLayout>
            <EducationModelSection />
            <PlatformsSection />
            <GuidesSection />
            <CalendarSection />
        </ClientLayout>
    );
};
