import { Map } from '@/components/Landing/components/Map';

const MapSection: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-40 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Sitio de Estudiantes
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                ¿Deseas visitarnos?
            </h2>

            <div className="bg-base-100 rounded-3xl shadow-xl p-8 lg:p-12">
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-secondary mb-4">
                        Ubicación de CENFOTEC
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Visita nuestras instalaciones y conoce de cerca el ambiente universitario que te espera.
                        Estamos ubicados en un lugar estratégico para tu desarrollo académico.
                    </p>
                </div>

                <div className="my-8 max-w-[90%] mx-auto">
                    <div className="my-8" style={ { position: 'relative', zIndex: 1 } }>
                        <Map />
                    </div>
                </div>

                <div className="divider"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                        <div className="badge badge-outline badge-lg mb-2">Horarios</div>
                        <p className="text-sm text-gray-600">
                            Lunes a Viernes<br />
                            7:00 AM - 10:00 PM
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="badge badge-outline badge-lg mb-2">Contacto</div>
                        <p className="text-sm text-gray-600">
                            Tel: (506) 4000-5000<br />
                            info@cenfotec.ac.cr
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="badge badge-outline badge-lg mb-2">Servicios</div>
                        <p className="text-sm text-gray-600">
                            Biblioteca, Laboratorios<br />
                            Áreas de Estudio
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapSection;
