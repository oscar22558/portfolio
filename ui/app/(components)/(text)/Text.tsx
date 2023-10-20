import { ReactNode } from "react";

interface Props{
    children?: ReactNode
    className?: string
    color?: string
}

export function Text({children, className, color = "text-gray-500"}: Props){
    return <span className={`${color} inline-block max-w-[600px] ${className}`}>{children}</span>
}

export default Text