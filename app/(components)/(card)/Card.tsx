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
        <div className={`${style["card-container"]} shadow-2xl p-12 border-b-4`} style={{borderBottomColor: `${color}`}}>
            <div className={`flex justify-center`}>
                {image}
            </div>
            <br />
            <div className="font-semibold text-center">{title}</div>
            <br />
            <div className="text-gray-500 text-justify">{content}</div>
        </div>
    )
}