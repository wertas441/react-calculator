import * as React from "react";

interface ActionButtonProps {
    icon: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export default function ActionButton({icon, className, onClick}: ActionButtonProps) {

    const handleNothing = () => {
        return;
    }

    return (
        <button
            onClick={onClick ?? handleNothing}
            className={`select-none rounded-lg font-bold text-center text-white bg-slate-800 
            hover:bg-slate-700 active:translate-y-[1px] shadow-md shadow-black/30 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/60 px-5 py-4 
            md:px-6 md:py-5 text-2xl md:text-4xl ${className}`}
        >
            {icon}
        </button>
    )
}