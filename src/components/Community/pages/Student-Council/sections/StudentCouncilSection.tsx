const StudentCouncilSection: React.FC = () => {

    const studentCouncilGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722830884/students-site/student-council.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Comunidad
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                ¿Qué es el Consejo Estudiantil?
            </h2>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-between mx-auto mb-16">
                <div className="w-full lg:w-[45%] text-left">
                    <p className="mx-auto lg:mx-0 my-8 leading-relaxed text-lg">
                        El <span className="text-primary font-medium">Consejo Estudiantil</span> es el órgano de máxima representación estudiantil y estará constituido por estudiantes de cada Escuela, respetando el debido proceso democrático de elección estudiantil, tiene como finalidad, el facilitar la participación de la comunidad estudiantil en la expresión de los intereses académicos y formativos en el ámbito universitario.
                    </p>
                </div>
                <div className="w-full lg:w-[45%] my-8 lg:my-0">
                    <img src={ studentCouncilGraphic } alt="Student Council Graphic" className="w-full max-w-4xl" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start justify-between mx-auto mb-16 gap-8">
                <div className="w-full lg:w-[45%] text-left">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight">
                                <span className="text-gray-600">Requisitos para formar parte del</span><span className="text-secondary text-xl sm:text-2xl font-semibold"> Consejo Estudiantil de la Escuela:</span>
                            </h3>
                            <ul className="list-decimal list-inside space-y-3">
                                <li className="text-gray-700">
                                    Ser mayor de edad.
                                </li>
                                <li className="text-gray-700">
                                    Ser estudiante activo (periodo 2025-3) de la <span className="text-primary">Universidad</span> <span className="text-primary font-din">CENFOTEC</span> en el momento de la elección. La suspensión de estudios y la aplicación de una sanción disciplinaria, hará perder la calidad de representante estudiantil.
                                </li>
                                <li className="text-gray-700">
                                    No desempeñar cargos administrativos o docentes dentro de la <span className="text-primary">Universidad</span> <span className="text-primary font-din">CENFOTEC</span>.
                                </li>
                                <li className="text-gray-700">
                                    No estar sancionado disciplinaria o académicamente por la <span className="text-primary">Universidad</span> <span className="text-primary font-din">CENFOTEC</span>.
                                </li>
                                <li className="text-gray-700">
                                    No estar o haber estado involucrado en alguna situación de acoso y hostigamiento sexual.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[45%] text-left">
                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h3 className="text-xl sm:text-2xl font-semibold mb-4 leading-tight">
                                <span className="text-gray-600">Responsabilidades de los representantes</span><span className="text-secondary text-xl sm:text-2xl font-semibold"> del Consejo Estudiantil de la Escuela:</span>
                            </h3>
                            <ul className="list-decimal list-inside space-y-3">
                                <li className="text-gray-700">
                                    Participar activa y responsablemente en los proyectos establecidos por la Dirección de Escuela.
                                </li>
                                <li className="text-gray-700">
                                    Participar en el Consejo de Escuela.
                                </li>
                                <li className="text-gray-700">
                                    Promover la participación y colaboración de la comunidad estudiantil en las actividades universitarias.
                                </li>
                                <li className="text-gray-700">
                                    Conformar comisiones o comités Ad-hoc que fortalezcan la participación estudiantil.
                                </li>
                                <li className="text-gray-700">
                                    Favorecer un diálogo fluido y respetuoso entre estudiantes y autoridades universitarias.
                                </li>
                                <li className="text-gray-700">
                                    Desarrollar actividades que favorezcan la vida universitaria.
                                </li>
                                <li className="text-gray-700">
                                    Canalizar inquietudes de los estudiantes con la Dirección de la Escuela.
                                </li>
                                <li className="text-gray-700">
                                    Respetar el Estatuto Orgánico, el Reglamento de Régimen Estudiantil y el Reglamento Académico de la <span className="text-primary">Universidad</span> <span className="text-primary font-din">CENFOTEC</span>, desarrollando su actividad en el ámbito universitario.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCouncilSection;
