import React from 'react';

const AssistanceSection: React.FC = () => {
    const assistanceGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722973898/students-site/assitance-graphic.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Soporte
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Centro de Asistencia
            </h2>

            <div className="card bg-base-100 shadow-xl mb-24">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-2/5 mb-8 lg:mb-0">
                            <img src={ assistanceGraphic } alt="Assistance Graphic" className="w-11/12 mx-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-2/5 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                                Visita Nuestro
                            </h3>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                Centro de Asistencia
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                El <span className="text-primary font-semibold">Centro de Asistencia</span> es el principal medio de comunicación, por el cual podrá ponerse en contacto con cualquiera de los departamentos de la Universidad a través de un tiquete de soporte.
                            </p>

                            <div className="alert alert-info mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <h4 className="font-bold">¿Necesitas ayuda?</h4>
                                    <div className="text-sm">Crea un tiquete de soporte para contactar con cualquier departamento</div>
                                </div>
                            </div>

                            <a
                                href='https://www.google.com/url?q=https%3A%2F%2Fdesk.zoho.com%2Fportal%2Fcenfotec868%2Fes%2Fsignin&sa=D&sntz=1&usg=AOvVaw1K-vm-FqVyOLRGMsxgG1Tu'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-primary text-white btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Abrir Tiquete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssistanceSection;
