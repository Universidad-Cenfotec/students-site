import React from 'react';
import { BlogGraphic, StudentKitGraphic } from '@/components/Landing/components/Graphics';

const GuidanceSection: React.FC = () => {

    const electionsGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1726848070/students-site/elections.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-40 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Sitio de Estudiantes
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                ¿Necesitas guía?
            </h2>

            {/* Student Kit Section - HIDDEN */ }
            {/* <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2">
                            <StudentKitGraphic className="w-full h-auto" />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                                Saca Provecho de Nuestro
                            </h3>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                Kit de Estudiante
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                                Un conjunto de recursos recopilados por estudiantes para estudiantes. Desde guías paso a paso para primeros ingresos, hasta herramientas digitales y sistemas de estudio avanzados, nuestro <span className="text-primary font-semibold">Kit de Estudiante</span> será un apoyo crucial durante tu experiencia <span className="text-primary font-semibold">CENFOTEC</span>.
                            </p>
                            <a
                                href='https://ucenfotec-students-kit.notion.site/Students-Kit-2a5a1bfb7f4e4bc2a57d732078c5ec36?pvs=73'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl hover:!text-white transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Abrir Kit
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Blog Section */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                                No Te Pierdas de
                            </h3>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                Nuestras Novedades
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                                Entérate siempre de lo que está sucediendo en nuestra comunidad. Podrás estar al tanto de artículos, actividades, talleres, charlas, eventos, nuevos clubes, recursos, y mucho más a través de nuestro <span className="text-primary font-semibold">Blog Universitario</span>, siempre al día con las últimas novedades dentro de <span className="text-primary font-semibold">CENFOTEC</span>.
                            </p>
                            <a
                                href="/community/blog"
                                className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl hover:!text-white transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                </svg>
                                Visitar Blog
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <BlogGraphic className="w-full lg:w-5/6 h-auto" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Student Council Section - HIDDEN */ }
            {/* <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2">
                            <img src={ electionsGraphic } alt="Elecciones" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                                ¿Deseas formar parte del
                            </h3>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                Consejo Estudiantil de tu escuela?
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                                La <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span> invita a toda la Comunidad Estudiantil a participar del proceso electoral para elegir a los representantes estudiantiles que conformarán el Consejo Estudiantil de cada escuela. Las elecciones estudiantiles se realizarán una vez al año en el tercer periodo cuatrimestral.
                            </p>
                            <a
                                href='/community/student-council'
                                className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl hover:!text-white transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Conocer Más
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default GuidanceSection;
