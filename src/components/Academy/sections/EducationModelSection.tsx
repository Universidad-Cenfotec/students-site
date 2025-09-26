const EducationModelSection: React.FC = () => {
    const educationModelGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722830884/students-site/education-model-graphic.png';
    const xperiencedMethodologyGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722835186/students-site/xperienced-methodology.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Academia
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                ¿Qué es un modelo educativo?
            </h2>

            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-2/5 text-left">
                            <p className="text-gray-600 leading-relaxed">
                                Un modelo educativo abarca diferentes elementos interrelacionados, como el proceso de construcción del conocimiento, la enseñanza, el aprendizaje y la evaluación. Estos elementos se combinan para proporcionar un marco integral que promueva un aprendizaje activo, significativo y efectivo en los estudiantes. Al adoptar este modelo, se busca fomentar el desarrollo de habilidades, competencias y actitudes que preparen a la población estudiantil para enfrentar los desafíos de la sociedad actual y futura.
                            </p>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <img src={ educationModelGraphic } alt="Education Model Graphic" className="w-full max-w-lg mx-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8 lg:p-12">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                            <span className="text-gray-600">Modelo por</span><span className="text-secondary text-2xl sm:text-3xl font-semibold"> Competencias</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Se enfoca en el desarrollo de las habilidades prácticas y competencias relevantes para el mundo laboral y social. Busca preparar al estudiantado para enfrentar desafíos reales, promoviendo el aprendizaje activo, la aplicación de conocimientos en contextos auténticos y la evaluación basada en la demostración de competencias, se adapta a las demandas de la sociedad actual, donde la capacidad de aplicar el conocimiento de manera efectiva es tan importante como el conocimiento en sí mismo.
                        </p>

                        <div className="divider"></div>

                        <div className="badge badge-outline badge-lg mb-4">Características</div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Enfocado en la actuación o desempeño laboral y profesional de estudiante.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Utiliza resultados de aprendizaje más prácticos y orientados en la resolución de problemas, ejecución de funciones e interacción en equipos de trabajo.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    La <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span> con el modelo por competencias le apuesta a una educación moderna y significativa.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Se basa en la construcción del conocimiento y no en el cumplimiento de objetivos.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body p-8 lg:p-12">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                            <span className="text-gray-600">Modalidad</span><span className="text-secondary text-2xl sm:text-3xl font-semibold"> Virtual en Vivo</span>
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Esta modalidad permite a la población estudiantil tener formación en vivo a través de videoconferencia, sin desplazarse. Aprovecha las ventajas de interactuar en tiempo real con docentes que usan metodologías efectivas como aprendizaje basado en proyectos y resolución de problemas. Combina sesiones sincrónicas obligatorias con la opción de revisar grabaciones para una experiencia educativa enriquecedora.
                        </p>

                        <div className="divider"></div>

                        <div className="badge badge-outline badge-lg mb-4">Características</div>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Aprendizaje basado en proyectos, resolución de problemas, estudio de casos, entre otros.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Sesiones sincrónicas de asistencias obligatorias, oportunidad de repasar por medio de grabaciones.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Uso de laboratorios virtuales, plataforma Google Workspace y Moodle, así como canales de comunicación.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Actividades de formación y socialización presenciales, en combinación con modalidad virtual en vivo.
                                </p>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="badge badge-primary badge-sm mt-1 text-white">•</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Tutorías virtuales en vivo disponibles para algunas áreas, apoyo de estudiantes con formación avanzada.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-2/5 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                                <span className="text-gray-600">Metodología</span><span className="text-secondary text-2xl sm:text-3xl font-semibold"> XperiencEd™</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Incorporando el enfoque experiencial de Kolb, la <span className="text-primary font-semibold">Metodología XperiencEd™ </span>promueve un aprendizaje significativo y contextualizado. Este enfoque permite aplicar conceptos teóricos a situaciones reales, fortaleciendo la comprensión y las competencias prácticas. La metodología dedica el 20% del tiempo a la explicación magistral, el 60% a la experiencia práctica y el 20% a la retroalimentación, fomentando un aprendizaje activo y orientado a las necesidades del mundo laboral en tecnologías digitales y áreas afines.
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                <div className="badge badge-outline badge-sm">20% Teoría</div>
                                <div className="badge badge-outline badge-sm">60% Práctica</div>
                                <div className="badge badge-outline badge-sm">20% Retroalimentación</div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5">
                            <img src={ xperiencedMethodologyGraphic } alt="XperiencEd Methodology Graphic" className="w-full max-w-lg mx-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationModelSection;
