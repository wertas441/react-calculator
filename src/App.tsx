import NumberButton from "./components /buttons/NumberButton.tsx";
import ActionButton from "./components /buttons/ActionButton.tsx";
import {
    EqualsIcon,
    DivideIcon,
    MinusIcon,
    PlusIcon,
    XMarkIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import {actionButtonClass} from "./lib";
import {useEffect} from "react";
import {useGlobalStore} from "./lib/store/globalStore.ts";


export default function App() {

    let mainFieldNumberClass = `text-3xl md:text-5xl`
    const mainField = useGlobalStore(store => store.mainField)
    const setMainField = useGlobalStore(store => store.setMainField)
    const clearMainField = useGlobalStore(store => store.clearMainField)

    useEffect(() => {
        if (mainField.length > 4){
            mainFieldNumberClass = `text-sm md:text-sm`
        } else {
            mainFieldNumberClass = `text-3xl md:text-5xl`
        }
    }, [mainField]);

    const numberZero = () => {
        setMainField('0');

    }

    const numberOne = () => {
        setMainField('1');
    }

    const numberTwo = () => {
        setMainField('2');
    }

    const numberThree = () => {
        setMainField( '3');
    }

    const numberFour = () => {
        setMainField( '4');
    }

    const numberFive = () => {
        setMainField('5');
    }

    const numberSix = () => {
        setMainField('6');
    }

    const numberSeven = () => {
        setMainField('7');
    }

    const numberEight = () => {
        setMainField('8');
    }

    const numberNine = () => {
        setMainField('9');
    }


    return (
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

                <div className="flex gap-2 md:gap-3">
                    <div className="grid grid-cols-3 gap-2 md:gap-3 flex-1">
                        <NumberButton
                            label={'7'}
                            onClick={numberSeven}
                        />
                        <NumberButton
                            label={'8'}
                            onClick={numberEight}
                        />
                        <NumberButton
                            label={'9'}
                            onClick={numberNine}
                        />

                        <NumberButton
                            label={'4'}
                            onClick={numberFour}
                        />
                        <NumberButton
                            label={'5'}
                            onClick={numberFive}
                        />
                        <NumberButton
                            label={'6'}
                            onClick={numberSix}
                        />

                        <NumberButton
                            label={'1'}
                            onClick={numberOne}
                        />
                        <NumberButton
                            label={'2'}
                            onClick={numberTwo}
                        />
                        <NumberButton
                            label={'3'}
                            onClick={numberThree}
                        />

                        <NumberButton
                            label={'0'}
                            className="col-span-2"
                            onClick={numberZero}
                        />
                        <NumberButton label={'.'} />
                    </div>
                    <div className="grid grid-cols-1 gap-2 md:gap-3">
                        <ActionButton
                            icon={<TrashIcon className={`${actionButtonClass} `} /> }
                            className="bg-rose-600 hover:bg-rose-500"
                            onClick={clearMainField}
                        />
                        <ActionButton
                            icon={<DivideIcon className={`${actionButtonClass} `} /> }
                        />
                        <ActionButton
                            icon={<XMarkIcon className={`${actionButtonClass} `} /> }
                        />
                        <ActionButton
                            icon={<MinusIcon className={`${actionButtonClass} `} /> }
                        />
                        <ActionButton
                            icon={<PlusIcon className={`${actionButtonClass} `} /> }
                        />
                        <ActionButton
                            icon={<EqualsIcon className={`${actionButtonClass} `} /> }
                            className="bg-amber-600 hover:bg-amber-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

