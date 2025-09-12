const DiversityStatementSection: React.FC = () => {
    const graphicUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1719732500/students-site/diversity-statement-graphic.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-40 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Sobre Nosotros
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Enunciado de Diversidad
            </h2>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col items-center justify-center mx-auto w-full">
                        <div className="w-full mb-8">
                            <img src={ graphicUrl } alt="Diversity Statement Graphic" className="w-full max-w-lg mx-auto rounded-lg" />
                        </div>

                        <div className="w-full text-left">
                            <div className="alert alert-info mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <h3 className="font-bold">Compromiso con la Diversidad</h3>
                                    <div className="text-sm">Celebramos las transformaciones sociales que han permitido el acceso universal a la educación</div>
                                </div>
                            </div>

                            <div className="prose max-w-none">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    En la <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span> celebramos las transformaciones sociales que han permitido que cada vez más personas accedan a su derecho a la educación, a través de la ruptura de paradigmas que han sostenido la desigualdad. Caminamos hacia el reconocimiento de nuestras diferencias, que enriquecen el tejido social, promoviendo el acceso universal al conocimiento, la creación y la investigación.
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Nuestra comunidad universitaria: estudiantes, docentes, equipo administrativo y demás personas que la conforman es cada vez más diversa y recibimos con orgullo a cada nueva generación de estudiantes que se embarca en un nuevo proyecto educativo. Nos comprometemos a trabajar siempre por el bienestar social, con la misma dignidad y derechos para todas las personas, sin distinción de nacionalidad, etnia, identidad de género, orientación sexual, estatus socioeconómico, condición de discapacidad, edad, etc; así como a garantizar una educación inclusiva, equitativa y de calidad.
                                </p>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Hacemos conscientes las reformas educativas necesarias para este propósito y la integración como un hecho natural que nos acerque, día a día, a la universalidad deseada.
                                </p>

                                <div className="divider"></div>

                                <p className="text-gray-600 leading-relaxed">
                                    Fomentamos el empoderamiento de nuestra población estudiantil, y toda persona que forma parte de nuestra Universidad, de manera que sostenga estos principios en alto, como un principio indispensable para la excelencia. Trabajamos con voluntad y dedicación para que, quienes alguna vez hayan experimentado la exclusión, reconozcan en nuestra institución un espacio seguro, de diálogo y respeto mutuo, en el que siempre se reconozca el honor y la dignidad de todas y todos sus miembros.
                                </p>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                                <div className="badge badge-outline badge-sm">Inclusión</div>
                                <div className="badge badge-outline badge-sm">Equidad</div>
                                <div className="badge badge-outline badge-sm">Diversidad</div>
                                <div className="badge badge-outline badge-sm">Respeto</div>
                                <div className="badge badge-outline badge-sm">Excelencia</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiversityStatementSection;
