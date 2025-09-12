import React from 'react';
import ClientLayout from '@/layout/ClientLayout';
import StudentAffairsSection from '@/components/About/sections/StudentAffairsSection';
import DiversityStatementSection from '@/components/About/sections/DiversityStatementSection';
import SupportServicesSection from '@/components/About/sections/SupportServicesSection';

export default async function AboutPage () {
    return (
        <ClientLayout>
            <div className="pt-24">
                <StudentAffairsSection />
                <DiversityStatementSection />
                <SupportServicesSection />
            </div>
        </ClientLayout>
    );
};
