"use client";

import React, { useEffect, useState } from "react";
import { ClubCard } from "@/components/Community/components/ClubCard";
import { Club } from "@/types/club";

const ClubsSection: React.FC = () => {
    const [clubs, setClubs] = useState<Club[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClubs = async () => {
            try {
                const apiBaseUrl = process.env.NEXT_PUBLIC_PAYLOAD_URL ?? "http://localhost:3000";
                const res = await fetch(`${ apiBaseUrl }/api/clubs?limit=6`, { cache: "no-store" });
                if (!res.ok) throw new Error("Failed to fetch clubs");

                const data = await res.json();
                setClubs(data.docs);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchClubs();
    }, []);

    if (loading) {
        return (
            <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-32 px-8 md:px-24">
                <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                    Sitio de Estudiantes
                </div>
                <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                    ¿Ya conoces nuestros clubes?
                </h2>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body items-center justify-center h-96">
                        <div className="loading loading-spinner loading-lg text-primary"></div>
                        <p className="text-gray-600 mt-4">Cargando clubes...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-32 px-8 md:px-24">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Sitio de Estudiantes
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                ¿Ya conoces nuestros clubes?
            </h2>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    <div className="flex flex-wrap justify-center gap-8">
                        { clubs.map((club) => (
                            <ClubCard
                                key={ club.id }
                                id={ club.id }
                                title={ club.name }
                                description={ club.description }
                                imageUrl={ club.banner?.url ?? club.logo?.url ?? "/placeholder.jpg" }
                            />
                        )) }
                    </div>

                    <div className="divider"></div>

                    <div className="text-center">
                        <p className="text-gray-600 mb-6">
                            Descubre más clubes y únete a la comunidad estudiantil
                        </p>
                        <a
                            href="/community/clubs"
                            className="btn btn-outline btn-primary btn-lg shadow-lg hover:shadow-xl hover:!text-white transition-all duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Ver Todos los Clubes
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClubsSection;
