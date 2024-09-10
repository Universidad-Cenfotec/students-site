import { Card, CardContent, Typography, CardMedia, CardActionArea } from '@mui/material';

interface ClubCardProps {
    title: string;
    description: string;
    imageUrl: string;
    style?: React.CSSProperties;
}

export const ClubCard = ({ title, description, imageUrl, style }: ClubCardProps) => {
    return (
        <Card sx={ { maxWidth: 366, height: 455, borderRadius: '12px', textAlign: 'left', boxShadow: '0px 30px 60px rgba(71, 74, 87, 0.25)', cursor: 'pointer' } } style={ style }>
            <CardActionArea href='https://cenf-zgpvh.maillist-manage.com/click/15e01f801de71b8d/15e01f801de773e7' target='_blank'>
            <CardMedia
                component="img"
                height="236"
                image={ imageUrl }
                alt={ title }
            />
            <CardContent sx={ { mt: 2 } }>
                <Typography gutterBottom variant="h5" component="div" sx={ { mb: 1, fontSize: 26, fontWeight: 600, color: 'black', lineHeight: '25px' } }>
                    { title }
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    { description }
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
    );
};
