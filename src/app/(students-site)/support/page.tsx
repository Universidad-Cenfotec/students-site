import React from 'react';
import ClientLayout from '@/layout/ClientLayout';
import AssistanceSection from '../../../components/Support/sections/AssistanceSection';
import SchoolsSection from '../../../components/Support/sections/SchoolsSection';

export default function SupportPage () {
    return (
        <ClientLayout>
            <AssistanceSection />
            <SchoolsSection />
        </ClientLayout>
    );
};
