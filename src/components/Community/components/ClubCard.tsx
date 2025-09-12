"use client";

import { useRouter } from "next/navigation";

interface ClubCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    style?: React.CSSProperties;
}

export const ClubCard = ({ id, title, description, imageUrl, style }: ClubCardProps) => {
    const router = useRouter();

    return (
        <div
            onClick={ () => router.push(`/community/clubs/${ id }`) }
            className="card w-80 h-[455px] bg-base-100 shadow-lg hover:shadow-xl cursor-pointer transition-shadow duration-200"
            style={ style }
        >
            <figure className="h-[236px] overflow-hidden relative">
                <img
                    src={ imageUrl }
                    alt={ title }
                    className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4">
                    <div className="badge badge-primary badge-sm text-white">
                        Club
                    </div>
                </div>
            </figure>
            <div className="card-body text-left p-6">
                <h2 className="card-title text-secondary font-semibold text-xl leading-tight line-clamp-3 mb-3">
                    { title }
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    { description }
                </p>
                <div className="card-actions justify-end mt-auto">
                    <div className="btn btn-outline btn-primary btn-sm hover:!text-white">
                        Ver más
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
