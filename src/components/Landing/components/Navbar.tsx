"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={ `navbar sticky top-0 z-50 transition-all duration-300 ${ isScrolled ? 'bg-base-100 shadow-lg' : 'bg-transparent shadow-none' }` }>
            <div className="navbar-start">
                {/* Mobile menu button */ }
                <div className="dropdown lg:hidden">
                    <div tabIndex={ 0 } role="button" className="btn btn-ghost btn-circle" onClick={ toggleDrawer }>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </div>

                {/* Logo */ }
                <Link href="/" className="btn btn-ghost text-xl">
                    <img src='/images/logo.png' alt="Logo" className="h-10 w-auto" />
                </Link>
            </div>

            {/* Desktop Navigation */ }
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <Link href="/" className={ `btn btn-sm ${ isActive('/') ? 'btn-primary text-white' : 'btn-ghost' }` }>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={ `btn btn-sm ${ isActive('/about') ? 'btn-primary text-white' : 'btn-ghost' }` }>
                            Sobre Nosotros
                        </Link>
                    </li>
                    <li>
                        <Link href="/academy" className={ `btn btn-sm ${ isActive('/academy') ? 'btn-primary text-white' : 'btn-ghost' }` }>
                            Academia
                        </Link>
                    </li>
                    <li className="dropdown dropdown-hover">
                        <div tabIndex={ 0 } role="button" className={ `btn btn-sm ${ isActive('/community') ? 'btn-primary text-white' : 'btn-ghost' }` }>
                            Comunidad
                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <ul tabIndex={ 0 } className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-xl">
                            <li>
                                <Link href="/community" className={ `flex items-center gap-3 ${ isActive('/community') && pathname !== '/community/student-council' && pathname !== '/community/clubs' ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` }>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/community/student-council" className={ `flex items-center gap-3 ${ isActive('/community/student-council') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` }>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Consejo Estudiantil
                                </Link>
                            </li>
                            <li>
                                <Link href="/community/clubs" className={ `flex items-center gap-3 ${ isActive('/community/clubs') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` }>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Clubes
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/support" className={ `btn btn-sm ${ isActive('/support') ? 'btn-primary text-white' : 'btn-ghost' }` }>
                            Soporte
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Right side - empty to maintain center alignment */ }
            <div className="navbar-end">
            </div>

            {/* Mobile Drawer */ }
            { isDrawerOpen && (
                <div className="drawer-side z-50">
                    <div className="drawer-overlay" onClick={ closeDrawer }></div>
                    <div className="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
                        <div className="flex items-center justify-between mb-6">
                            <img src='/images/logo.png' alt="Logo" className="h-8" />
                            <button onClick={ closeDrawer } className="btn btn-ghost btn-sm btn-circle">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <ul className="menu p-0 w-full">
                            <li>
                                <Link href="/" className={ `flex items-center gap-3 text-lg ${ isActive('/') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` } onClick={ closeDrawer }>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Inicio
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={ `flex items-center gap-3 text-lg ${ isActive('/about') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` } onClick={ closeDrawer }>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li>
                                <Link href="/academy" className={ `flex items-center gap-3 text-lg ${ isActive('/academy') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` } onClick={ closeDrawer }>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    Academia
                                </Link>
                            </li>
                            <li>
                                <div className="divider my-2"></div>
                                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Comunidad</span>
                            </li>
                            <li>
                                <Link href="/community" className={ `flex items-center gap-3 text-lg ${ isActive('/community') && pathname !== '/community/student-council' && pathname !== '/community/clubs' ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` } onClick={ closeDrawer }>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/community/student-council" className={ `flex items-center gap-3 text-lg ${ isActive('/community/student-council') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` } onClick={ closeDrawer }>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Consejo Estudiantil
                                </Link>
                            </li>
                            <li>
                                <Link href="/community/clubs" className={ `flex items-center gap-3 text-lg ${ isActive('/community/clubs') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` } onClick={ closeDrawer }>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                    Clubes
                                </Link>
                            </li>
                            <li>
                                <div className="divider my-2"></div>
                            </li>
                            <li>
                                <Link href="/support" className={ `flex items-center gap-3 text-lg ${ isActive('/support') ? 'bg-primary text-white hover:bg-primary hover:text-white' : 'hover:bg-base-200' }` } onClick={ closeDrawer }>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                                    </svg>
                                    Soporte
                                </Link>
                            </li>
                        </ul>

                        <div className="mt-auto pt-6">
                            <Link href="/support" className="btn btn-primary text-white w-full" onClick={ closeDrawer }>
                                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                                </svg>
                                Obtener Ayuda
                            </Link>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};
