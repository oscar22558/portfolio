import { ReactNode } from 'react'
import style from './style.module.css'

interface Props{
    children?: ReactNode
}

export function SectionContentContainer({children}: Props){
    return (
        <div className="px-12 w-full flex justify-center">
            <div className={`${style["max-width-container"]} flex flex-col items-center w-full`}>
                {children}
            </div>
        </div>
    )
}