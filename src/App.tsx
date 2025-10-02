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



export default function App() {

  return (
      <div className="flex items-center justify-center sm:mt-1 mt-7 px-3">
          <div className="w-full max-w-md md:max-w-lg p-4 md:p-6 rounded-2xl border border-white/10
          bg-white/5">
              <div className="mb-4 md:mb-6">
                  <div className="rounded-xl bg-black/30 text-white p-4 md:p-5 border border-white/10">
                      <div className="text-white/60 text-sm md:text-base text-right truncate">0</div>
                      <div className="font-bold text-3xl md:text-5xl text-right leading-tight">0</div>
                  </div>
              </div>

              <div className="flex gap-2 md:gap-3">
                  <div className="grid grid-cols-3 gap-2 md:gap-3 flex-1">
                      <NumberButton label={'7'} />
                      <NumberButton label={'8'} />
                      <NumberButton label={'9'} />

                      <NumberButton label={'4'} />
                      <NumberButton label={'5'} />
                      <NumberButton label={'6'} />

                      <NumberButton label={'1'} />
                      <NumberButton label={'2'} />
                      <NumberButton label={'3'} />

                      <NumberButton label={'0'} className="col-span-2" />
                      <NumberButton label={'.'} />
                  </div>
                  <div className="grid grid-cols-1 gap-2 md:gap-3">
                      <ActionButton
                          icon={<TrashIcon className={`${actionButtonClass} `} /> }
                          className="bg-rose-600 hover:bg-rose-500"
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

