import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface ClubCardProps {
    title: string;
    description: string;
    imageUrl: string;
    style?: React.CSSProperties;
}

export const BlogCard = ({ title, description, imageUrl, style }: ClubCardProps) => {
    return (
        <Card sx={ { maxWidth: 366, height: 455, borderRadius: '12px', textAlign: 'left', boxShadow: '0px 30px 60px rgba(71, 74, 87, 0.25)', cursor: 'pointer' } } style={ style }>
            <CardMedia
                component="img"
                height="236"
                image={ imageUrl }
                alt={ title }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={ {
                    mb: 2,
                    fontSize: 26,
                    fontWeight: 600,
                    color: 'black',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 3, // Set the number of lines you want to display
                    lineHeight: '1em', // Adjust based on your font size
                    maxHeight: '3em',   // Should be `lineHeight` * `WebkitLineClamp` 
                } }>
                    { title }
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={ { fontSize: '12px' } }>
                    { description }
                </Typography>
            </CardContent>
        </Card >
    );
};
