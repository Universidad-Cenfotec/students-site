import { BlogResponse } from "@/types/blog";
import ClientLayout from "@/layout/ClientLayout";
import LatestSection from "../../../../components/Community/sections/LatestSection";
import JobsSection from "../../../../components/Community/sections/JobsSection";
import BlogSection from "../../../../components/Community/sections/BlogSection";

async function fetchBlogs (): Promise<BlogResponse> {
    const res = await fetch(process.env.NEXT_PUBLIC_PAYLOAD_URL + "api/blogs", { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blog posts");
    return res.json();
}

export default async function BlogPage () {
    const blogResponse = await fetchBlogs();

    return (
        <ClientLayout>
            <div className="pt-24">
                <LatestSection />
                <JobsSection />
                <BlogSection blogPosts={ blogResponse.docs } />
            </div>
        </ClientLayout>
    );
}
