import { ReactNode } from "react";
import style from "./style.module.css";
import Text from "../(text)/Text";

interface Props{
    title?: string
    content?: string
    image?: ReactNode
    color?: string
}

export function Card({title, content, image, color}: Props){
    return (
        <div className={`${style["card-container"]} ${style["card-container-width"]} ${style["card-container-height"]} h-full w-full shadow-xl p-4 border-t-4 lg:border-t-0 lg:border-r-4 hover:shadow-2xl transition-shadow duration-300`} style={{borderBottomColor: color}}>
            <div className="flex justify-center items-center mb-4">
                {image}
            </div>
            <div className="flex justify-center items-center mb-4 font-semibold">
                        <Text color="text-black">{title}</Text>
            </div>
            <div><Text className="text-center">{content}</Text></div>
        </div>
    )
}