import NumberButton from "./buttons/NumberButton.tsx";
import ActionButton from "./buttons/ActionButton.tsx";
import {DivideIcon, EqualsIcon, MinusIcon, PlusIcon, TrashIcon, XMarkIcon} from "@heroicons/react/24/solid";
import {actionButtonClass} from "../lib";
import {useGlobalStore} from "../lib/store/globalStore.ts";


export default function CalculatorButtons(){

    const setMainField = useGlobalStore(store => store.setMainField)
    const clearMainField = useGlobalStore(store => store.clearMainField)

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

    const point = () => {
        setMainField('.');
    }


    return (
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
                <NumberButton
                    label={'.'}
                    onClick={point}
                />
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
    )
}