"use client";

import { useEffect, useState } from 'react';
import { HeroBackground } from '@/components/Landing/components/HeroBackground';

const HeroSection: React.FC = () => {
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const [rightStyle, setRightStyle] = useState<string | number>(0);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint
                setRightStyle(window.innerWidth > 1600 ? 0 : 'calc(40% - 37.8rem)');
            }
        };

        handleResize(); // Initial check client-side
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <div className="relative pt-16 pb-4 overflow-hidden h-screen w-full">
                <div className="px-0 sm:px-0 md:px-0 lg:px-20 xl:px-24 py-20 sm:py-20 md:py-20 mx-auto sm:mx-auto md:mx-auto lg:mx-0 xl:mx-0 max-w-7xl">
                    <div className="badge badge-primary badge-lg mb-4 text-xs sm:text-sm font-semibold tracking-wider text-white">
                        Universidad CENFOTEC
                    </div>

                    <h1 className="text-secondary text-xl sm:text-3xl md:text-4xl lg:text-7xl leading-tight mb-6 w-[85%] text-center lg:text-left mx-auto sm:mx-auto md:mx-auto lg:mx-0 xl:mx-0">
                        Explora la Experiencia <span className="text-primary text-7xl sm:text-11xl md:text-13xl lg:text-14xl leading-none font-din">CENFOTEC</span>
                    </h1>

                    <div className="divider"></div>

                    <p className="text-text text-center lg:text-left w-full md:w-full lg:w-3/4 mt-4 text-lg leading-relaxed">
                        Abre las puertas a un mundo de conocimiento y vanguardia en <span className="text-primary font-din font-semibold">CENFOTEC</span>. Sumérgete en un ambiente donde la pasión se convierte en excelencia y donde cada paso te acerca a tus metas profesionales.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a
                            href='#features'
                            className="btn btn-primary text-white btn-lg text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mx-auto sm:mx-auto md:mx-auto lg:mx-0 xl:mx-0 shadow-lg hover:shadow-xl transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                            ¡Explorar!
                        </a>
                        <a
                            href='#academy'
                            className="btn btn-outline btn-secondary btn-lg text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mx-auto sm:mx-auto md:mx-auto lg:mx-0 xl:mx-0 shadow-lg hover:shadow-xl hover:!text-white transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            Academia
                        </a>
                    </div>
                </div>
            </div>
            { isLargeScreen && (
                <HeroBackground
                    style={ {
                        position: 'absolute',
                        top: 0,
                        right: rightStyle,
                        maxHeight: '90%',
                    } }
                />
            ) }
        </>
    );
};

export default HeroSection;
