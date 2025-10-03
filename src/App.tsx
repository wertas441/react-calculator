import {useEffect} from "react";
import {useGlobalStore} from "./lib/store/globalStore.ts";
import SideBar from "./components/SideBar.tsx";
import CalculatorButtons from "./components/CalculatorButtons.tsx";


export default function App() {

    let mainFieldNumberClass = `text-3xl md:text-5xl`
    const mainField = useGlobalStore(store => store.mainField)
    const isSideBarOpen = useGlobalStore(s => s.isSideBarOpen)


    useEffect(() => {
        if (mainField.length > 4){
            mainFieldNumberClass = `text-sm md:text-sm`
        } else {
            mainFieldNumberClass = `text-3xl md:text-5xl`
        }
    }, [mainField]);

    return (
        <>
            {isSideBarOpen &&(
                <SideBar />
            )}

            <div className="flex items-center justify-center sm:mt-1 mt-7 px-3">
                <div className="w-full max-w-md md:max-w-lg p-4 md:p-6 rounded-2xl border border-white/10
            bg-white/5">
                    <div className="mb-4 md:mb-6">
                        <div className="rounded-xl bg-black/30 text-white p-4 md:p-5 border border-white/10">
                            <div className="text-white/60 text-sm md:text-base text-right truncate">0</div>
                            <div className={`font-bold text-right leading-tight ${mainFieldNumberClass}`}>
                                {mainField === '' ? (
                                    0
                                ):(
                                    mainField
                                )}
                            </div>
                        </div>
                    </div>

                    <CalculatorButtons />

                </div>
            </div>
        </>
    )
}

