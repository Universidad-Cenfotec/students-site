import { AwardIcon, FileIcon, MonitorIcon } from '@/components/Academy/components';

const CalendarSection: React.FC = () => {
    const academicCalendarGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722969249/students-site/academic-calendar-graphic.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Academia
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Accede al calendario y a los reglamentos
            </h2>

            <div className="card bg-base-100 shadow-xl mb-24">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                            <img src={ academicCalendarGraphic } alt="Academic Calendar Graphic" className="w-full rounded-lg" />
                        </div>
                        <div className="w-full lg:w-2/5 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                                Calendario
                            </h3>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                Académico
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span> ofrece un Calendario Académico anual para carreras cuatrimestrales y técnicos por microcursos. Cada enlace lleva al documento en PDF descargable. Además, cada rubro dirige a enlaces con más información o formularios según el trámite necesario.
                            </p>
                            <a
                                href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/c%C3%B3mo-puedo-ver-el-calendario-acad%C3%A9mico-ucenfotec'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-primary text-white btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Acceso al Calendario Académico
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Feature 1 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-acad%C3%A9mico'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <FileIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Reglamento Académico
                        </h3>
                        <div className="card-actions justify-end mt-4">
                            <a
                                href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-acad%C3%A9mico'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-primary btn-sm hover:text-white"
                            >
                                Ver Documento
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Feature 2 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-de-r%C3%A9gimen-estudiantil'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <AwardIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Reglamento Régimen Estudiantil
                        </h3>
                        <div className="card-actions justify-end mt-4">
                            <a
                                href='https://centrodeasistencia.ucenfotec.ac.cr/portal/es/kb/articles/reglamento-de-r%C3%A9gimen-estudiantil'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-primary btn-sm hover:text-white"
                            >
                                Ver Documento
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Feature 3 */ }
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="card-body items-center text-center p-8">
                        <div className="mb-4">
                            <a
                                href='https://drive.google.com/file/d/1uQyrBTEHeipNHPt8ja1MaKXXxSY1kNuG/view?usp=sharing'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-primary text-white w-24 h-24 rounded-3xl flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <MonitorIcon className="text-4xl text-white" />
                            </a>
                        </div>
                        <h3 className="card-title text-2xl font-semibold text-secondary mb-4">
                            Lineamientos Sesiones Sincrónicas y Presenciales
                        </h3>
                        <div className="card-actions justify-end mt-4">
                            <a
                                href='https://drive.google.com/file/d/1uQyrBTEHeipNHPt8ja1MaKXXxSY1kNuG/view?usp=sharing'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-primary btn-sm hover:text-white"
                            >
                                Ver Documento
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarSection;
