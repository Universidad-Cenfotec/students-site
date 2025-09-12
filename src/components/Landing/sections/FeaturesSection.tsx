import { CommentIcon, HeartIcon, SearchIcon } from '@/components/Landing/components/Icons';

const FeaturesSection: React.FC = () => {
    return (
        <div id="features" className="w-full max-w-7xl mx-auto h-auto text-center md:text-left mb-40 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Sitio de Estudiantes
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-primary mb-8">
                ¿Qué puedes hacer?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
                {/* Feature 1 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='/academy'
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <SearchIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Explorar Oportunidades
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Encuentra una amplia gama de recursos académicos, desde guías de estudio hasta oportunidades de crecimiento profesional.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='/community'
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <CommentIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Conectar con la Comunidad
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Únete al vibrante ecosistema estudiantil, donde podrás colaborar, compartir ideas y crear conexiones valiosas.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='/about'
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <HeartIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Encontrar Apoyo y Asistencia
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Accede a servicios de soporte dedicados al bienestar estudiantil, diseñados para ayudarte en cada paso de tu jornada educativa.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
