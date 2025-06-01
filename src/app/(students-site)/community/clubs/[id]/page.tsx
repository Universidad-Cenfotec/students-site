"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Paper,
    CircularProgress,
    Button,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Avatar,
    Divider,
    Container,
    useTheme,
    useMediaQuery
} from "@mui/material";
import ClientLayout from "@/layout/ClientLayout";
import BlogContent from "@/components/Community/components/BlogContent";
import { Club } from "@/types/club";

export default function ClubPage () {
    const params = useParams();
    const [club, setClub] = useState<Club | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const fetchClub = async () => {
            if (!params.id) return;
            setLoading(true);

            const apiBaseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
            const res = await fetch(`${ apiBaseUrl }/api/clubs/${ params.id }`, {
                cache: "no-store",
            });

            if (res.ok) {
                const data = await res.json();
                setClub(data as Club);
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
                        height: { xs: "350px", md: "450px" },
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
                            background: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4))",
                        },
                    } }
                >
                    <Container maxWidth="lg" sx={ { position: "relative", zIndex: 2 } }>
                        <Typography
                            variant="h3"
                            sx={ {
                                fontWeight: 700,
                                mb: 2,
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
                            } }
                        >
                            { club.name || "Club" }
                        </Typography>

                        { club.description && (
                            <Typography
                                variant="subtitle1"
                                sx={ {
                                    mb: 3,
                                    maxWidth: '800px',
                                    mx: 'auto',
                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                    display: { xs: 'none', sm: 'block' }
                                } }
                            >
                                { club.description }
                            </Typography>
                        ) }

                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            href='https://forms.zoho.com/pbrenes/form/Formularioparasolicituddeinscripcinaclubes/formperma/EKRpXyjTDcWKAfKjf67llWSS3hDlOGGrM_lsVKwaPUI?zf_lang=es'
                            target='_blank'
                            sx={ {
                                fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
                                fontWeight: 600,
                                px: { xs: '1.5rem', sm: '2rem', md: '3rem' },
                                py: { xs: '0.5rem', sm: '0.75rem' },
                                border: 3, 
                                '&:hover': {
                                    border: 3,
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 10px rgba(0,0,0,0.2)',
                                    transition: 'all 0.3s ease'
                                },
                                transition: 'all 0.3s ease'
                            } }
                        >
                            ¡Inscríbete a este Club!
                        </Button>
                    </Container>
                </Box>
            ) }

            {/* Content Container */ }
            <Container maxWidth="lg" sx={ { mt: heroImageUrl ? { xs: -4, md: -6 } : 0, mb: 8 } }>
                <Grid container spacing={ 3 }>
                    {/* Sidebar - Person in Charge */ }
                    { club.hasPersonInCharge && club.personInCharge && (
                        <Grid item xs={ 12 } md={ 4 } lg={ 3 } order={ { xs: 2, md: 1 } }>
                            <Paper
                                elevation={ 0 }
                                sx={ {
                                    p: 3,
                                    borderRadius: "12px",
                                    boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                                    backgroundColor: "#ffffff",
                                    position: { xs: 'static', md: 'sticky' },
                                    top: 20
                                } }
                            >
                                <Typography variant="h6" sx={ { mb: 2, fontWeight: 600, borderBottom: '2px solid #f0f0f0', pb: 1 } }>
                                    Contacto del Club
                                </Typography>
                                <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' } }>
                                    { club.personInCharge.photo?.url ? (
                                        <Avatar
                                            src={ club.personInCharge.photo.url }
                                            alt={ club.personInCharge.name }
                                            sx={ {
                                                width: { xs: 100, md: 120 },
                                                height: { xs: 100, md: 120 },
                                                mb: 2,
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                            } }
                                        />
                                    ) : (
                                        <Avatar
                                            sx={ {
                                                width: { xs: 100, md: 120 },
                                                height: { xs: 100, md: 120 },
                                                mb: 2,
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                            } }
                                        >
                                            { club.personInCharge.name.charAt(0) }
                                        </Avatar>
                                    ) }
                                    <Typography variant="h6" sx={ { fontWeight: 600 } }>
                                        { club.personInCharge.name }
                                    </Typography>
                                    { club.personInCharge.title && (
                                        <Typography variant="subtitle2" color="text.secondary" sx={ { mb: 1 } }>
                                            { club.personInCharge.title }
                                        </Typography>
                                    ) }
                                    { club.personInCharge.email && (
                                        <Typography variant="body2" sx={ { mt: 1, mb: 1 } }>
                                            <a
                                                href={ `mailto:${ club.personInCharge.email }` }
                                                style={ {
                                                    color: theme.palette.primary.main,
                                                    textDecoration: 'none',
                                                    fontWeight: 500
                                                } }
                                            >
                                                { club.personInCharge.email }
                                            </a>
                                        </Typography>
                                    ) }
                                    { club.personInCharge.bio && (
                                        <>
                                            <Divider sx={ { width: '100%', my: 2 } } />
                                            <Typography
                                                variant="body2"
                                                sx={ {
                                                    mt: 1,
                                                    textAlign: 'left',
                                                    fontStyle: 'italic',
                                                    color: 'text.secondary'
                                                } }
                                            >
                                                { club.personInCharge.bio }
                                            </Typography>
                                        </>
                                    ) }
                                </Box>
                            </Paper>
                        </Grid>
                    ) }

                    {/* Main Content */ }
                    <Grid
                        item
                        xs={ 12 }
                        md={ club.hasPersonInCharge ? 8 : 12 }
                        lg={ club.hasPersonInCharge ? 9 : 12 }
                        order={ { xs: 1, md: 2 } }
                    >
                        <Paper
                            elevation={ 0 }
                            sx={ {
                                p: { xs: 3, sm: 4 },
                                borderRadius: "12px",
                                boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                                backgroundColor: "#ffffff",
                            } }
                        >
                            {/* Club Description for Mobile */ }
                            { club.description && heroImageUrl && (
                                <Box sx={ { display: { xs: 'block', sm: 'none' }, mb: 3 } }>
                                    <Typography variant="body1" sx={ { fontWeight: 500 } }>
                                        { club.description }
                                    </Typography>
                                    <Divider sx={ { mt: 2 } } />
                                </Box>
                            ) }

                            {/* Club Content */ }
                            <BlogContent content={ club.content } />
                        </Paper>

                        {/* Gallery Section - only shown if club has gallery */ }
                        { club.hasGallery && club.gallery && club.gallery.length > 0 && (
                            <Box sx={ { mt: 4 } }>
                                <Paper
                                    elevation={ 0 }
                                    sx={ {
                                        p: { xs: 3, sm: 4 },
                                        borderRadius: "12px",
                                        boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
                                        backgroundColor: "#ffffff",
                                    } }
                                >
                                    <Typography
                                        variant="h5"
                                        sx={ {
                                            mb: 3,
                                            fontWeight: 600,
                                            borderBottom: '2px solid #f0f0f0',
                                            pb: 1
                                        } }
                                    >
                                        Galería de Actividades
                                    </Typography>
                                    <Grid container spacing={ 2 }>
                                        { club.gallery.map((item, index) => (
                                            <Grid item xs={ 12 } sm={ 6 } md={ 4 } key={ index }>
                                                <Card
                                                    sx={ {
                                                        height: '100%',
                                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                        '&:hover': {
                                                            transform: 'translateY(-5px)',
                                                            boxShadow: '0 8px 15px rgba(0,0,0,0.1)'
                                                        }
                                                    } }
                                                >
                                                    <CardMedia
                                                        component="img"
                                                        image={ item.image.url }
                                                        alt={ item.caption || `Image ${ index + 1 }` }
                                                        sx={ {
                                                            height: { xs: 180, sm: 200 },
                                                            objectFit: "cover"
                                                        } }
                                                    />
                                                    { item.caption && (
                                                        <CardContent sx={ { p: 2 } }>
                                                            <Typography
                                                                variant="body2"
                                                                color="text.secondary"
                                                                sx={ { fontWeight: 500 } }
                                                            >
                                                                { item.caption }
                                                            </Typography>
                                                        </CardContent>
                                                    ) }
                                                </Card>
                                            </Grid>
                                        )) }
                                    </Grid>
                                </Paper>
                            </Box>
                        ) }
                    </Grid>
                </Grid>
            </Container>
        </ClientLayout>
    );
}
