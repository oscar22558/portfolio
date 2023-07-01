import { ReactNode } from "react";
import style from "./style.module.css"
import AppClassName from "@/app/AppClassName";

interface Props{
    children?: ReactNode
    className?: string
    color?: string
}

export function Text({children, className, color = AppClassName.contentTextColor}: Props){
    return <span className={`${color} text-base inline-block ${style["max-width"]} ${className}`}>{children}</span>
}

export default Text