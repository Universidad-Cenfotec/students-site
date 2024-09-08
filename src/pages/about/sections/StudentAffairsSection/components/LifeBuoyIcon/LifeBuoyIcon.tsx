import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const LifeBuoyIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon { ...props }>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 41.25C32.8553 41.25 41.25 32.8553 41.25 22.5C41.25 12.1447 32.8553 3.75 22.5 3.75C12.1447 3.75 3.75 12.1447 3.75 22.5C3.75 32.8553 12.1447 41.25 22.5 41.25Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22.5 30C26.6421 30 30 26.6421 30 22.5C30 18.3579 26.6421 15 22.5 15C18.3579 15 15 18.3579 15 22.5C15 26.6421 18.3579 30 22.5 30Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.24365 9.24377L17.1937 17.1938" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.8062 27.8063L35.7562 35.7563" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.8062 17.1938L35.7562 9.24377" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.8062 17.1937L34.4249 10.575" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9.24365 35.7563L17.1937 27.8063" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </SvgIcon>
    );
};
