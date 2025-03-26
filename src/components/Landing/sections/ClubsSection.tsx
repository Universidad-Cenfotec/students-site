"use client";

import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ClubCard } from "@/components/Community/components/ClubCard";
import { Club } from "@/types/club"; // Your typed interface for clubs

const ClubsSection: React.FC = () => {
    const [clubs, setClubs] = useState<Club[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const apiBaseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL ?? "http://localhost:3000";
                const res = await fetch(`${ apiBaseUrl }/api/clubs?limit=6`, { cache: "no-store" });
                if (!res.ok) throw new Error("Failed to fetch clubs");

                const data = await res.json(); // Should have { docs: Club[], ... }
                setClubs(data.docs);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchClubs();
    }, []);

    if (loading) {
    return (
            <Box
                sx={ {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "40vh",
                } }
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={ {
                width: "100%",
                height: "auto",
                textAlign: { xs: "center", md: "left" },
                my: "8rem",
                px: { xs: "0rem", md: "6rem" },
            } }
        >
            <Typography
                variant="h4"
                sx={ {
                    mx: "auto",
                    my: "0.5rem",
                    textAlign: { xs: "center", md: "left" },
                    fontSize: { xs: "0.825rem", sm: "1.125rem" },
                    fontWeight: 600,
                    letterSpacing: "0.0625rem",
                } }
            >
                Sitio de Estudiantes
            </Typography>
            <Typography
                variant="h2"
                sx={ {
                    mx: "auto",
                    textAlign: { xs: "center", md: "left" },
                    color: "primary.main",
                    fontSize: { xs: "2rem", sm: "3rem" },
                    fontWeight: 600,
                } }
            >
                ¿Ya conoces nuestros clubes?
            </Typography>
            <Grid
                container
                sx={ {
                    my: "4rem",
                    mx: "auto",
                    height: "auto",
                    minHeight: "34rem",
                } }
            >
                <Swiper
                    slidesPerView={ 1 }
                    spaceBetween={ 10 }
                    breakpoints={ {
                        600: { slidesPerView: 2, spaceBetween: 16 },
                        1200: { slidesPerView: 3, spaceBetween: 16 },
                        1500: { slidesPerView: 3, spaceBetween: 16 },
                    } }
                    watchSlidesProgress
                    loop={ true }
                    style={ {
                        paddingRight: 50,
                        paddingLeft: 50,
                        paddingBottom: 100,
                        margin: "0 auto",
                    } }
                >
                    { clubs.map((club) => (
                        <SwiperSlide key={ club.id } style={ { display: 'flex', justifyContent: 'center', width: '100%', minWidth: 500 } }>
                            <ClubCard
                                key={ club.id }
                                id={ club.id }
                                title={ club.name }
                                description={ club.description }
                                imageUrl={ club.banner?.url ?? club.logo?.url ?? "/placeholder.jpg" }
                            />
                        </SwiperSlide>
                    )) }
                </Swiper>
            </Grid>
        </Box>
    );
};

export default ClubsSection;
