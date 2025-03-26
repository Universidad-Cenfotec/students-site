import React from "react";
import { Club } from "@/types/club";
import { Grid, Container } from "@mui/material";
import { ClubCard } from "@/components/Community/components/ClubCard";

interface ClubSectionProps {
    clubs: Club[];
}

export default function ClubSection ({ clubs }: ClubSectionProps) {
    // Filter out inactive clubs
    const activeClubs = clubs.filter((club) => club.status === "active");

    return (
        <Container maxWidth="xl">
            <Grid container justifyContent="center" alignItems="stretch" gap={ 4 }>
                { activeClubs.map((club) => (
                    <Grid
                        item
                        key={ club.id }
                        xs={ 12 }
                        sm={ 6 }
                        md={ 4 }
                        lg={ 3 } // 4 columns on large screens
                        sx={ { display: "flex", justifyContent: "center" } }
                    >
                        <ClubCard
                            id={ club.id } // Pass the Payload doc ID
                            title={ club.name }
                            description={ club.description }
                            imageUrl={ club.logo?.url ?? "/placeholder.jpg" }
                        />
                    </Grid>
                )) }
            </Grid>
        </Container>
    );
}
