import { ReactNode } from "react"

interface Props{
    children?: ReactNode
}

export function TimelineContainer({children}: Props){
    return (
        <div className={`w-full relative pt-8`}>
            <div className="h-full w-px absolute top-0 left-1/2 bg-sky-500"></div>
            {children}
        </div>
    )
}