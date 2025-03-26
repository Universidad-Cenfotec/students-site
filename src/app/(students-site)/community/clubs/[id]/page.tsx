"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Box, Typography, Paper, CircularProgress } from "@mui/material";
import ClientLayout from "@/layout/ClientLayout"; // Adjust import as needed
import BlogContent from "@/components/Community/components/BlogContent";
// Reusable rich text renderer (you can rename if you prefer)

export default function ClubPage () {
    const params = useParams();          // Get the [id] from the URL
    const [club, setClub] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClub = async () => {
            if (!params.id) return;
            setLoading(true);

            const apiBaseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
            // Note: make sure your clubs slug is `clubs`
            const res = await fetch(`${ apiBaseUrl }/api/clubs/${ params.id }`, {
                cache: "no-store",
            });

            if (res.ok) {
                setClub(await res.json());
            }
            setLoading(false);
        };

        fetchClub();
    }, [params.id]);

    // Loading state
    if (loading) {
        return (
            <Box sx={ { display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" } }>
                <CircularProgress />
            </Box>
        );
    }

    // Not found
    if (!club) {
        return (
            <Box sx={ { textAlign: "center", mt: 6 } }>
                <Typography variant="h5">Club not found</Typography>
            </Box>
        );
    }

    // Choose whichever field you want as the hero image (banner, logo, etc.)
    const heroImageUrl = club.banner?.url || club.logo?.url;

    return (
        <ClientLayout>
            {/* Hero Image Section */ }
            { heroImageUrl && (
                <Box
                    sx={ {
                        position: "relative",
                        width: "100%",
                        height: "450px",
                        backgroundImage: `url(${ heroImageUrl })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
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
                            { club.name || "Club" }
                        </Typography>

                        {/* Show a date or some other metadata if you have it in clubs */ }
                        <Typography variant="subtitle1" sx={ { opacity: 0.8 } }>
                            { new Date(club.createdAt || Date.now()).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            }) }
                        </Typography>
                    </Box>
                </Box>
            ) }

            {/* Main Content Section */ }
            <Paper
                elevation={ 0 }
                sx={ {
                    maxWidth: "900px",
                    mx: "auto",
                    p: "4rem",
                    mt: heroImageUrl ? "-50px" : 3,
                    borderRadius: "12px",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                    backgroundColor: "#ffffff",
                } }
            >
                {/* If you’re using a rich text field named `content`, reuse your BlogContent component */ }
                <BlogContent content={ club.content } />
            </Paper>
        </ClientLayout>
    );
}
