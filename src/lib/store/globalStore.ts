import {create} from "zustand";
import {persist} from "zustand/middleware";

interface GlobalStore {
    isSideBarOpen: boolean;
    mainField: string;
    result: string;



    setIsSideBarOpen: () => void;
    setMainField: (char: string) => void;
    clearMainField: () => void;
}


export const useGlobalStore = create<GlobalStore>()(
    persist(
        (set, get) => ({
                isSideBarOpen: false,
                mainField: '',
                result: '',


                setMainField: (char: string) => {
                    set(state => ({
                        mainField: state.mainField + char
                    }));
                },

                clearMainField: () => {
                    set({mainField: '' });
                },

                setIsSideBarOpen: () => {
                    set(state => ({
                        isSideBarOpen: !state.isSideBarOpen,
                    }))
                },

            }
        )
    )
)