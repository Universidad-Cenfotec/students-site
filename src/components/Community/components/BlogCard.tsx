"use client";

import { useRouter } from "next/navigation";

interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    style?: React.CSSProperties;
}

export const BlogCard = ({ id, title, description, imageUrl, style }: BlogCardProps) => {
    const router = useRouter(); // Next.js navigation

    return (
        <div
            onClick={ () => router.push(`/community/blog/${ id }`) }
            className="card w-80 h-[455px] bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
            style={ style }
        >
            <figure className="h-[236px] overflow-hidden relative">
                <img
                    src={ imageUrl }
                    alt={ title }
                    className="w-full h-full object-cover object-top transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                    <div className="badge badge-primary badge-sm text-white">
                        Artículo
                    </div>
                </div>
            </figure>
            <div className="card-body text-left p-6">
                <h2 className="card-title text-secondary font-semibold text-xl leading-tight line-clamp-3 mb-3 hover:text-primary transition-colors duration-200">
                    { title }
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                    { description }
                </p>
                <div className="card-actions justify-end mt-auto">
                    <div className="btn btn-outline btn-primary btn-sm hover:!text-white">
                        Leer más
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};
