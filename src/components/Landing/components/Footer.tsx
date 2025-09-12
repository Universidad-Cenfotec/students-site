"use client";

import Link from 'next/link';

export const Footer = () => {
    const logoUrl = 'https://res.cloudinary.com/glovooker/image/upload/v1716026565/students-site/student-affairs.png';
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer footer-center p-4 bg-primary text-white mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start mt-8">
                <div className="flex flex-col items-center text-center">
                    <div className="badge badge-outline badge-lg mb-4 text-white border-white">
                        Administrado Por
                    </div>
                    <img src={ logoUrl } alt="Student Affairs Logo" className="w-24 sm:w-28 md:w-32 h-auto brightness-0 invert" />
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="badge badge-outline badge-lg mb-4 text-white border-white">
                        Redes Sociales
                    </div>
                    <div className="flex gap-2 sm:gap-3 justify-center">
                        <Link
                            href="https://twitter.com/UCenfotec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-circle btn-ghost text-white hover:bg-white hover:text-primary"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://www.instagram.com/ucenfotec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-circle btn-ghost text-white hover:bg-white hover:text-primary"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </Link>
                        <Link
                            href="https://www.facebook.com/UCenfotec"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-circle btn-ghost text-white hover:bg-white hover:text-primary"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-center text-center">
                    <div className="badge badge-outline badge-lg mb-4 text-white border-white">
                        Portal Principal
                    </div>
                    <Link
                        href="https://ucenfotec.ac.cr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost border border-white text-white hover:bg-white hover:text-primary"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        ucenfotec.ac.cr
                    </Link>
                </div>
            </div>

            <div className="divider divider-white/20"></div>

            <div className="text-center">
                <p className="text-sm text-white/80">
                    © { currentYear } UCENFOTEC | Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
};
