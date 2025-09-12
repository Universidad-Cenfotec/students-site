import React from "react";
import { BlogPost } from "@/types/blog";
import { BlogCard } from "@/components/Community/components/BlogCard";

interface BlogSectionProps {
    blogPosts: BlogPost[];
}

export default function BlogSection ({ blogPosts }: BlogSectionProps) {
    // Filter out unpublished blog posts
    const publishedPosts = blogPosts.filter((post) => post.status === "published");

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Comunidad
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Blog Estudiantil
            </h2>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    { publishedPosts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-stretch">
                            { publishedPosts.map((post) => (
                                <div
                                    key={ post.id }
                                    className="flex justify-center"
                                >
                                    <BlogCard
                                        id={ post.id }
                                        title={ post.title }
                                        description={ post.description }
                                        imageUrl={ post.image?.url || "/placeholder.jpg" }
                                    />
                                </div>
                            )) }
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="alert alert-info">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <h3 className="font-bold">No hay artículos disponibles</h3>
                                    <div className="text-sm">Próximamente se publicarán nuevos artículos en el blog</div>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
}
