import { BlogResponse } from "@/types/blog";
import ClientLayout from "@/layout/ClientLayout";
import LatestSection from "../../../components/Community/sections/LatestSection";
import JobsSection from "../../../components/Community/sections/JobsSection";
import BlogSection from "../../../components/Community/sections/BlogSection";

async function fetchBlogs (): Promise<BlogResponse> {
    const res = await fetch(process.env.SERVER_API + "api/blogs", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blog posts");
    return res.json();
}

export default async function CommunityPage () {
    const blogResponse = await fetchBlogs();

    return (
        <ClientLayout>
            <LatestSection />
            <JobsSection />
            <BlogSection blogPosts={ blogResponse.docs } />
        </ClientLayout>
    );
}
