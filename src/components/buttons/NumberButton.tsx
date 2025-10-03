
interface NumberButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

export default function NumberButton({label, className, onClick}: NumberButtonProps) {

    const handleNothing = () => {
        return;
    }

    return (
        <button
            onClick={onClick ?? handleNothing}
            className={`select-none rounded-lg font-bold text-center text-white bg-amber-500 
            hover:bg-amber-400 active:translate-y-[1px] shadow-md shadow-black/30 focus:outline-none 
            focus-visible:ring-2 focus-visible:ring-amber-300/60 px-5 py-4 md:px-6 
            md:py-5 text-2xl md:text-4xl ${className}`}
        >
            {label}
        </button>
    )
}