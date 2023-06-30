import { ReactNode } from "react"
import style from "./style.module.css"

export interface Props{
    children?: ReactNode
    index: number
    progress?: number
}

const borderColors = ["border-sky-400", "border-yellow-400", "border-pink-400", "border-rose-400", "border-violet-400", "border-emerald-400", ]
const badgeBgColors = ["bg-sky-400", "bg-yellow-400", "bg-pink-400", "bg-rose-400", "bg-violet-400", "bg-emerald-400", ]

export function SkillStackItem({children, index, progress = 0}: Props){
    const color = borderColors[index%6]
    const badgeBgColor = badgeBgColors[index%6]
    const minSize = 70
    return <div 
                className={`mt-6 ml-6 text-lg shadow p-4 hover:shadow-xl hover:bg-white 
                    transition ease duration-500 border-t-4 lg:border-l-4 lg:border-t-0 ${color} text-gray-500 relative flex flex-row items-center`} 
                style={{minHeight: minSize, minWidth: minSize}}
            >
        {children}
        <div className={`${badgeBgColor} border border-transparent rounded-full h-8 w-8 absolute top-0 right-0 ${style.badge} shadow text-white text-base flex justify-center items-center`}>
            <span className="text-center align-middle text-sm">
                {progress}%
            </span>
        </div>
    </div>
}