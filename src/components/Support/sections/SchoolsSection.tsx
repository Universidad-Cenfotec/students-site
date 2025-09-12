const SchoolsSection: React.FC = () => {
    const logos = [
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Cybersecurity-Color.png',
            heading: 'Escuela de Ciberseguridad',
            email: 'ecib@ucenfotec.ac.cr',
            director: 'Edgar Zamora Gatgens',
            assistant: 'Stacy Brenes Gamboa',
            phone: '6184-3874',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Intelligent-Systems-Color.png',
            heading: 'Escuela de Sistemas Inteligentes',
            email: 'esint@ucenfotec.ac.cr',
            director: 'Tomás de Camino Beck',
            assistant: 'Gabriela Urbina Hernández',
            phone: '6294-6231',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327319/students-site/Information-Systems-Color.png',
            heading: 'Escuela de Sistemas de Información',
            email: 'esinf@ucenfotec.ac.cr',
            director: 'María Isabel Losilla Barrientos',
            assistant: 'Michelle Montero Quesada',
            phone: '6391-2374',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Information-Technology-Color.png',
            heading: 'Escuela de Tecnologías de Información',
            email: 'eti@ucenfotec.ac.cr',
            director: 'Jason Ulloa Hernández',
            assistant: 'Rocío Sandí Corrales',
            phone: '6184-3721',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Software-Engineering-Color.png',
            heading: 'Escuela de Ingeniería del Software',
            email: 'esoft@ucenfotec.ac.cr',
            director: 'Sergio Oviedo Seas',
            assistant: 'Ingrid Mora Segura',
            phone: '6391-2632',
        },
        {
            src: 'https://res.cloudinary.com/glovooker/image/upload/v1734327318/students-site/Computing-Fundamentals-Color.png',
            heading: 'Escuela de Fundamentos',
            email: 'efun@ucenfotec.ac.cr',
            director: 'Christian Sibaja Fernández',
            assistant: 'Álvaro Ospina Beltrán',
            phone: '6097-2749',
        },
    ];

    return (
        <div className="w-full max-w-7xl mx-auto text-center my-32 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Soporte
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Contactos de las Escuelas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                { logos.map((logo, index) => (
                    <div key={ index } className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="card-body p-6">
                            <div className="flex flex-col sm:flex-row items-center justify-start">
                                <div className="w-1/3 text-center mb-4 sm:mb-0 sm:mr-8">
                                    <img src={ logo.src } alt={ logo.heading } className="w-full max-w-32 mx-auto rounded-lg" />
                                </div>
                                <div className="w-full sm:w-4/5 text-left">
                                    <h3 className="card-title text-secondary text-xl font-semibold mb-4">
                                        { logo.heading }
                                    </h3>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <div className="badge badge-outline badge-sm">Email</div>
                                            <a
                                                href={ `mailto:${ logo.email }` }
                                                className="text-primary hover:text-primary-focus transition-colors duration-200"
                                            >
                                                { logo.email }
                                            </a>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="badge badge-outline badge-sm">Director</div>
                                            <span className="text-gray-600">{ logo.director }</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="badge badge-outline badge-sm">Asistente</div>
                                            <span className="text-gray-600">{ logo.assistant }</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <div className="badge badge-outline badge-sm">Teléfono</div>
                                            <a
                                                href={ `tel:${ logo.phone }` }
                                                className="text-primary hover:text-primary-focus transition-colors duration-200"
                                            >
                                                { logo.phone }
                                            </a>
                                        </div>
                                    </div>

                                    <div className="card-actions justify-end mt-4">
                                        <a
                                            href={ `mailto:${ logo.email }` }
                                            className="btn btn-outline btn-primary btn-sm hover:text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            Contactar
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default SchoolsSection;
