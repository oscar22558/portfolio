import Image from "next/image"
import style from "./style.module.css"

interface Props{
    src: string
    color?: string
    colorClass?: string
    size?: number
    className?: string
}

export function Icon({
    src, 
    color = "",
    colorClass = "",
    size,
    className = "",
}: Props){
    const iconSize = size != null ? size/2 : 24
    const iconDimension = {height: iconSize, width: iconSize}
    var containerStyle = {}
    if(color){
        containerStyle = {backgroundColor: color}
    }
    if(size != null){
        containerStyle = {
            ...containerStyle,
            height: size,
            width: size
        }
    }
    return (
        <div 
            className={`rounded-full bg-sky-500 text-white flex justify-center items-center 
                ${size != null ? "" : "h-12 w-12"} ${colorClass} ${className}`} 
            style={containerStyle}
        >
            <Image className={style["svg-color"]} src={src} alt="" {...iconDimension} style={iconDimension}/>
        </div>
    )
}