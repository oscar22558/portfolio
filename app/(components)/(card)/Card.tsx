import { ReactNode } from "react";
import style from "./style.module.css";

interface Props{
    title?: string
    content?: string
    image?: ReactNode
    color?: string
}

export function Card({title, content, image, color}: Props){
    return (
        <div className={`${style["card-container"]} ${style["card-container-width"]} ${style["card-container-height"]} h-full w-full shadow-2xl p-4 md:p-8 border-b-4`} style={{borderBottomColor: `${color}`}}>
            <div className={`flex justify-center`}>
                {image}
            </div>
            <br />
            <div className="font-semibold text-center">{title}</div>
            <br />
            <div className="text-gray-500 text-start">{content}</div>
        </div>
    )
}