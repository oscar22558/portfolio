import { ReactNode } from "react"

export interface Props{
    children?: ReactNode
    index: number
}

export function SkillStackItem({children, index}: Props){
    const borderColors = ["border-sky-400", "border-yellow-400", "border-pink-400"]
    const color = borderColors[index%3]
    return <div className={`text-lg shadow p-4 hover:shadow-xl hover:bg-white transition ease duration-500 border-l-4 ${color} text-gray-500`}>{children}</div>
}