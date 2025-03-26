"use client";

import { useRouter } from "next/navigation";
import { Card, CardActionArea, CardContent, Typography, CardMedia } from "@mui/material";

interface ClubCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    style?: React.CSSProperties;
}

export const ClubCard = ({ id, title, description, imageUrl, style }: ClubCardProps) => {
    const router = useRouter();

    return (
        <Card
            sx={ {
                maxWidth: 366,
                borderRadius: "12px",
                textAlign: "left",
                boxShadow: "0px 30px 60px rgba(71, 74, 87, 0.25)",
            } }
            style={ style }
        >
            <CardActionArea onClick={ () => router.push(`/community/clubs/${ id }`) }>
                <CardMedia
                    component="img"
                    height="236"
                    image={ imageUrl }
                    alt={ title }
                    style={ { objectFit: "cover", objectPosition: "top" } }
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={ {
                            mb: 3,
                            fontSize: 26,
                            fontWeight: 600,
                            color: "black",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            WebkitLineClamp: 2,
                            lineHeight: "1.5em",
                            maxHeight: "3em",
                        } }
                    >
                        { title }
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={ { fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis" } }
                    >
                        { description }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
