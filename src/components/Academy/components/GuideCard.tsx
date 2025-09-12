interface GuideCardProps {
    title: string;
    link: string;
    imageUrl: string;
    style?: React.CSSProperties;
}

export const GuideCard = ({ title, link, imageUrl, style }: GuideCardProps) => {
    return (
        <div
            className="card w-64 h-[355px] bg-base-100 shadow-xl text-left flex flex-col justify-center rounded-xl"
            style={ style }
        >
            <div className="card-body h-full flex flex-col items-center justify-around">
                <img src={ imageUrl } alt={ title } className="w-36 h-auto" />
                <h2 className="card-title text-secondary font-semibold text-xl leading-tight mb-1">
                    { title }
                </h2>
                <a
                    href={ link }
                    target='_blank'
                    rel="noopener noreferrer"
                    className="btn btn-primary text-white btn-lg"
                >
                    Ver Guía
                </a>
            </div>
        </div>
    );
};
