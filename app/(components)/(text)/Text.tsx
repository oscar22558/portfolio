import { ReactNode } from "react";
import style from "./style.module.css"

interface Props{
    children?: ReactNode
    className?: string
    color?: string
}

export function Text({children, className, color = "text-gray-500"}: Props){

    return <span className={`${color} text-base inline-block ${style["max-width"]} ${className}`}>{children}</span>
}

export default Text