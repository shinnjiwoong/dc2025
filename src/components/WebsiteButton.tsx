'use client';

interface WebsiteButtonProps {
    title: string;
    url: string;
    onClick: () => void;
    isActive: boolean;
    fontSize?: string;
    index?: number;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

export default function WebsiteButton({
    title,
    url,
    onClick,
    isActive,
    fontSize,
    index,
    onMouseEnter,
    onMouseLeave,
}: WebsiteButtonProps) {
    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`flex items-center justify-between grow-2 font-semibold transition-all duration-200 
        `}
            style={{
                fontSize: fontSize || '1rem',
            }}
        >
            <img
                className="h-full w-auto"
                src="/images/paren_left.svg"
                alt=""
            />
            <div className="flex flex-col items-center justify-center h-full w-full">
                <div className="aspect-square bg-black text-[2dvw] text-white underline-white rounded-full">
                    {index}
                </div>
                <p
                    className={`leading-[1.3] hover:underline hover:decoration-[20px] ${
                        isActive
                            ? 'bg-transparent text-black underline decoration-[20px]'
                            : 'bg-transparent text-black'
                    }`}
                    style={{
                        fontSize: fontSize || '1rem',
                    }}
                >
                    {title}
                </p>
            </div>
            <img
                className="h-full w-auto"
                src="/images/paren_right.svg"
                alt=""
            />
        </button>
    );
}
