import React from 'react';
import StudentAffairsSection from '../../../components/About/sections/StudentAffairsSection';
import DiversityStatementSection from '../../../components/About/sections/DiversityStatementSection';
import SupportServicesSection from '../../../components/About/sections/SupportServicesSection';

export default function AboutPage () {
    return (
        <>
            <StudentAffairsSection />
            <DiversityStatementSection />
            <SupportServicesSection />
        </>
    );
};
