import { Box, Typography } from '@mui/material';
import { GuideCard } from '../components/GuideCard';

const GuidesSection: React.FC = () => {

    const guides = [
        {
            title: 'Microsoft Word',
            link: 'https://drive.google.com/file/d/1yjSrVp49m8Ury3nryKF8bKDdK_wa1Xya/view?usp=sharing',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-word.png',
        },
        {
            title: 'Microsoft Excel',
            link: 'https://drive.google.com/file/d/1QxmyP_bQFpP4hcmpO3r5UNYDO7q27mUn/view?usp=sharing',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-excel.png',
        },
        {
            title: 'Microsoft PowerPoint',
            link: 'https://drive.google.com/file/d/1ApzyKf1IJ-IfyDyei4pb67zaXh6ighjH/view?usp=sharing',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-powerpoint.png',
        },
        {
            title: 'Discord',
            link: 'https://www.google.com/url?q=https%3A%2F%2Fsupport.discord.com%2Fhc%2Fes%2Farticles%2F360033931551-Primeros-pasos&sa=D&sntz=1&usg=AOvVaw3Rv7FmS9khnnBtMvgn24q4',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-discord.png',
        },
        {
            title: 'Slack',
            link: 'https://www.google.com/url?q=https%3A%2F%2Fslack.com%2Fintl%2Fes-cr%2Fhelp%2Farticles%2F360059928654-C%25C3%25B3mo-usar-Slack--tu-gu%25C3%25ADa-de-inicio-r%25C3%25A1pido&sa=D&sntz=1&usg=AOvVaw19EOtADWBoqlBi_X8jxUkv',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-slack.png',
        },
        // {
        //     title: 'Notion',
        //     link: '',
        //     imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-notion.png',
        // },
        {
            title: 'Python',
            link: 'https://www.google.com/url?q=https%3A%2F%2Fpython-para-impacientes.blogspot.com%2F2017%2F02%2Finstalar-python-paso-paso.html&sa=D&sntz=1&usg=AOvVaw39ZW6LA6IACpD_SrOhVi7H',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-python.png',
        },
        {
            title: 'Java',
            link: 'https://www.google.com/url?q=https%3A%2F%2Funipython.com%2Finstalar-java-netbeans-windows-os-linux%2F&sa=D&sntz=1&usg=AOvVaw3YGBOyByLxZqskmNP3GxWX',
            imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-java.png',
        },
        // {
        //     title: 'JavaScript',
        //     link: '',
        //     imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-javascript.png',
        // },
    ];

    return (
        <Box sx={ { width: '100%', height: 'auto', textAlign: { xs: 'center', md: 'left' }, my: '2rem', px: { xs: '2rem', md: '6rem' } } }>
            <Typography variant="h4" sx={ { mx: 'auto', my: '0.5rem', textAlign: { xs: 'center', md: 'left' }, fontSize: { xs: '1rem', sm: '1.125rem' }, fontWeight: 600, letterSpacing: '0.0625rem' } }>
                Academia
            </Typography>
            <Typography variant="h2" sx={ { mx: 'auto', textAlign: { xs: 'center', md: 'left' }, color: 'primary.main', fontSize: { xs: '2rem', sm: '3rem' }, fontWeight: 600 } }>
                Explora nuestras guías y manuales
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
                    maxWidth: { xs: '100%', sm: '100%', md: '90%', lg: '80%', xl: '70%' }
                } }
            >
                {
                    guides.map((guide, index) => (
                        <GuideCard
                            key={ index }
                            title={ guide.title }
                            link={ guide.link }
                            imageUrl={ guide.imageUrl }
                        />
                    ))
                }
            </Box>
        </Box >
    );
};

export default GuidesSection;
