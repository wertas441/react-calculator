import {Bars3Icon} from "@heroicons/react/24/solid";
import {useGlobalStore} from "../lib/store/globalStore.ts";


export default function SideBar(){

    const setIsSideBarOpen = useGlobalStore(s => s.setIsSideBarOpen)

    return (
        <aside className={`absolute top-0 left-0 h-full w-90 border-r p-4 bg-white/5 transform 
                transition-transform duration-300 border-white/10 ease-in-out z-70`}>
            <div className="flex justify-between text-white px-2 items-center">
                <button
                    onClick={setIsSideBarOpen}
                    className={`cursor-pointer p-2 rounded-lg hover:bg-white/5 focus:outline-none 
                focus-visible:ring-2 focus-visible:ring-white/40`}
                >
                    <Bars3Icon className={`h-7 w-7 md:h-8 md:w-8`} />
                </button>
                <h1 className={`text-xl font-semibold pr-2`}>История вычислений</h1>
            </div>
        </aside>
    )
}