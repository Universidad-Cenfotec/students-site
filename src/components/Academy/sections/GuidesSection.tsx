import { GuideCard } from '../components/GuideCard';

const GuidesSection: React.FC = () => {
    const guides = [
        // {
        //     title: 'Microsoft Word',
        //     link: 'https://drive.google.com/file/d/1yjSrVp49m8Ury3nryKF8bKDdK_wa1Xya/view?usp=sharing',
        //     imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-word.png',
        // },
        // {
        //     title: 'Microsoft Excel',
        //     link: 'https://drive.google.com/file/d/1QxmyP_bQFpP4hcmpO3r5UNYDO7q27mUn/view?usp=sharing',
        //     imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-excel.png',
        // },
        // {
        //     title: 'Microsoft PowerPoint',
        //     link: 'https://drive.google.com/file/d/1ApzyKf1IJ-IfyDyei4pb67zaXh6ighjH/view?usp=sharing',
        //     imageUrl: 'https://res.cloudinary.com/glovooker/image/upload/v1722920098/students-site/logo-powerpoint.png',
        // },
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
    ];

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Academia
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Explora nuestras guías y manuales
            </h2>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                        { guides.map((guide, index) => (
                            <GuideCard
                                key={ index }
                                title={ guide.title }
                                link={ guide.link }
                                imageUrl={ guide.imageUrl }
                            />
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuidesSection;
