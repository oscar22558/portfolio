import { ReactNode } from 'react'
import style from './style.module.css'

interface Props{
    children?: ReactNode
}

export function SectionContainer({children}: Props){
    return (
        <div className={`${style.container} px-12 w-full flex justify-center`}>
            <div className={`${style["max-width-container"]} flex flex-initial flex-col items-center grow`}>
                {children}
            </div>
        </div>
    )
}