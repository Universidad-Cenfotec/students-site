import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const MapIcon: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon { ...props }>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.875 11.25V41.25L16 33.75L31 41.25L44.125 33.75V3.75L31 11.25L16 3.75L2.875 11.25Z" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.75V33.75" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M31 11.25V41.25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </SvgIcon>
    );
};

