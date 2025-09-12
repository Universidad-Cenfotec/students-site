const ElectionsSection: React.FC = () => {

    const electionsFlyer = 'https://res.cloudinary.com/glovooker/image/upload/v1722969249/students-site/elections-flyer.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Comunidad
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-16">
                Elecciones Estudiantiles
            </h2>

            <div className="flex flex-col lg:flex-row items-center justify-around mx-auto mb-24 gap-8">
                <div className="w-full lg:w-[40%] mb-8">
                    <img src={ electionsFlyer } alt="Academic Calendar Graphic" className="w-full max-w-lg mx-auto" />
                </div>
                <div className="w-full lg:w-[55%] text-left">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="card-title text-xl sm:text-2xl font-semibold text-gray-600 mb-4">
                                ¿Deseas inscribirte como candidato para formar <span className="text-primary font-medium">parte del Consejo Estudiantil de tu escuela?</span>
                            </h3>
                            <p className="mx-auto lg:mx-0 my-8 leading-relaxed text-lg">
                                La <span className="text-primary">Universidad</span> <span className="text-primary font-din">CENFOTEC</span> invita a toda la Comunidad Estudiantil a participar del proceso electoral para elegir a los representantes estudiantiles que conformarán el Consejo Estudiantil de cada escuela. Las elecciones estudiantiles se realizarán una vez al año en el tercer periodo cuatrimestral.
                            </p>

                            <div className="alert alert-info mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <h4 className="font-bold">PERIODO DE INSCRIPCIÓN DE CANDIDATOS:</h4>
                                    <div className="text-sm">23 de setiembre al 21 de octubre, 2024</div>
                                </div>
                            </div>

                            <div className="alert alert-warning mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                                </svg>
                                <div>
                                    <h4 className="font-bold">PERIODO DE ELECCIONES ESTUDIANTILES:</h4>
                                    <div className="text-sm">28 de octubre al 01 de noviembre, 2024</div>
                                </div>
                            </div>

                            <div className="flex flex-col xl:flex-row items-center gap-4">
                                <a
                                    href='https://forms.zoho.com/pbrenes/form/Formulariodeinscripcindecandidatosparaformarparted/formperma/6A2nIg0hvdOjOTxfflMD-wS5lRyIu1d3Y7KAwp3nORU?zf_lang=es'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-primary text-white btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12"
                                >
                                    Formulario de Inscripción de candidatos
                                </a>
                                <a
                                    href='https://drive.google.com/file/d/1D8E7z6_j-IfVV8VPhWkNdtlPJ6VYDmaM/view'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 hover:text-white"
                                >
                                    Reglamento para la Organización Estudiantil
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ElectionsSection;
