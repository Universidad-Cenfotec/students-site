import React from "react";
import { Club } from "@/types/club";
import { ClubCard } from "@/components/Community/components/ClubCard";

interface ClubSectionProps {
    clubs: Club[];
}

export default function ClubSection ({ clubs }: ClubSectionProps) {
    // Filter out inactive clubs
    const activeClubs = clubs.filter((club) => club.status === "active");

    return (
        <div className="w-full max-w-7xl mx-auto h-auto text-center md:text-left my-8 px-8 md:px-24 min-h-[60vh]">
            <div className="badge badge-primary badge-lg mb-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
                Comunidad
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold text-primary mb-8">
                Clubes Estudiantiles
            </h2>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body p-8 lg:p-12">
                    { activeClubs.length > 0 ? (
                        <div className="flex flex-wrap justify-center gap-8">
                            { activeClubs.map((club) => (
                                <ClubCard
                                    key={ club.id }
                                    id={ club.id }
                                    title={ club.name }
                                    description={ club.description }
                                    imageUrl={ club.banner?.url || club.logo?.url || "/placeholder.jpg" }
                                />
                            )) }
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <div className="alert alert-info">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <div>
                                    <h3 className="font-bold">No hay clubes disponibles</h3>
                                    <div className="text-sm">Próximamente se publicarán nuevos clubes estudiantiles</div>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
}
