interface IconProps {
    className?: string;
    size?: number;
}

export const AwardIcon: React.FC<IconProps> = ({ className = "", size = 45 }) => {
    return (
        <svg
            width={ size }
            height={ size }
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={ className }
        >
            <g clipPath="url(#clip0_352_17)">
                <path d="M22.5 28.125C29.7487 28.125 35.625 22.2487 35.625 15C35.625 7.75126 29.7487 1.875 22.5 1.875C15.2513 1.875 9.375 7.75126 9.375 15C9.375 22.2487 15.2513 28.125 22.5 28.125Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15.3938 26.0437L13.125 43.1249L22.5 37.4999L31.875 43.1249L29.6062 26.0249" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_352_17">
                    <rect width="45" height="45" fill="currentColor" />
                </clipPath>
            </defs>
        </svg>
    );
};

