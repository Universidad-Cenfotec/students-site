const CurrentCouncilSection: React.FC = () => {

    const currentCouncilMember1 = 'https://res.cloudinary.com/glovooker/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_blue,b_rgb:262c35/v1765559038/students-site/TatianaSolisQuesada.jpg';
    const currentCouncilMember2 = 'https://res.cloudinary.com/glovooker/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_blue,b_rgb:262c35/v1765559263/students-site/DanielaMoralesMelendez.jpg';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Comunidad
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Consejo de la Escuela de Ingeniería de Software
            </h2>

            <div className="space-y-8 my-16">
                {/* Member 1 - Tatiana Solís Quesada */ }
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                            {/* Left side - Picture and titles */ }
                            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                                <div className="avatar mb-4">
                                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full">
                                        <img src={ currentCouncilMember1 } alt='Tatiana Solís Quesada' className="object-cover object-top" />
                                    </div>
                                </div>
                                <h3 className="card-title text-xl sm:text-2xl font-semibold text-secondary mb-2 text-center lg:text-left">
                                    Tatiana Solís Quesada
                                </h3>
                                <p className="text-gray-600 text-base sm:text-lg font-semibold text-center lg:text-left">
                                    Estudiante del Bachillerato en Ingeniería de Software
                                </p>
                            </div>

                            {/* Right side - Quote */ }
                            <div className="w-full lg:w-2/3 flex items-center">
                                <div className="w-full">
                                    <div className="divider lg:hidden mb-4"></div>
                                    <blockquote className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                                        "Me interesa involucrarme activamente en la vida universitaria y siento que formar parte del equipo electoral estudiantil es una gran oportunidad para aportar de manera responsable y con compromiso a la comunidad de CENFOTEC. Me motiva contribuir a que la participación estudiantil sea cada vez más sólida, justa e inclusiva, creando un espacio seguro para los estudiantes. Además, sé que esta experiencia me ayudará a seguir creciendo en habilidades como el liderazgo, la organización y el trabajo en equipo, mientras aporto con entusiasmo a nuestra comunidad estudiantil. Estoy convencida de que puedo ofrecer una visión amplia como estudiante, proponiendo ideas creativas que ayuden a la comunidad estudiantil a sentirse parte de nuestra Universidad. Considero que este espacio no solo me permitirá aprender de los demás, sino también impulsar soluciones que promuevan la unión, la colaboración y un ambiente universitario más participativo, inclusivo y enriquecedor para todos."
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Member 2 - Daniela Morales Meléndez */ }
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                            {/* Left side - Picture and titles */ }
                            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                                <div className="avatar mb-4">
                                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full">
                                        <img src={ currentCouncilMember2 } alt='Daniela Morales Meléndez' className="object-cover object-top" />
                                    </div>
                                </div>
                                <h3 className="card-title text-xl sm:text-2xl font-semibold text-secondary mb-2 text-center lg:text-left">
                                    Daniela Morales Meléndez
                                </h3>
                                <p className="text-gray-600 text-base sm:text-lg font-semibold text-center lg:text-left">
                                    Estudiante del Bachillerato en Ingeniería de Software
                                </p>
                            </div>

                            {/* Right side - Quote */ }
                            <div className="w-full lg:w-2/3 flex items-center">
                                <div className="w-full">
                                    <div className="divider lg:hidden mb-4"></div>
                                    <blockquote className="text-sm sm:text-base text-gray-600 leading-relaxed italic">
                                        "Mi objetivo es contribuir al fortalecimiento de la imagen de las mujeres en tecnología, impulsar los clubes estudiantiles de la universidad y reforzar la relación entre el estudiantado y los directivos. Deseo promover proyectos de intercambio de conocimiento y espacios de networking con otras universidades del mundo, así como desarrollar actividades de impacto tecnológico y social que permitan a los estudiantes de CENFOTEC destacar y proyectar su talento. Busco fortalecer tanto la imagen de la institución como la de sus estudiantes y profesores, e incentivar a la comunidad estudiantil a construir una relación con su alma mater que vaya más allá de obtener un título: una conexión basada en el crecimiento, la colaboración y el orgullo de pertenecer a CENFOTEC."
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentCouncilSection;
