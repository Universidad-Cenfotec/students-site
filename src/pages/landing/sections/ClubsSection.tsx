import { Box, Grid, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ClubCard } from '@/components/Landing/ClubsSection/components';

const ClubsSection: React.FC<any> = ({ content }) => {
    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                { content[35].heading_3.rich_text[0].plain_text }
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                { content[36].heading_1.rich_text[0].plain_text }
            </Typography>
            <Grid container sx={ { my: '4rem', mx: 'auto', height: 'auto', minHeight: '34rem' } }>
                <Swiper
                    slidesPerView={ 1 }
                    spaceBetween={ 10 }
                    breakpoints={ {
                        900: { slidesPerView: 2, spaceBetween: 16 },
                        1200: { slidesPerView: 2, spaceBetween: 16 },
                        1500: { slidesPerView: 3, spaceBetween: 16 },
                    } }
                    watchSlidesProgress
                    loop={ true }
                    style={ { paddingRight: 50, paddingLeft: 50, margin: '0 auto' } }
                >
                    <SwiperSlide>
                        { ({ isVisible }) => (
                            <ClubCard
                                title="Club de Ajedrez"
                                description="Un punto de encuentro para entusiastas del ajedrez que buscan afinar su pensamiento estratégico y competir en un entorno de respeto mutuo y mejora continua."
                                imageUrl="https://res.cloudinary.com/glovooker/image/upload/v1715972808/students-site/ajedrez.png"
                                style={ { display: isVisible ? 'block' : 'none' } }
                            />
                        ) }
                    </SwiperSlide>
                    <SwiperSlide>
                        { ({ isVisible }) => (
                            <ClubCard
                                title="Club de Programación Competitiva"
                                description="Dirigido a aquellos que disfrutan resolviendo problemas, para desarrollar habilidades de programación y competir en eventos nacionales e internacionales."
                                imageUrl="https://res.cloudinary.com/glovooker/image/upload/v1715972808/students-site/progra-compe.png"
                                style={ { display: isVisible ? 'block' : 'none' } }
                            />
                        ) }
                    </SwiperSlide>
                    <SwiperSlide>
                        { ({ isVisible }) => (
                            <ClubCard
                                title="Club Deportivo"
                                description="Un colectivo para los apasionados del deporte que se esfuerzan por un equilibrio entre el bienestar físico y el compañerismo, representando valores de disciplina y trabajo en equipo."
                                imageUrl="https://res.cloudinary.com/glovooker/image/upload/v1715972808/students-site/deportivo.png"
                                style={ { display: isVisible ? 'block' : 'none' } }
                            />
                        ) }
                    </SwiperSlide>
                </Swiper>
            </Grid>
        </Box>
    );
};

export default ClubsSection;
