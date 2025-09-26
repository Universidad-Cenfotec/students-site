const SupportServicesSection: React.FC = () => {
    const sexualHarassment1 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679902/students-site/sexual-harassment-1.png';
    const sexualHarassment2 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-2.jpg';
    const sexualHarassment3 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-3.jpg';
    const sexualHarassment4 = 'https://res.cloudinary.com/glovooker/image/upload/v1726679901/students-site/sexual-harassment-4.jpg';

    const caic1 = 'https://res.cloudinary.com/glovooker/image/upload/v1726720206/students-site/caic-1.jpg';
    const studyClub1 = 'https://res.cloudinary.com/glovooker/image/upload/v1740619505/students-site/Estudiadero-Cuatrimestre-1-WhatsApp.png';

    return (
        <div id='support-services' className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-16 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Sobre Nosotros
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Servicios de Apoyo
            </h2>

            {/* Sexual Harassment Campaign Section 1 */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                                <span className="text-gray-600">Campaña Informativa,</span><span className="text-secondary text-2xl sm:text-3xl font-semibold"> NO al Acoso Sexual</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                                La <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span> cuenta con un Reglamento con base a la Ley N° 7476, para prevenir, prohibir y sancionar el acoso y hostigamiento sexual.
                            </p>
                            <a
                                href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-contra-el-hostigamiento-sexual'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl hover:text-white transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Enlace al Reglamento
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={ sexualHarassment1 } alt="Sexual Harassment Campaign Graphic 1" className="w-full max-w-lg mx-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* What is Sexual Harassment Section */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                ¿Sabes qué es acoso sexual?
                            </h3>
                            <div className="alert alert-warning mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                                <div>
                                    <h4 className="font-bold">Tipos de Acoso Sexual</h4>
                                    <div className="text-sm">Conoce las diferentes formas de acoso sexual</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="badge badge-primary badge-sm mt-1 text-white">1</div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Promesas, amenazas, piropos con carácter sexual.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="badge badge-primary badge-sm mt-1 text-white">2</div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Acercamientos corporales de naturaleza sexual.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="badge badge-primary badge-sm mt-1 text-white">3</div>
                                    <p className="text-gray-600 leading-relaxed">
                                        Conversaciones en redes sociales donde se exponga la integridad de una persona.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={ sexualHarassment2 } alt="Sexual Harassment Campaign Graphic 2" className="w-full max-w-lg mx-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Law Information Section */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                            ¿Sabías que existe una ley que sanciona el acoso?
                        </h3>
                        <p className="text-gray-600 text-lg mb-6">
                            Ley contra el Hostigamiento Sexual en el Empleo y la Docencia
                        </p>
                        <a
                            href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-contra-el-hostigamiento-sexual'
                            target='_blank'
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl hover:text-white transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Enlace a Ley N° 7476
                        </a>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <img src={ sexualHarassment3 } alt="Sexual Harassment Campaign Graphic 3" className="w-full max-w-80 mx-auto rounded-lg" />
                        <img src={ sexualHarassment4 } alt="Sexual Harassment Campaign Graphic 4" className="w-full max-w-80 mx-auto rounded-lg" />
                    </div>

                    <div className="divider"></div>

                    <div className="text-center">
                        <div className="alert alert-info mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <div>
                                <h4 className="font-bold">¿Necesitas ayuda?</h4>
                                <div className="text-sm">Centro de Asistencia: 6000-8054 / 6000-8055</div>
                            </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6 max-w-4xl mx-auto">
                            Si necesitas ayuda o más información, acércate por medio de Centro de Asistencia y envía un ticket al Departamento de Bienestar Estudiantil o a los teléfonos: 6000-8054 / 6000-8055
                        </p>
                        <a
                            href='https://forms.zohopublic.com/pbrenes/form/Formulariodedenunciaporacososexual/formperma/DxuvWLkNh89w4ijmj6XrTvLZD7JDDZLvTVrZg5CvRPw?zf_lang=es'
                            target='_blank'
                            rel="noopener noreferrer"
                            className="btn btn-primary text-white btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Formulario de Denuncia
                        </a>
                    </div>
                </div>
            </div>

            {/* CAIC Section */ }
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                            Centro de Apoyo para la Inclusión (CAIC)
                        </h3>
                        <img src={ caic1 } alt="CAIC Flyer" className="w-full max-w-2xl mx-auto rounded-lg mb-8" />
                        <a
                            href='https://forms.zoho.com/pbrenes/form/FormulariodesolicituddeapoyoseducativosCentrodeApo/formperma/wy922Tnm9sVL-eefC9q4XC3rIgzvfiRtaXAkHpDzU3I'
                            target='_blank'
                            rel="noopener noreferrer"
                            className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl hover:text-white transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Solicitud de Apoyos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportServicesSection;
