import React from 'react';
import ClientLayout from '@/layout/ClientLayout';
import LatestSection from '../../../components/Community/sections/LatestSection';
import JobsSection from '../../../components/Community/sections/JobsSection';
// import BlogSection from '../../../components/Community/sections/BlogSection';

export default function CommunityPage ({ blogPosts }: any) {
    return (
        <ClientLayout>
            <LatestSection />
            <JobsSection />
            {/* <BlogSection blogPosts={ blogPosts } /> */ }
        </ClientLayout>
    );
};
