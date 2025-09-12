const CurrentCouncilSection: React.FC = () => {

    const currentCouncilMember1 = 'https://res.cloudinary.com/glovooker/image/upload/v1734318011/students-site/Abel_Corrales_Vargas.jpg';
    const currentCouncilMember2 = 'https://res.cloudinary.com/glovooker/image/upload/v1734318011/students-site/VargasJaramilloJoseIgnacio.jpg';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Comunidad
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Consejo de la Escuela de Ingeniería de Software
            </h2>

            <div className="space-y-8 my-16">
                {/* Member 1 - Abel Corrales Vargas */ }
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                            {/* Left side - Picture and titles */ }
                            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                                <div className="avatar mb-4">
                                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full">
                                        <img src={ currentCouncilMember1 } alt='Abel Corrales Vargas' className="object-cover object-top" />
                                    </div>
                                </div>
                                <h3 className="card-title text-xl sm:text-2xl font-semibold text-secondary mb-2 text-center lg:text-left">
                                    Abel Corrales Vargas
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
                                        "De manera personal, me consideraría sumamente feliz de poder ser una más de las personas que promueven que nuestra universidad sea un lugar integral, seguro y activo para todas las personas. Considero que puedo aportar una representación significativa para los estudiantes de la escuela de Software, y en lo que mis habilidades y tiempo me permitan, estar a disposición de escuchar y dialogar con los demás estudiantes para cualquier idea, problema o solicitud que yo como representante pueda abarcar"
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Member 2 - Jose Ignacio Vargas Jaramillo */ }
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                            {/* Left side - Picture and titles */ }
                            <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
                                <div className="avatar mb-4">
                                    <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full">
                                        <img src={ currentCouncilMember2 } alt='Jose Ignacio Vargas Jaramillo' className="object-cover object-top" />
                                    </div>
                                </div>
                                <h3 className="card-title text-xl sm:text-2xl font-semibold text-secondary mb-2 text-center lg:text-left">
                                    Jose Ignacio Vargas Jaramillo
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
                                        "Quiero formar parte del consejo para romper esa brecha de comunicación entre los estudiantes. Crear una comunidad estudiantil y robusta, llena de actividades sociales dentro y fuera de la universidad. Fomentar competencias dentro de la universidad para  el continuo aprendizaje. Me interesa mucho abrir la puerta del diseño de videojuegos por medio de game jams universitarios en los cuales los estudiantes compitan entre sí. Otro de mis principales puntos de enfoque es la comunicación entre estudiantes de diferentes grados. Para esto me interesa la creación de canales de comunicación abiertos para cualquier estudiante en donde la comunidad estudiantil pueda preguntar sobre cursos, profesores y demás actividades de la universidad. Por último y no menos importante, promover actividades sociales como fiesta de bienvenida, cada inicio de cuatrimestre, torneos de videojuegos y eventos universitarios en donde se va a poder exponer su emprendimiento a los demás estudiantes"
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
