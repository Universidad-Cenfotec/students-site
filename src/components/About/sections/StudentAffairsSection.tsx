import { LifeBuoyIcon, MapIcon, BriefcaseIcon } from '@/components/About/components';

const StudentAffairsSection: React.FC = () => {
    const logoUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1719730516/students-site/student-affairs-lg.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left mt-8 mb-16 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Sobre Nosotros
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Bienestar Estudiantil
            </h2>

            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                                <span className="text-gray-600">Nuestro Departamento de</span><span className="text-secondary text-2xl sm:text-3xl font-semibold"> Bienestar Estudiantil</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Somos el departamento dedicado a acompañar al estudiantado en su vida académica, ofreciendo servicios de seguimiento, apoyo psicoeducativo, becas, cultura, deporte y bolsa de empleo. Trabajamos en coordinación con las Escuelas y otros departamentos para promover el <span className="text-primary font-semibold">bienestar integral</span> de cada estudiante.
                            </p>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={ logoUrl } alt="Student Affairs Logo" className="w-full max-w-lg mx-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-8">
                {/* Feature 1 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='https://ucenfotec.ac.cr/bolsatrabajo/'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <BriefcaseIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Bolsa de Trabajo
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Conectamos empresas con los mejores perfiles tecnológicos y damos seguimiento a la colocación laboral de nuestro estudiantado.
                        </p>
                    </div>
                </div>

                {/* Feature 2 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='#support-services'
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <LifeBuoyIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Apoyo Psicológico y Psicoeducativo
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ofrecemos orientación y herramientas para mejorar el desempeño académico de los y las estudiantes.
                        </p>
                    </div>
                </div>

                {/* Feature 3 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='#support-services'
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <MapIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Orientación Vocacional
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Contamos con profesionales que ofrecen orientación vocacional para guiarte en tu desarrollo académico y profesional.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentAffairsSection;
