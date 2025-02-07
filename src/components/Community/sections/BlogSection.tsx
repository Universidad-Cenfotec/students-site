import React from "react";
import { BlogPost } from "@/types/blog";
import { Grid, Container } from "@mui/material";
import { BlogCard } from "@/components/Community/components/BlogCard";

interface BlogSectionProps {
    blogPosts: BlogPost[];
}

export default function BlogSection ({ blogPosts }: BlogSectionProps) {
    // ✅ Filter out unpublished blog posts
    const publishedPosts = blogPosts.filter((post) => post.status === "published");

    return (
        <Container maxWidth="xl">
            <Grid container justifyContent="center" alignItems="stretch" gap={ 4 }>
                { publishedPosts.map((post) => (
                    <Grid
                        item
                        key={ post.id }
                        xs={ 12 }
                        sm={ 6 }
                        md={ 4 }
                        lg={ 3 } // 4 columns on large screens
                        sx={ {
                            display: "flex",
                            justifyContent: "center",
                        } }
                    >
                        <BlogCard
                            id={ post.id }
                            title={ post.title }
                            description={ post.description }
                            imageUrl={ post.image?.url || "/placeholder.jpg" }
                        />
                    </Grid>
                )) }
            </Grid>
        </Container>
    );
}
