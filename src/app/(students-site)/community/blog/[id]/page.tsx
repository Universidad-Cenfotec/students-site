"use client"; // ✅ This is a Client Component

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import ClientLayout from "../../../../../layout/ClientLayout";
import BlogContent from "../../../../../components/Community/components/BlogContent";

export default function BlogPost () {
    const params = useParams(); // ✅ Get ID dynamically from URL
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

    if (loading)
        return (
            <Box sx={ { display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" } }>
                <CircularProgress />
            </Box>
        );

    if (!blogPost)
        return (
            <Box sx={ { textAlign: "center", mt: 6 } }>
                <Typography variant="h5">Blog post not found</Typography>
            </Box>
        );

    return (
        <ClientLayout>
            {/* Hero Image Section */ }
            { blogPost?.image?.url && (
                <Box
                    sx={ {
                        position: "relative",
                        width: "100%",
                        height: "450px",
                        backgroundImage: `url(${ blogPost.image.url })`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        textAlign: "center",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
                        },
                    } }
                >
                    <Box sx={ { position: "relative", zIndex: 2 } }>
                        <Typography variant="h3" sx={ { fontWeight: "bold", mb: 1 } }>
                            { blogPost?.title || "Blog Post" }
                        </Typography>

                        <Typography variant="subtitle1" sx={ { opacity: 0.8 } }>
                            { new Date(blogPost?.publishedDate || Date.now()).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            }) }
                        </Typography>
                    </Box>
                </Box>
            ) }

            {/* Blog Content Section */ }
            <Paper
                elevation={ 0 }
                sx={ {
                    maxWidth: "900px",
                    mx: "auto",
                    p: "4rem",
                    mt: "-50px", // Overlapping effect with hero image
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                    backgroundColor: "#ffffff",
                } }
            >
                <BlogContent content={ blogPost?.content } />
            </Paper>
        </ClientLayout>
    );
}
