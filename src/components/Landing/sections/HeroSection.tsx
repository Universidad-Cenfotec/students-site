"use client";

import LetterGlitch from '@/components/Landing/components/LetterGlitch';
import RotatingText from '@/components/Landing/components/RotatingText';

const HeroSection: React.FC = () => {

    return (
        <>
            <div className="relative overflow-hidden h-screen w-full">
                {/* LetterGlitch Background */ }
                <div className="absolute inset-0 z-0">
                    <LetterGlitch
                        glitchSpeed={ 100 }
                        centerVignette={ true }
                        outerVignette={ true }
                        smooth={ true }
                        glitchColors={ ['#006AEA', '#00479B'] }
                    />
                </div>

                <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                    <div className="text-center">
                        <div className="badge badge-primary badge-lg mb-8 text-xs sm:text-sm font-semibold tracking-wider text-white">
                            Universidad CENFOTEC
                        </div>

                        <div className="mb-6 w-full max-w-[90vw] sm:w-[700px] md:w-[800px] lg:w-[900px] xl:w-[1000px] mx-auto">
                            <RotatingText
                                texts={ ['Sitio de Estudiantes', 'Tu Espacio Digital', 'Comunidad Estudiantil', 'Recursos Compartidos', 'Experiencias Reales'] }
                                mainClassName="px-4 sm:px-6 md:px-8 bg-primary text-white overflow-hidden py-2 sm:py-3 md:py-4 justify-center rounded-xl text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold w-full"
                                staggerFrom="last"
                                initial={ { y: "100%" } }
                                animate={ { y: 0 } }
                                exit={ { y: "-120%" } }
                                staggerDuration={ 0.025 }
                                splitLevelClassName="overflow-hidden pb-1 sm:pb-2 md:pb-2"
                                transition={ { type: "spring", damping: 30, stiffness: 400 } }
                                rotationInterval={ 3000 }
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;
