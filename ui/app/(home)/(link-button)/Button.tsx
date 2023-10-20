import { MouseEventHandler, ReactNode } from "react"

interface Props{
    onClick?: MouseEventHandler<HTMLSpanElement>
    children?: ReactNode
    className?: string | null 
    mode: "contained" | "outlined"
}

const Button = ({onClick, children, className, mode}: Props)=>{
    const textColor = mode === "contained" ? "text-white" : "text-[#0EA5E9]"
    const bgColor = mode === "contained" ? "bg-[#0EA5E9]" : "bg-white"
    const border = mode === "contained" ? "border-2" : "border-2"
    return <div className={`rounded-xl inline-block inline-flex justify-center items-center py-3 sm:py-4 px-4 cursor-pointer transition duration-500 hover:scale-110 border-[#0EA5E9] ${border} ${bgColor} ${className}`} onClick={onClick}>
        <span className={`${textColor} text-lg sm:text-xl`}>{children}</span>
    </div>
}
export default Button