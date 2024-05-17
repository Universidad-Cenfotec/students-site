import { Box, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ClubCard } from './components';

export const ClubsSection = () => {
    return (
        <Box sx={ { width: '100%', height: '70vh', textAlign: 'center', my: 4 } }>
            <Typography variant="h4" sx={ { mx: 12, my: 2, textAlign: 'left', fontSize: 18, fontWeight: 600, letterSpacing: 1 } }>
                Sitio de Estudiantes
            </Typography>
            <Typography variant="h2" sx={ { mx: 12, textAlign: 'left', color: 'primary.main', fontSize: 48, fontWeight: 600 } }>
                ¿Ya conoces nuestros clubes?
            </Typography>
            <Grid container sx={ { my: 8, maxWidth: '80%', mx: 'auto', height: '100%' } }>
                <Swiper
                    spaceBetween={ 50 }
                    slidesPerView={ 3 }
                    style={ { paddingRight: 50, paddingLeft: 50 } }
                >
                    <SwiperSlide><ClubCard title="Club de Ajedrez" description="Un punto de encuentro para entusiastas del ajedrez que buscan afinar su pensamiento estratégico y competir en un entorno de respeto mutuo y mejora continua." imageUrl="https://res.cloudinary.com/glovooker/image/upload/v1715972808/students-site/ajedrez.png" /></SwiperSlide>
                    <SwiperSlide><ClubCard title="Club de Programación Competitiva" description="Dirigido a aquellos que disfrutan resolviendo problemas, para desarrollar habilidades de programación y competir en eventos nacionales e internacionales." imageUrl="https://res.cloudinary.com/glovooker/image/upload/v1715972808/students-site/progra-compe.png" /></SwiperSlide>
                    <SwiperSlide><ClubCard title="Club Deportivo" description="Un colectivo para los apasionados del deporte que se esfuerzan por un equilibrio entre el bienestar físico y el compañerismo, representando valores de disciplina y trabajo en equipo." imageUrl="https://res.cloudinary.com/glovooker/image/upload/v1715972808/students-site/deportivo.png" /></SwiperSlide>
                </Swiper>
            </Grid>
        </Box>
    );
};
