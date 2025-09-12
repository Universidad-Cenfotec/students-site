interface IconProps {
    className?: string;
    size?: number;
}

export const MonitorIcon: React.FC<IconProps> = ({ className = "", size = 45 }) => {
    return (
        <svg
            width={ size }
            height={ size }
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={ className }
        >
            <path d="M37.5 5.625H7.5C5.42893 5.625 3.75 7.30393 3.75 9.375V28.125C3.75 30.1961 5.42893 31.875 7.5 31.875H37.5C39.5711 31.875 41.25 30.1961 41.25 28.125V9.375C41.25 7.30393 39.5711 5.625 37.5 5.625Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 39.375H30" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22.5 31.875V39.375" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};
