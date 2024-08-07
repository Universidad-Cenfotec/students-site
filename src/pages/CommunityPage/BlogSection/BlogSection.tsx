import { Box, Typography } from '@mui/material';
import { BlogCard } from './components';

export const BlogSection = () => {
    const blogPosts = [
        {
            title: 'Olimpiadas de Computación Inteligente: ¡Soluciones para el mundo real!',
            description: '¡Atención estudiantes universitarios! Pon a prueba tu ingenio y talento en las Olimpiadas de Computación Inteligente. Desarrollando un sistema ciberfísico para resolver problemas reales y gana premios.',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722973076/students-site/blog-1.png',
        },
        {
            title: 'Estudiantes de Pavas, Alajuelita, Cartago, Grecia fueron beneficiados con becas de excelencia otorgadas por la Universidad CENFOTEC',
            description: 'Universidad CENFOTEC entregó becas de excelencia para estudiantes de primer ingreso y maestría promoviendo la diversidad y destacando logros excepcionales.',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722973076/students-site/blog-2.png',
        },
        {
            title: 'Universidad CENFOTEC organizará Feria de Empleo de la mano de grandes empresas tecnológicas',
            description: 'No se pierda de ExpoCENFO este martes 28 y miércoles 29 de noviembre. Lea aquí más información.',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722973076/students-site/blog-3.png',
        },
        {
            title: 'Costa Rica es sede de la primera competencia Web3 en latinoamérica',
            description: 'Pura Vida CTF: ¡Primera competencia Web3 en Latinoamérica! 100 programadores en Costa Rica se enfrentan a retos de blockchain. #Web3 #CostaRica #PuraVidaCTF #DojoCoding',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722973076/students-site/blog-4.png',
        },
        {
            title: 'Becas de Excelencia 100% para primer ingreso',
            description: 'Estas becas son para vos, aplica para una beca de excelencia del 100% para iniciar tus estudios universitarios en enero 2024.',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722973075/students-site/blog-5.png',
        },
        {
            title: 'La IA generativa revolucionará la productividad individual y empresarial en 2024',
            description: 'La industria ahora se centra en las personas, su bienestar, creatividad y el cómo pueden desarrollar su máximo potencial en sus lugares de trabajo.',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722973076/students-site/blog-6.png',
        },
    ];
    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '10rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Comunidad
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Descubre nuestro contenido
            </Typography>
            <Box
                sx={ {
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    flexWrap: 'wrap',
                    gap: '4rem',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mx: 'auto',
                    my: '4rem',
                    maxWidth: '100%'
                } }
            >
                { blogPosts.map((blog) => (
                    <BlogCard
                        title={ blog.title }
                        description={ blog.description }
                        imageUrl={ blog.imageUrl }
                    />
                )) }
            </Box>
        </Box>
    );
};
