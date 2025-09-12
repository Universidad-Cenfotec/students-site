import React from 'react';
import ClientLayout from '@/layout/ClientLayout';
import StudentCouncilSection from '@/components/Community/pages/Student-Council/sections/StudentCouncilSection';
import CurrentCouncilSection from '@/components/Community/pages/Student-Council/sections/CurrentCouncilSection';
// import ElectionsSection from '@/components/Community/pages/Student-Council/sections/ElectionsSection';

export default function StudentCouncilPage () {
    return (
        <ClientLayout>
            <StudentCouncilSection />
            <CurrentCouncilSection />
            {/* <ElectionsSection /> - HIDDEN */ }
        </ClientLayout>
    );
};
