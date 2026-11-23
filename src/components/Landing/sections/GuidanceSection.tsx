"use client";

import React, { useEffect, useRef, useState } from 'react';
import { BlogCard } from '@/components/Community/components/BlogCard';
import { BlogPost } from '@/types/blog';
import { StudentKitGraphic } from '@/components/Landing/components/Graphics';

interface GuidanceSectionProps {
    blogPosts?: BlogPost[];
}

const GuidanceSection: React.FC<GuidanceSectionProps> = ({ blogPosts }) => {
    const studentCouncilGraphic = 'https://res.cloudinary.com/glovooker/image/upload/v1722830884/students-site/student-council.png';
    const [posts, setPosts] = useState<BlogPost[]>(blogPosts || []);

    // Fallback: Si no se enviaron blogPosts por props, intentamos cargar los blogs directamente desde la API de Payload
    useEffect(() => {
        if (!blogPosts || blogPosts.length === 0) {
            fetch('/api/blogs')
                .then((res) => res.json())
                .then((data) => {
                    if (data?.docs) {
                        setPosts(data.docs);
                    } else if (Array.isArray(data)) {
                        setPosts(data);
                    }
                })
                .catch((err) => console.error("Error al obtener los artículos del blog:", err));
        } else {
            setPosts(blogPosts);
        }
    }, [blogPosts]);

    // Filtrar publicaciones válidas (publicadas o sin propiedad status definida)
    const publishedPosts = posts.filter((post) => !post.status || post.status === "published");

    // Referencia para controlar el carrusel automático
    const carouselRef = useRef<HTMLDivElement>(null);

    // Efecto para el movimiento automático del carrusel
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel || publishedPosts.length <= 1) return;

        const interval = setInterval(() => {
            const cardWidth = 320 + 24; // Ancho de la tarjeta (w-80 = 320px) + espacio (space-x-6 = 24px)
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

            if (carousel.scrollLeft >= maxScrollLeft - 10) {
                // Regresa suavemente al inicio cuando llega al final
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Avanza a la siguiente tarjeta
                carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
            }
        }, 3500); // Se desplaza cada 3.5 segundos

        return () => clearInterval(interval);
    }, [publishedPosts.length]);

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-40 px-8 md:px-24">
            {/* Header original - OCULTO */}
            {/* 
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Sitio de Estudiantes
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                ¿Necesitas guía?
            </h2>
            */}

            {/* Student Kit Section - HIDDEN */}
            {/* <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2">
                            <StudentKitGraphic className="w-full h-auto" />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                                Saca Provecho de Nuestro
                            </h3>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                Kit de Estudiante
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                                Un conjunto de recursos recopilados por estudiantes para estudiantes. Desde guías paso a paso para primeros ingresos, hasta herramientas digitales y sistemas de estudio avanzados, nuestro <span className="text-primary font-semibold">Kit de Estudiante</span> será un apoyo crucial durante tu experiencia <span className="text-primary font-semibold">CENFOTEC</span>.
                            </p>
                            <a
                                href='https://ucenfotec-students-kit.notion.site/Students-Kit-2a5a1bfb7f4e4bc2a57d732078c5ec36?pvs=73'
                                target='_blank'
                                rel="noopener noreferrer"
                                className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl hover:!text-white transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                Abrir Kit
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* Blog Section converted into an Automatic and Dynamic Carousel */}
            <div className="card bg-base-100 shadow-xl mb-16">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col mb-8 text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                            No Te Pierdas de
                        </h3>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                            Nuestras Novedades
                        </h3>
                    </div>

                    {publishedPosts.length > 0 ? (
                        <div className="relative w-full">
                            <div 
                                ref={carouselRef}
                                className="carousel carousel-center w-full space-x-6 p-4 bg-base-200/50 rounded-box overflow-x-auto scroll-smooth"
                            >
                                {publishedPosts.map((post) => (
                                    <div key={post.id} className="carousel-item">
                                        <BlogCard
                                            id={post.id}
                                            title={post.title}
                                            description={post.description}
                                            imageUrl={post.image?.url || "/placeholder.jpg"}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center w-full py-3 gap-2 text-xs text-gray-400">
                                Desliza manualmente o espera el movimiento automático &larr; &rarr;
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="alert alert-info">
                                <div>
                                    <h3 className="font-bold">No hay artículos disponibles</h3>
                                    <div className="text-sm">Próximamente se publicarán nuevas novedades en el blog</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Student Council Section */}
            {/* <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2">
                            <img src={ studentCouncilGraphic } alt="Student Council" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="w-full lg:w-1/2 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-600 mb-2">
                                ¿Deseas formar parte del
                            </h3>
                            <h3 className="text-2xl sm:text-3xl font-semibold text-secondary mb-6">
                                Consejo Estudiantil de tu escuela?
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                                La <span className="text-primary font-semibold">Universidad</span> <span className="text-primary font-din font-semibold">CENFOTEC</span> invita a toda la Comunidad Estudiantil a participar del proceso electoral para elegir a los representantes estudiantiles que conformarán el Consejo Estudiantil de cada escuela. Las elecciones estudiantiles se realizarán una vez al año en el tercer periodo cuatrimestral.
                            </p>
                            <a
                                href='/community/student-council'
                                className="btn btn-outline btn-secondary btn-lg text-base sm:text-xl font-semibold px-8 sm:px-12 shadow-lg hover:shadow-xl hover:!text-white transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Conocer Más
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default GuidanceSection;