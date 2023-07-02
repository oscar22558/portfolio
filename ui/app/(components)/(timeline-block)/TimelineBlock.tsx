import { Icon } from "../(icon)/Icon"
import { TimelineModel } from "./TimelineBlockModel"
import style from "./style.module.css"

interface Props{
    model: TimelineModel
    icon?: string
}
export function TimelineBlock({model, icon = "/graduation-cap.svg"}: Props){
    const {leftContent, leftTitle, rightContent, rightTitle} = model
    const rightContentList = typeof rightContent === "string" ? [rightContent] : rightContent
    return (
        <div className={`flex flex-row items-start ${style["container"]}`}>
            <div className="basis-0 grow px-8 flex flex-col justify-start items-end">
                <div className=" text-right">{leftTitle}</div>
                <div className="pt-4 text-gray-500 text-right">{leftContent}</div>
            </div>
            <div>
                <Icon src={icon} className={`${style["icon"]} transition duration-500`}/>
            </div>
            <div className="basis-0 grow px-8 flex flex-col justify-start items-start">
                <div className=" text-left mb-2">{rightTitle}</div>
                {rightContentList.map((content, index) => (
                    <div className="mt-2 text-gray-500  text-left">{content}</div>
                ))}
            </div>
        </div>
    )
}