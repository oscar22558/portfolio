import { ReactNode } from "react"

interface Props{
    children?: ReactNode
}

export function TechItem({children}: Props){
    return <div className="ml-2 mt-2 rounded-full text-white py-2 px-4 bg-[#0EA5E9] flex justify-center items-center"><span>{children}</span></div>
}