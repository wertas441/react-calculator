
import {Bars3Icon} from "@heroicons/react/24/solid";
import {useState} from "react";

export default function MainHeader() {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    return (
        <header className="flex justify-between items-center py-3 px-4 md:px-6 bg-[#2b2828]/80
        backdrop-blur text-white sticky top-0 z-10">
            <button
                onClick={toggleModal}
                className={`cursor-pointer p-2 rounded-lg hover:bg-white/5 focus:outline-none 
                focus-visible:ring-2 focus-visible:ring-white/40`}
            >
                <Bars3Icon className={`h-7 w-7 md:h-8 md:w-8`} />
            </button>
            <h1 className="text-xl md:text-2xl font-semibold">Wertas Calculator</h1>
        </header>
    )
}
