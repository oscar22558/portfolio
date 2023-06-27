import { TimelineModel } from "./TimelineBlockModel"
import style from "./style.module.css"

interface Props{
    model: TimelineModel
}
export function TimelineBlock({model}: Props){
    const {leftContent, leftTitle, rightContent, rightTitle} = model
    return (
        <div className="flex flex-row items-start">
            <div className="basis-0 grow px-8 flex flex-col justify-start items-end">
                <div>{leftTitle}</div>
                <div className="pt-4 text-gray-500">{leftContent}</div>
            </div>
            <div>
                <div className={`rounded-full h-12 w-12 bg-sky-500 text-white flex justify-center items-center`}>
                    <img className={style["svg-color"]} src="/graduation-cap.svg" alt="" height={24} width={24} />
                </div>
            </div>
            <div className="basis-0 grow px-8 flex flex-col justify-start items-start">
                <div>{rightTitle}</div>
                <div className="pt-4 text-gray-500">{rightContent}</div>
            </div>
        </div>
    )
}