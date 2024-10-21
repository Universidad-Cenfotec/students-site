import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface ClubCardProps {
    title: string;
    description: string;
    imageUrl: string;
    onClick?: () => void;
    style?: React.CSSProperties;
}

export const BlogCard = ({ title, description, imageUrl, onClick, style }: ClubCardProps) => {
    return (
        <Card onClick={ onClick } sx={ { maxWidth: 366, height: 455, borderRadius: '12px', textAlign: 'left', boxShadow: '0px 30px 60px rgba(71, 74, 87, 0.25)', cursor: 'pointer' } } style={ style }>
            <CardMedia
                component="img"
                height="236"
                image={ imageUrl }
                alt={ title }
                style={ { objectFit: 'cover', objectPosition: 'top' } }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={ {
                    mb: 3,
                    fontSize: 26,
                    fontWeight: 600,
                    color: 'black',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 3,
                    lineHeight: '1.5em',
                    maxHeight: '3em',
                } }>
                    { title }
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={ { fontSize: '13px' } }>
                    { description }
                </Typography>
            </CardContent>
        </Card >
    );
};
