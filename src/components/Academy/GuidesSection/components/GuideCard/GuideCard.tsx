import { Card, CardContent, Typography, Button } from '@mui/material';

interface ClubCardProps {
    title: string;
    link: string;
    imageUrl: string;
    style?: React.CSSProperties;
}

export const GuideCard = ({ title, link, imageUrl, style }: ClubCardProps) => {
    return (
        <Card sx={ { width: 266, height: 355, flexDirection: 'column', justifyContent: 'center', borderRadius: '12px', textAlign: 'left', boxShadow: '0px 30px 60px rgba(71, 74, 87, 0.25)', display: 'flex' } } style={ style }>
            <CardContent sx={ { height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' } }>
                <img src={ imageUrl } alt={ title } width={ '143' } height={ 'auto' } />
                <Typography gutterBottom variant="h5" component="div" sx={ { mb: 1, fontSize: 22, fontWeight: 600, color: 'secondary.main', lineHeight: '25px' } }>
                    { title }
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    href={ link }
                >
                    Ver Guía
                </Button>
            </CardContent>
        </Card>
    );
};
