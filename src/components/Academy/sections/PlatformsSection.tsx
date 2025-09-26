import React from 'react';

const PlatformsSection: React.FC = () => {
    const platformsVideoPlaceholderGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722883320/students-site/platforms-video-placeholder.png';
    const assistanceCenterLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883926/students-site/logo-centro-asistencia.png';
    const gmailLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883926/students-site/logo-gmail.png';
    const selfserviceLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883927/students-site/logo-autoservicio.png';
    const meetLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883926/students-site/logo-meet.png';
    const moodleLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883927/students-site/logo-moodle.png';
    const zelayaLibraryLogo = 'https://res.cloudinary.com/glovooker/image/upload/v1722883926/students-site/logo-biblioteca-ignacio-trejos-zelaya.png';

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Academia
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Conoce nuestras plataformas
            </h2>

            {/* Video Section */ }
            <div className="card bg-base-100 shadow-xl mb-24">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-2/5 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold mb-2 leading-tight">
                                <span className="text-gray-600">Video Informativo Sobre el</span><span className="text-secondary text-2xl sm:text-3xl font-semibold"> Uso de las Plataformas</span>
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                A continuación, se muestran las diferentes plataformas que utiliza la universidad para el manejo de los diferentes cursos. Como estudiante de la <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span>, tendrás acceso a diferentes plataformas, a continuación encontrará un video informativo explicando cada una de ellas:
                            </p>
                            <a
                                href='https://drive.google.com/file/d/1Sa7iCv-jPC60Gp3tIdz9KFvlIl-Xm1OQ/view?usp=sharing'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-secondary btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl hover:text-white transition-shadow duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Video Informativo
                            </a>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <img src={ platformsVideoPlaceholderGraphic } alt="Platforms Video Placeholder Graphic" className="w-full max-w-lg mx-auto rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Assistance Center */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <img src={ assistanceCenterLogo } alt="Assistance Center Logo" className="w-full max-w-60 mx-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-3/4 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                                Centro de Asistencia
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                El Centro de Asistencia es el principal medio de comunicación con los departamentos de la Universidad a través de tiquetes de soporte. Puede iniciar sesión con su correo institucional (@ucenfotec) usando la opción 'Google' o crear un usuario manualmente. Al ingresar, podrá crear tiquetes desde 'Agregar Tiquete' y seleccionar el departamento adecuado. Recibirá respuestas por correo electrónico y un mensaje de cierre una vez resuelto el caso.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href='https://www.google.com/url?q=https%3A%2F%2Fcentrodeasistencia.ucenfotec.ac.cr%2Fportal%2Fes%2Fsignin&sa=D&sntz=1&usg=AOvVaw1w7zTbLRWka2Hi0qIhehUE'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-primary text-white btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    Enlace Directo
                                </a>
                                <a
                                    href='https://drive.google.com/file/d/1JXB_1BcveV84CXMjJ-xOHCzlTFddtejz/view?usp=sharing'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl hover:text-white transition-shadow duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Enlace al Manual
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gmail */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <img src={ gmailLogo } alt="Gmail Logo" className="w-full max-w-60 mx-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-3/4 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                                Correo Institucional
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Como estudiante de la Universidad CENFOTEC, tendrás acceso a una cuenta institucional de correo. Esta será esencial para el contacto con el profesorado, estudiantes, personal administrativo y visualización de materiales en tus cursos. Si no tienes acceso, crea un tiquete al departamento de TIC en el Centro de Asistencia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href='http://gmail.com/'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-primary text-white btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    Enlace Directo
                                </a>
                                <a
                                    href='https://drive.google.com/file/d/1g_eSdPWqUcK0soH5XaCS1CllwJUEYzVO/view?usp=sharing'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl hover:text-white transition-shadow duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Enlace al Manual
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Self Service */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <img src={ selfserviceLogo } alt="Self Service Logo" className="w-full max-w-60 mx-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-3/4 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                                Auto Servicio
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                La plataforma del Auto Servicio permite ver el progreso de tu carrera, cursos disponibles, notas oficiales y realizar la matrícula automáticamente. Recibirás por correo el enlace a la plataforma, un manual de uso y las credenciales necesarias. Usa tu correo institucional (@ucenfotec) para iniciar sesión con 'Google'. Se recomienda utilizar Google Chrome o Mozilla Firefox. Si no tienes acceso, acude al Centro de Asistencia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href='https://www.google.com/url?q=https%3A%2F%2Fautoservicio.ucenfotec.ac.cr%2Flogin&sa=D&sntz=1&usg=AOvVaw02sJsMaE89NnVrE2k36Ek_'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-primary text-white btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    Enlace Directo
                                </a>
                                <a
                                    href='https://drive.google.com/file/d/1S9MhVGGtoCuTRQ8CulihRVEkFw4mf6F5/view?usp=sharing'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl hover:text-white transition-shadow duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Enlace al Manual
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Meet */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <img src={ meetLogo } alt="Meet Logo" className="w-full max-w-60 mx-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-3/4 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                                Google Meet
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Google Meet es la plataforma oficial para clases sincrónicas y sesiones virtuales en la universidad. Accede a través de tu correo institucional y consulta el enlace con tu docente si tienes problemas. Meet permite grabar clases, organizar salas, hacer encuestas, actividades en grupos, y usar la pizarra digital Jamboard. Es una plataforma gratuita incluida en Google Workspace.
                            </p>
                            <a
                                href='https://drive.google.com/file/d/1weozk5K0qioQQPR1Wlxy_-fxl0lUKeQB/view?usp=sharing'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-primary btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Enlace al Manual
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Moodle */ }
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <img src={ moodleLogo } alt="Moodle Logo" className="w-full max-w-60 mx-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-3/4 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                                Moodle
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Moodle es la plataforma para acceder a las aulas virtuales de tus cursos. Encontrarás enlaces a clases, comunicación con docentes, grabaciones, sílabos, material semanal y espacios para tareas. Recibirás el enlace y credenciales por correo. Usa tu correo institucional para iniciar sesión con 'Google'. Se recomienda Google Chrome o Mozilla Firefox. Si no tienes acceso, crea un tiquete al departamento de Educación Virtual en el Centro de Asistencia.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href='https://www.google.com/url?q=https%3A%2F%2Fmoodle.ucenfotec.ac.cr%2Flogin%2Findex.php&sa=D&sntz=1&usg=AOvVaw10A_qWvr6486kV1TNHQrTF'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-primary text-white btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                    Enlace Directo
                                </a>
                                <a
                                    href='https://drive.google.com/file/d/1_oAxgfRXohm5Am_59_t_GAZudRUhlhmj/view?usp=sharing'
                                    target='_blank'
                                    rel="noopener noreferrer"
                                    className="btn btn-outline btn-primary btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl hover:text-white transition-shadow duration-200"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Enlace al Manual
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Library */ }
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto">
                        <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
                            <img src={ zelayaLibraryLogo } alt="Ignacio Trejos Zelaya Library Logo" className="w-full max-w-60 mx-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-3/4 text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-4">
                                Biblioteca Ignacio Trejos Zelaya
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                La Biblioteca Ignacio Trejos Zelaya, es un centro de información en computación e informática de la Universidad Cenfotec, con un acervo bibliográfico en su mayoría digital.
                            </p>
                            <a
                                href='https://www.google.com/url?q=https%3A%2F%2Fsites.google.com%2Fucenfotec.ac.cr%2Fbiblioteca-ignacio-trejos-zela%3Fpli%3D1&sa=D&sntz=1&usg=AOvVaw1BzTmZyEFn7IigIfPWSyYX'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-primary text-white btn-lg text-sm sm:text-base font-semibold px-6 sm:px-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                                Enlace Directo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlatformsSection;
