"use client";

import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

type MenuItem = {
    label: string;
    href: string;
    ariaLabel?: string;
    rotation?: number;
    hoverStyles?: {
        bgColor?: string;
        textColor?: string;
    };
    submenu?: {
        label: string;
        href: string;
        ariaLabel?: string;
    }[];
};

export type CustomBubbleMenuProps = {
    logo: ReactNode | string;
    onMenuClick?: (open: boolean) => void;
    className?: string;
    style?: CSSProperties;
    menuAriaLabel?: string;
    menuBg?: string;
    menuContentColor?: string;
    useFixedPosition?: boolean;
    items?: MenuItem[];
    animationEase?: string;
    animationDuration?: number;
    staggerDelay?: number;
};

const CENFOTEC_ITEMS: MenuItem[] = [
    {
        label: 'Inicio',
        href: '/',
        ariaLabel: 'Inicio',
        rotation: -8,
        hoverStyles: { bgColor: '#006AEA', textColor: '#ffffff' }
    },
    {
        label: 'Sobre Nosotros',
        href: '/about',
        ariaLabel: 'Sobre Nosotros',
        rotation: 8,
        hoverStyles: { bgColor: '#00479B', textColor: '#ffffff' }
    },
    {
        label: 'Academia',
        href: '/academy',
        ariaLabel: 'Academia',
        rotation: 8,
        hoverStyles: { bgColor: '#3abff8', textColor: '#ffffff' }
    },
    {
        label: 'Comunidad',
        href: '/community',
        ariaLabel: 'Comunidad',
        rotation: 8,
        hoverStyles: { bgColor: '#37cdbe', textColor: '#ffffff' },
        submenu: [
            {
                label: 'Blog',
                href: '/community/blog',
                ariaLabel: 'Blog'
            },
            {
                label: 'Consejo Estudiantil',
                href: '/community/student-council',
                ariaLabel: 'Consejo Estudiantil'
            },
            {
                label: 'Clubes',
                href: '/community/clubs',
                ariaLabel: 'Clubes'
            }
        ]
    },
    {
        label: 'Soporte',
        href: '/support',
        ariaLabel: 'Soporte',
        rotation: -8,
        hoverStyles: { bgColor: '#7C7B75', textColor: '#ffffff' }
    }
];

