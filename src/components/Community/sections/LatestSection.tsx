const LatestSection: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Comunidad
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Lo más reciente en nuestras noticias
            </h2>

            <div className="card bg-base-100 shadow-xl mb-24">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col items-center justify-between mx-auto">
                        <div className="w-full mb-8">
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                                    src={ 'https://www.youtube.com/embed/8_sZJtCdGS8?si=9ieD0pU_ocmqv02e' }
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="Embedded youtube"
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                Conoce a Jeremy Villegas
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Un joven talentoso que combina su pasión por la tecnología con su habilidad en el ajedrez. Estudiante destacado de Ingeniería de Software en <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span>, Jeremy es un campeón universitario de ajedrez y ha representado a su país en diversas competencias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestSection;
