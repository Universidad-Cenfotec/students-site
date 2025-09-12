"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ClientLayout from "@/layout/ClientLayout";
import BlogContent from "@/components/Community/components/BlogContent";
import { Club } from "@/types/club";

export default function ClubPage () {
    const params = useParams();
    const [club, setClub] = useState<Club | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const fetchClub = async () => {
            if (!params.id) return;
            setLoading(true);

            const apiBaseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3000";
            const res = await fetch(`${ apiBaseUrl }/api/clubs/${ params.id }`, {
                cache: "no-store",
            });

            if (res.ok) {
                const data = await res.json();
                setClub(data as Club);
            }
            setLoading(false);
        };

        fetchClub();
    }, [params.id]);

    // Loading state
    if (loading) {
        return (
            <div className="flex justify-center items-center h-80">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    // Not found
    if (!club) {
        return (
            <div className="text-center mt-6">
                <h5 className="text-xl">Club not found</h5>
            </div>
        );
    }

    // Choose whichever field you want as the hero image (banner, logo, etc.)
    const heroImageUrl = club.banner?.url || club.logo?.url;

    return (
        <ClientLayout>
            <div className="min-h-[60vh]">
                {/* Hero Image Section */ }
                { heroImageUrl && (
                    <div
                        className="relative w-full h-80 md:h-96 bg-cover bg-center flex items-center justify-center text-white text-center"
                        style={ {
                            backgroundImage: `url(${ heroImageUrl })`,
                        } }
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
                        <div className="relative z-10 max-w-4xl mx-auto px-4">
                            <h3 className="font-bold mb-2 text-3xl sm:text-4xl md:text-5xl">
                                { club.name || "Club" }
                            </h3>

                            { club.description && (
                                <p className="mb-3 max-w-2xl mx-auto text-sm sm:text-base hidden sm:block">
                                    { club.description }
                                </p>
                            ) }

                            <a
                                href='https://forms.zoho.com/pbrenes/form/Formularioparasolicituddeinscripcinaclubes/formperma/EKRpXyjTDcWKAfKjf67llWSS3hDlOGGrM_lsVKwaPUI?zf_lang=es'
                                target='_blank'
                                className="inline-block bg-primary text-white px-6 sm:px-8 md:px-12 py-2 sm:py-3 text-sm sm:text-lg md:text-xl font-semibold rounded-lg border-2 border-primary hover:border-primary hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                            >
                                ¡Inscríbete a este Club!
                            </a>
                        </div>
                    </div>
                ) }

                {/* Content Container */ }
                <div className={ `max-w-6xl mx-auto ${ heroImageUrl ? 'mt-0 md:-mt-6' : 'mt-0' } mb-8` }>
                    <div className="flex flex-col lg:flex-row gap-6">
                        {/* Sidebar - Person in Charge */ }
                        { club.hasPersonInCharge && club.personInCharge && (
                            <div className="w-full lg:w-1/4 order-2 lg:order-1">
                                <div className="p-6 rounded-xl shadow-lg bg-white sticky top-5">
                                    <h6 className="mb-4 font-semibold text-lg border-b-2 border-gray-100 pb-2">
                                        Contacto del Club
                                    </h6>
                                    <div className="flex flex-col items-center text-center">
                                        { club.personInCharge.photo?.url ? (
                                            <img
                                                src={ club.personInCharge.photo.url }
                                                alt={ club.personInCharge.name }
                                                className="w-24 md:w-28 h-24 md:h-28 mb-4 rounded-full shadow-md object-cover"
                                            />
                                        ) : (
                                                <div className="w-24 md:w-28 h-24 md:h-28 mb-4 rounded-full shadow-md bg-primary text-white flex items-center justify-center text-2xl font-bold">
                                                    { club.personInCharge.name.charAt(0) }
                                            </div>
                                        ) }
                                        <h6 className="font-semibold text-lg">
                                            { club.personInCharge.name }
                                        </h6>
                                        { club.personInCharge.title && (
                                            <p className="text-gray-600 text-sm mb-2">
                                                { club.personInCharge.title }
                                            </p>
                                        ) }
                                        { club.personInCharge.email && (
                                            <p className="mt-2 mb-2">
                                                <a
                                                    href={ `mailto:${ club.personInCharge.email }` }
                                                    className="text-primary no-underline font-medium hover:underline"
                                                >
                                                    { club.personInCharge.email }
                                                </a>
                                            </p>
                                        ) }
                                        { club.personInCharge.bio && (
                                            <>
                                                <hr className="w-full my-4" />
                                                <p className="text-sm text-gray-600 text-left italic">
                                                    { club.personInCharge.bio }
                                                </p>
                                            </>
                                        ) }
                                    </div>
                                </div>
                            </div>
                        ) }

                        {/* Main Content */ }
                        <div className={ `w-full ${ club.hasPersonInCharge ? 'lg:w-3/4' : 'w-full' } order-1 lg:order-2` }>
                            <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white">
                                {/* Club Description for Mobile */ }
                                { club.description && heroImageUrl && (
                                    <div className="block sm:hidden mb-6">
                                        <p className="font-medium">
                                            { club.description }
                                        </p>
                                        <hr className="mt-4" />
                                    </div>
                                ) }

                                {/* Club Content */ }
                                <BlogContent content={ club.content } />
                            </div>

                            {/* Gallery Section - only shown if club has gallery */ }
                            { club.hasGallery && club.gallery && club.gallery.length > 0 && (
                                <div className="mt-6">
                                    <div className="p-6 sm:p-8 rounded-xl shadow-lg bg-white">
                                        <h5 className="mb-6 font-semibold text-xl border-b-2 border-gray-100 pb-2">
                                            Galería de Actividades
                                        </h5>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                            { club.gallery.map((item, index) => (
                                                <div
                                                    key={ index }
                                                    className="h-full transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
                                                >
                                                    <div className="h-full">
                                                        <img
                                                            src={ item.image.url }
                                                            alt={ item.caption || `Image ${ index + 1 }` }
                                                            className="w-full h-44 sm:h-48 object-cover rounded-t-lg"
                                                        />
                                                        { item.caption && (
                                                            <div className="p-3">
                                                                <p className="text-sm text-gray-600 font-medium">
                                                                    { item.caption }
                                                                </p>
                                                            </div>
                                                        ) }
                                                    </div>
                                                </div>
                                            )) }
                                        </div>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
}