export default function CustomBubbleMenu ({
    logo,
    onMenuClick,
    className,
    style,
    menuAriaLabel = 'Toggle menu',
    menuBg = '#fff',
    menuContentColor = '#111',
    useFixedPosition = false,
    items,
    animationEase = 'back.out(1.5)',
    animationDuration = 0.5,
    staggerDelay = 0.12
}: CustomBubbleMenuProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
    const [submenuItemsWithRotations, setSubmenuItemsWithRotations] = useState<any[]>([]);
    const pathname = usePathname();

    const overlayRef = useRef<HTMLDivElement>(null);
    const bubblesRef = useRef<HTMLButtonElement[]>([]);
    const labelRefs = useRef<HTMLSpanElement[]>([]);
    const submenuBubblesRef = useRef<HTMLButtonElement[]>([]);
    const submenuLabelRefs = useRef<HTMLSpanElement[]>([]);

    const menuItems = items?.length ? items : CENFOTEC_ITEMS;

    const containerClassName = [
        'bubble-menu',
        useFixedPosition ? 'fixed' : 'absolute',
        'left-0 right-0 top-8',
        'flex items-center justify-between',
        'gap-4 px-8',
        'pointer-events-none',
        'z-[1001]',
        className
    ]
        .filter(Boolean)
        .join(' ');

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }

        // For exact matches, use exact comparison
        if (pathname === path) {
            return true;
        }

        // For main menu items, use startsWith for section highlighting
        return pathname.startsWith(path);
    };

    const handleToggle = () => {
        if (activeSubmenu !== null) {
            // If in submenu, go back to main menu
            setActiveSubmenu(null);
        } else {
            // Toggle main menu
            const nextState = !isMenuOpen;
            if (nextState) setShowOverlay(true);
            setIsMenuOpen(nextState);
            onMenuClick?.(nextState);
        }
    };

    const handleMainItemClick = (e: React.MouseEvent, item: MenuItem, index: number) => {
        e.preventDefault();
        if (item.submenu) {
            // Add fixed rotations to submenu items (keep original order)
            const itemsWithRotations = item.submenu.map((subItem, idx) => ({
                ...subItem,
                rotation: [3, -5, 7][idx] || 0 // Fixed rotations: 3°, -5°, 7°
            }));
            setSubmenuItemsWithRotations(itemsWithRotations);
            setActiveSubmenu(index);
        } else {
            // Navigate directly if no submenu
            window.location.href = item.href;
        }
    };

    const handleSubmenuBack = () => {
        setActiveSubmenu(null);
    };

    const handleSubmenuItemClick = (href: string) => {
        window.location.href = href;
    };

    // Function to scramble array
    const scrambleArray = <T,> (array: T[]): T[] => {
        const scrambled = [...array];
        for (let i = scrambled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
        }
        return scrambled;
    };

    useEffect(() => {
        const overlay = overlayRef.current;
        const bubbles = bubblesRef.current.filter(Boolean);
        const labels = labelRefs.current.filter(Boolean);
        const submenuBubbles = submenuBubblesRef.current.filter(Boolean);
        const submenuLabels = submenuLabelRefs.current.filter(Boolean);
        if (!overlay) return;

        if (isMenuOpen) {
            gsap.set(overlay, { display: 'flex' });

            if (activeSubmenu === null) {
                // Show main menu
                gsap.killTweensOf([...bubbles, ...labels, ...submenuBubbles, ...submenuLabels]);

                // Reset all elements
                gsap.set(bubbles, { scale: 0, transformOrigin: '50% 50%', autoAlpha: 1 });
                gsap.set(labels, { y: 24, autoAlpha: 0 });
                gsap.set(submenuBubbles, { scale: 0, autoAlpha: 0 });
                gsap.set(submenuLabels, { y: 24, autoAlpha: 0 });

                bubbles.forEach((bubble, i) => {
                    if (bubble && i < menuItems.length) {
                        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
                        const tl = gsap.timeline({ delay });
                        tl.to(bubble, {
                            scale: 1,
                            duration: animationDuration,
                            ease: animationEase
                        });
                        if (labels[i]) {
                            tl.to(
                                labels[i],
                                {
                                    y: 0,
                                    autoAlpha: 1,
                                    duration: animationDuration,
                                    ease: 'power3.out'
                                },
                                '-=' + animationDuration * 0.9
                            );
                        }
                    }
                });
            } else {
                // Show submenu
                gsap.killTweensOf([...bubbles, ...labels, ...submenuBubbles, ...submenuLabels]);
                gsap.set(bubbles, { scale: 0, autoAlpha: 0 });
                gsap.set(labels, { y: 24, autoAlpha: 0 });
                gsap.set(submenuBubbles, { scale: 0, transformOrigin: '50% 50%', autoAlpha: 1 });
                gsap.set(submenuLabels, { y: 24, autoAlpha: 0 });

                // Small delay to ensure DOM is ready
                setTimeout(() => {
                    submenuBubbles.forEach((bubble, i) => {
                        if (bubble) {
                            const subItem = submenuItemsWithRotations[i];
                            const rotation = subItem?.rotation || 0;
                            const isDesktop = window.innerWidth >= 900;
                            const finalRotation = isDesktop ? rotation : 0;

                            // Set rotation
                            gsap.set(bubble, { rotation: finalRotation });

                            const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05);
                            const tl = gsap.timeline({ delay });
                            tl.to(bubble, {
                                scale: 1,
                                autoAlpha: 1,
                                duration: animationDuration,
                                ease: animationEase
                            });
                            if (submenuLabels[i]) {
                                tl.to(
                                    submenuLabels[i],
                                    {
                                        y: 0,
                                        autoAlpha: 1,
                                        duration: animationDuration,
                                        ease: 'power3.out'
                                    },
                                    '-=' + animationDuration * 0.9
                                );
                            }
                        }
                    });
                }, 10);
            }
        } else if (showOverlay) {
            gsap.killTweensOf([...bubbles, ...labels, ...submenuBubbles, ...submenuLabels]);
            gsap.to([...labels, ...submenuLabels], {
                y: 24,
                autoAlpha: 0,
                duration: 0.2,
                ease: 'power3.in'
            });
            gsap.to([...bubbles, ...submenuBubbles], {
                scale: 0,
                duration: 0.2,
                ease: 'power3.in',
                onComplete: () => {
                    gsap.set(overlay, { display: 'none' });
                    setShowOverlay(false);
                }
            });
        }
    }, [isMenuOpen, showOverlay, activeSubmenu, animationEase, animationDuration, staggerDelay]);

    useEffect(() => {
        const handleResize = () => {
            if (isMenuOpen) {
                const bubbles = bubblesRef.current.filter(Boolean);
                const isDesktop = window.innerWidth >= 900;
                bubbles.forEach((bubble, i) => {
                    const item = menuItems[i];
                    if (bubble && item) {
                        const rotation = isDesktop ? (item.rotation ?? 0) : 0;
                        gsap.set(bubble, { rotation });
                    }
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen, menuItems]);


    // Reset submenu refs when returning to main menu
    useEffect(() => {
        if (activeSubmenu === null) {
            submenuBubblesRef.current = [];
            submenuLabelRefs.current = [];
        }
    }, [activeSubmenu]);




    return (
        <>
            {/* Custom styles for the bubble menu */ }
            <style>{ `
        .bubble-menu .menu-line {
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):nth-last-child(2) {
          margin-left: calc(100% / 6);
        }
        .bubble-menu-items .pill-list .pill-col:nth-child(4):last-child {
          margin-left: calc(100% / 3);
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-link {
            transform: rotate(var(--item-rot));
          }
          .bubble-menu-items .pill-link:hover {
            transform: rotate(var(--item-rot)) scale(1.06);
            background: var(--hover-bg) !important;
            color: var(--hover-color) !important;
          }
          .bubble-menu-items .pill-link:active {
            transform: rotate(var(--item-rot)) scale(.94);
          }
        }
        @media (max-width: 899px) {
          .bubble-menu-items {
            padding-top: 120px;
            align-items: flex-start;
          }
          .bubble-menu-items .pill-list {
            row-gap: 16px;
          }
          .bubble-menu-items .pill-list .pill-col {
            flex: 0 0 100% !important;
            margin-left: 0 !important;
            overflow: visible;
          }
          .bubble-menu-items .pill-link {
            font-size: clamp(1.2rem, 3vw, 4rem);
            padding: clamp(1rem, 2vw, 2rem) 0;
            min-height: 80px !important;
          }
          .bubble-menu-items .pill-link:hover {
            transform: scale(1.06);
            background: var(--hover-bg);
            color: var(--hover-color);
          }
          .bubble-menu-items .pill-link:active {
            transform: scale(.94);
          }
        }
        
        /* Submenu specific styles */
        .bubble-menu-items .pill-label {
          word-wrap: break-word;
          hyphens: auto;
        }
      `}</style>

            <nav className={ containerClassName } style={ style } aria-label="Main navigation">
                <Link
                    href="/"
                    className={ [
                        'bubble logo-bubble',
                        'inline-flex items-center justify-center',
                        'rounded-full',
                        'bg-white',
                        'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
                        'pointer-events-auto',
                        'h-12 md:h-14',
                        'px-2 md:px-4',
                        'gap-2',
                        'will-change-transform',
                        'hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]',
                        'transition-shadow duration-300',
                        'no-underline'
                    ].join(' ') }
                    aria-label="Logo - Ir al inicio"
                    style={ {
                        background: menuBg,
                        minHeight: '48px',
                        borderRadius: '9999px'
                    } }
                >
                    <span
                        className={ ['logo-content', 'inline-flex items-center justify-center', 'w-[120px] h-full'].join(' ') }
                        style={
                            {
                                ['--logo-max-height']: '60%',
                                ['--logo-max-width']: '100%'
                            } as CSSProperties
                        }
                    >
                        { typeof logo === 'string' ? (
                            <img src={ logo } alt="Logo" className="bubble-logo max-h-[60%] max-w-full object-contain block" />
                        ) : (
                            logo
                        ) }
                    </span>
                </Link>

                <button
                    type="button"
                    className={ [
                        'bubble toggle-bubble menu-btn',
                        isMenuOpen ? 'open' : '',
                        'inline-flex items-center justify-center',
                        'rounded-full',
                        'bg-white',
                        'shadow-[0_4px_16px_rgba(0,0,0,0.12)]',
                        'pointer-events-auto',
                        'w-12 h-12 md:w-14 md:h-14',
                        'border-0 cursor-pointer p-0',
                        'will-change-transform'
                    ].join(' ') }
                    onClick={ handleToggle }
                    aria-label={ activeSubmenu !== null ? 'Volver al menú principal' : menuAriaLabel }
                    aria-pressed={ isMenuOpen }
                    style={ { background: menuBg } }
                >
                    { activeSubmenu !== null ? (
                        // Back arrow when in submenu
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            style={ { color: menuContentColor } }
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={ 2 }
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    ) : (
                        // Hamburger menu when in main menu
                        <div className="flex flex-col items-center justify-center w-full h-full">
                            <span
                                className="menu-line block mx-auto rounded-[2px]"
                                style={ {
                                    width: 26,
                                    height: 2,
                                    background: menuContentColor,
                                    transform: isMenuOpen ? 'translateY(4px) rotate(45deg)' : 'none'
                                } }
                            />
                            <span
                                className="menu-line short block mx-auto rounded-[2px]"
                                style={ {
                                    marginTop: '6px',
                                    width: 26,
                                    height: 2,
                                    background: menuContentColor,
                                    transform: isMenuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none'
                                } }
                            />
                        </div>
                    ) }
                </button>
            </nav>

            { showOverlay && (
                <>
                    {/* Background blur overlay */ }
                    <div
                        className={ [
                            'bubble-menu-backdrop',
                            useFixedPosition ? 'fixed' : 'absolute',
                            'inset-0',
                            'bg-black/20',
                            'backdrop-blur-md',
                            'pointer-events-none',
                            'z-[999]'
                        ].join(' ') }
                        aria-hidden={ !isMenuOpen }
                    />

                    {/* Menu items */ }
                    <div
                        ref={ overlayRef }
                        className={ [
                            'bubble-menu-items',
                            useFixedPosition ? 'fixed' : 'absolute',
                            'inset-0',
                            'flex items-center justify-center',
                            'pointer-events-none',
                            'z-[1000]'
                        ].join(' ') }
                        aria-hidden={ !isMenuOpen }
                    >
                        <ul
                            key={ activeSubmenu === null ? 'main-menu' : `submenu-${ activeSubmenu }` }
                            className={ [
                                'pill-list',
                                'list-none m-0 px-6',
                                'w-full max-w-[1600px] mx-auto',
                                'flex flex-wrap',
                                'gap-x-0 gap-y-1',
                                'pointer-events-auto'
                            ].join(' ') }
                            role="menu"
                            aria-label="Menu links"
                        >
                            { activeSubmenu === null ? (
                                // Main menu items
                                menuItems.map((item, idx) => (
                                    <li
                                        key={ idx }
                                        role="none"
                                        className={ [
                                            'pill-col',
                                            'flex justify-center items-stretch',
                                            '[flex:0_0_calc(100%/3)]',
                                            'box-border',
                                            'relative'
                                        ].join(' ') }
                                        onMouseEnter={ () => setHoveredItem(idx) }
                                        onMouseLeave={ () => setHoveredItem(null) }
                                    >
                                        <button
                                            onClick={ (e) => handleMainItemClick(e, item, idx) }
                                            role="menuitem"
                                            aria-label={ item.ariaLabel || item.label }
                                            className={ [
                                                'pill-link',
                                                'w-full',
                                                'rounded-[999px]',
                                                'no-underline',
                                                'bg-white',
                                                'text-inherit',
                                                'shadow-[0_4px_14px_rgba(0,0,0,0.10)]',
                                                'flex items-center justify-center',
                                                'relative',
                                                'transition-[background,color] duration-300 ease-in-out',
                                                'box-border',
                                                'whitespace-nowrap overflow-hidden',
                                                'cursor-pointer',
                                                'border-0',
                                                isActive(item.href) ? 'ring-2 ring-primary' : ''
                                            ].join(' ') }
                                            style={
                                                {
                                                    ['--item-rot']: `${ item.rotation ?? 0 }deg`,
                                                    ['--pill-bg']: menuBg,
                                                    ['--pill-color']: menuContentColor,
                                                    ['--hover-bg']: item.hoverStyles?.bgColor || '#f3f4f6',
                                                    ['--hover-color']: item.hoverStyles?.textColor || menuContentColor,
                                                    background: 'var(--pill-bg)',
                                                    color: 'var(--pill-color)',
                                                    minHeight: 'var(--pill-min-h, 160px)',
                                                    padding: 'clamp(1.5rem, 3vw, 8rem) 0',
                                                    fontSize: 'clamp(1.5rem, 4vw, 4rem)',
                                                    fontWeight: 400,
                                                    lineHeight: 0,
                                                    willChange: 'transform',
                                                    height: 10
                                                } as CSSProperties
                                            }
                                            ref={ el => {
                                                if (el) bubblesRef.current[idx] = el;
                                            } }
                                        >
                                            <span
                                                className="pill-label inline-block"
                                                style={ {
                                                    willChange: 'transform, opacity',
                                                    height: '1.2em',
                                                    lineHeight: 1.2
                                                } }
                                                ref={ el => {
                                                    if (el) labelRefs.current[idx] = el;
                                                } }
                                            >
                                                { item.label }
                                            </span>
                                        </button>
                                    </li>
                                ))
                            ) : (
                                // Submenu items (with rotations)
                                submenuItemsWithRotations.map((subItem, subIdx) => (
                                    <li
                                        key={ subIdx }
                                        role="none"
                                        className={ [
                                            'pill-col',
                                            'flex justify-center items-stretch',
                                            '[flex:0_0_calc(100%/3)]',
                                            'box-border',
                                            'relative'
                                        ].join(' ') }
                                    >
                                        <button
                                            onClick={ () => handleSubmenuItemClick(subItem.href) }
                                            role="menuitem"
                                            aria-label={ subItem.ariaLabel || subItem.label }
                                            className={ [
                                                'pill-link',
                                                'w-full',
                                                'rounded-[999px]',
                                                'no-underline',
                                                'bg-white',
                                                'text-inherit',
                                                'shadow-[0_4px_14px_rgba(0,0,0,0.10)]',
                                                'flex items-center justify-center',
                                                'relative',
                                                'transition-[background,color] duration-300 ease-in-out',
                                                'box-border',
                                                'whitespace-nowrap overflow-hidden',
                                                'cursor-pointer',
                                                'border-0',
                                                isActive(subItem.href) ? 'ring-2 ring-primary' : ''
                                            ].join(' ') }
                                            style={
                                                {
                                                    ['--item-rot']: `${ subItem.rotation || 0 }deg`,
                                                    ['--pill-bg']: menuBg,
                                                    ['--pill-color']: menuContentColor,
                                                    ['--hover-bg']: menuItems[activeSubmenu]?.hoverStyles?.bgColor || '#f3f4f6',
                                                    ['--hover-color']: menuItems[activeSubmenu]?.hoverStyles?.textColor || menuContentColor,
                                                    background: 'var(--pill-bg)',
                                                    color: 'var(--pill-color)',
                                                    minHeight: 'var(--pill-min-h, 160px)',
                                                    padding: 'clamp(1.5rem, 3vw, 8rem) 0',
                                                    fontSize: 'clamp(1.2rem, 3.5vw, 3.5rem)',
                                                    fontWeight: 400,
                                                    lineHeight: 0,
                                                    willChange: 'transform',
                                                    height: 10
                                                } as CSSProperties
                                            }
                                            ref={ el => {
                                                if (el) submenuBubblesRef.current[subIdx] = el;
                                            } }
                                        >
                                            <span
                                                className="pill-label inline-block text-center"
                                                style={ {
                                                    willChange: 'transform, opacity',
                                                    height: '1.2em',
                                                    lineHeight: 1.2,
                                                    maxWidth: '100%',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis'
                                                } }
                                                ref={ el => {
                                                    if (el) submenuLabelRefs.current[subIdx] = el;
                                                } }
                                            >
                                                { subItem.label }
                                            </span>
                                        </button>
                                    </li>
                                ))
                            ) }
                        </ul>
                    </div>
                </>
            ) }
        </>
    );
}
