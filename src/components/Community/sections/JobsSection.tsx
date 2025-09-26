const JobsSection: React.FC = () => {
    const jobsGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722971999/students-site/jobs-graphic.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Comunidad
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Explora nuevas oportunidades
            </h2>

            <div className="card bg-base-100 shadow-xl mb-24">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row-reverse items-center justify-between mx-auto">
                        <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
                            <img src={ jobsGraphic } alt="Jobs Graphic" className="w-4/5 mx-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-2/5 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                                <span className="text-gray-600">Bolsa de</span><span className="text-secondary text-2xl sm:text-3xl font-semibold"> Trabajo</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span> ofrece una gran oportunidad, en la que, a través de nuestra plataforma, podrán visualizar ofertas, postularse y comunicarse directamente con las empresas en las que hay mayor interés, de manera que sea un proceso transparente y confiable.
                            </p>

                            <div className="alert alert-success mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <h4 className="font-bold">Oportunidades Laborales</h4>
                                    <div className="text-sm">Conecta con empresas líderes en tecnología</div>
                                </div>
                            </div>

                            <a
                                href='https://ucenfotec.ac.cr/bolsatrabajo/'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-primary text-white btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                                </svg>
                                Ver Puestos Disponibles
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsSection;
