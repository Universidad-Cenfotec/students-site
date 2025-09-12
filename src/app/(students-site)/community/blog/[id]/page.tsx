"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ClientLayout from "../../../../../layout/ClientLayout";
import BlogContent from "../../../../../components/Community/components/BlogContent";

export default function BlogPost () {
    const params = useParams();
    const [blogPost, setBlogPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogPost = async () => {
            if (!params.id) return;
            setLoading(true);

            const apiBaseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
            const res = await fetch(`${ apiBaseUrl }/api/blogs/${ params.id }`, { cache: "no-store" });

            if (res.ok) {
                setBlogPost(await res.json());
            }

            setLoading(false);
        };

        fetchBlogPost();
    }, [params.id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-80">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!blogPost) {
        return (
            <div className="text-center mt-6">
                <h5 className="text-xl">Blog post not found</h5>
            </div>
        );
    }

    return (
        <ClientLayout>
            <div className="pt-24 min-h-[60vh]">
                {/* Hero Image Section */ }
                { blogPost?.image?.url && (
                    <div
                        className="relative w-full h-96 bg-cover bg-center flex items-center justify-center text-white text-center"
                        style={ {
                            backgroundImage: `url(${ blogPost.image.url })`,
                        } }
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative z-10">
                            <h3 className="font-bold mb-1 text-3xl">
                                { blogPost?.title || "Blog Post" }
                            </h3>
                            <p className="opacity-80">
                                { new Date(blogPost?.publishedDate || Date.now()).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                }) }
                            </p>
                        </div>
                    </div>
                ) }

                {/* Blog Content Section */ }
                <div className="max-w-4xl mx-auto p-16 -mt-12 rounded-xl shadow-lg bg-white">
                    <BlogContent content={ blogPost?.content } />
                </div>
            </div>
        </ClientLayout>
    );
}
