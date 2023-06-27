import { TimelineModel } from "./TimelineBlockModel"
import style from "./style.module.css"

interface Props{
    model: TimelineModel
    icon?: string
}
export function TimelineBlock({model, icon = "/graduation-cap.svg"}: Props){
    const {leftContent, leftTitle, rightContent, rightTitle} = model
    return (
        <div className="flex flex-row items-start">
            <div className="basis-0 grow px-8 flex flex-col justify-start items-end">
                <div className=" text-right">{leftTitle}</div>
                <div className="pt-4 text-gray-500 text-right">{leftContent}</div>
            </div>
            <div>
                <div className={`rounded-full h-12 w-12 bg-sky-500 text-white flex justify-center items-center`}>
                    <img className={style["svg-color"]} src={icon} alt="" height={24} width={24} />
                </div>
            </div>
            <div className="basis-0 grow px-8 flex flex-col justify-start items-start">
                <div className=" text-left">{rightTitle}</div>
                <div className="pt-4 text-gray-500  text-left">{rightContent}</div>
            </div>
        </div>
    )
}