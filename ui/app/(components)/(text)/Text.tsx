import { ReactNode } from "react";
import AppClassName from "@/app/AppClassName";

interface Props{
    children?: ReactNode
    className?: string
    color?: string
}

export function Text({children, className, color = AppClassName.contentTextColor}: Props){
    return <span className={`${color} inline-block max-w-[600px] ${className}`}>{children}</span>
}

export default Text