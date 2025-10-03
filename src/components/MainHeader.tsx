
import {Bars3Icon} from "@heroicons/react/24/solid";
import {useGlobalStore} from "../lib/store/globalStore.ts";

export default function MainHeader() {

    const setIsSideBarOpen = useGlobalStore(s => s.setIsSideBarOpen)
    const isSideBarOpen = useGlobalStore(s => s.isSideBarOpen)

    return (
        <header className={`flex ${isSideBarOpen ? 'justify-end' : 'justify-between' }  items-center py-3 px-4 md:px-6 bg-[#2b2828]/80
            backdrop-blur text-white sticky top-0`}>
                <button
                    onClick={setIsSideBarOpen}
                    className={`${isSideBarOpen ? 'hidden' : '' } cursor-pointer p-2 rounded-lg hover:bg-white/5 focus:outline-none 
                focus-visible:ring-2 focus-visible:ring-white/40`}
                >
                    <Bars3Icon className={`h-7 w-7 md:h-8 md:w-8`} />
                </button>

            <h1 className="text-xl md:text-2xl font-semibold">Wertas Calculator</h1>
        </header>

    )
}
